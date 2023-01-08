<template>
  <div class="container-data">

    <router-link to="/teeth-map" class="text-decoration-none">
      <back-button>
        Карта зубов
      </back-button>
    </router-link>

    <h1 class="container__h1">Итоговые данные</h1>

      <DataTable :value=chooseTeeth responsiveLayout="scroll">
        <Column field="stageNumber" header="Номер этапа"></Column>
        <Column field="toothNumber" header="Номер зуба"></Column>
        <Column field="typeConstruction" header="Тип конструкции"></Column>
        <Column field="implantSystem" header="Система имплантов и размеры"></Column>
        <Column field="material" header="Материал изготовления"></Column>
        <Column field="colorVita" header="Цвет по шкале Vita"></Column>
        <Column field="gumPart" header="Десневая часть"></Column>
        <Column field="carving" header="Опак и карвинг"></Column>
      </DataTable>


    <h2 class="container__h2">Заполните данные полей формы</h2>

    <form class="final-form" @submit.prevent>
      <InputText
          type="text"
          placeholder="ФИО заказчика*"
          v-model="lastForm.Client"
      />

      <InputText
          type="text"
          placeholder="ФИО пациента*"
          v-model="lastForm.Patient"
      />

      <InputText
          type="text"
          placeholder="Контактный номер телефона*"
          v-model="lastForm.Tel"
      />

      <InputText
          type="text"
          placeholder="Контактная почта*"
          v-model="lastForm.Email"
      />

      <InputText
          type="text"
          placeholder="Адрес доставки*"
          v-model="lastForm.Address"
      />


      <Calendar
          v-model="lastForm.Calendar"
          placeholder="Желаемая дата доставки"
          dateFormat="dd.mm.yy"
      />


      <Textarea v-model="lastForm.More" :autoResize="true" rows="5" cols="30" placeholder="Дополнительная информация к заказу" />

      <FileUpload name="upload" @select="selectFiles" @removeUploadedFile="removeFiles" :multiple="true" accept=".stl,.constructionInfo" :maxFileSize="100000000" id="myUpload"
                  :show-upload-button="false"
      />

      <div class="checkbox">

        <Checkbox v-model="checked" :binary="true" value="Согласен на обработку персональных данных" />
        <label> Согласен на обработку персональных данных</label>

      </div>

      <div class="buttons-wrapper">
          <my-button type="submit" class="text-decoration-none" @click="submitForm">Отправить в работу</my-button>
        <router-link to="/teeth-map" class="text-decoration-none">
          <my-button class="disabled">Вернуться к карте зубов</my-button>
        </router-link>
      </div>

    </form>


    <my-modal class="modal-center" v-model:show="progressModal">

      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Выполняется загрузка файла</h2>
        <ProgressBar :value="progressValue" />
        <h2 class="modal__h2" v-if="errorPush">Загрузка произошла с ошибкой, повторите попытку</h2>

      </div>

    </my-modal>


  </div>
</template>

<style lang='scss' src="./screen3.scss"></style>

<script>

import axios from "axios";
import MyModal from "@/components/UI/MyModal/MyModal";
import ProgressBar from 'primevue/progressbar';
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';     //optional for column grouping
import Row from 'primevue/row';                     //optional for row
import FileUpload from 'primevue/fileupload';
import Checkbox from 'primevue/checkbox';
import Textarea from 'primevue/textarea';
import InputText from 'primevue/inputtext';
import Calendar from 'primevue/calendar';
import MyButton from "@/components/UI/MyButton/MyButton";
import BackButton from "@/components/UI/BackButton/BackButton";
import router from "@/router/router";
import 'vue3-easy-data-table/dist/style.css';
import vueBaseInput from "vue-base-input";
import 'vue-base-input/src/assets/vue-base-input.css';
import {mapGetters} from "vuex";
import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import 'primevue/resources/primevue.min.css';             //core css
import 'primeicons/primeicons.css';
import TeethMap from "@/components/TeethMap/TeethMap";                           //icons

export default {
  name: "Screen3",
  components: {
    MyButton, BackButton, router, vueBaseInput, InputText, Textarea, Checkbox, Calendar, FileUpload, DataTable, Column, ColumnGroup, Row, axios, ProgressBar, MyModal
  },
    data() {
      return {
        errorPush: false,
        progressModal: false,
        progressValue: null,
        checked: false,
        tableHeader: {
          'stageNumber':'Номер этапа',
          "toothNumber": 'Номер зуба',
          "typeConstruction": 'Тип конструкции',
          "implantSystem": 'Система имплантов и размеры',
          "material": 'Материал изготовления',
          "colorVita": 'Цвет по шкале Vita',
          "gumPart": 'Десневая часть',
          "carving": 'Опак и карвинг',
        },
        upload: [],
        lastForm: {
          Client: '',
          Patient: '',
          Tel: '',
          Email: '',
          Address: '',
          Calendar: '',
          More: '',
        },
      }
    },

  methods: {
    // myComplete () {
    //   const formData = new FormData()
    //   Object.entries(this.lastForm).forEach(([key, value]) => {
    //     formData.append(key, value);
    //   });
    //   //console.log(Object.fromEntries(formData))
    //   formData.append("tableHeader", JSON.stringify(this.tableHeader))
    //   formData.append('chooseTeeth', JSON.stringify(this.chooseTeeth))
    //
    //   const fileInput = document.querySelector('#myUpload');
    //   for (const file of fileInput.files) {
    //     formData.append('upload', file, file.name);
    //   }
    //   fetch("https://cifrodent.ru/wp-content/themes/cifrodent/php/send.php", {
    //     method:'POST',
    //     body: formData
    //   })
    //       .then(Response => {
    //         return Response.json()
    //       })
    //       .then(Result => {
    //         // console.log(Result)
    //       })
    // }

    selectFiles (event) {
      this.upload = (event.files)
      // console.log(event.files)
      // console.log(this.upload)
    },

    removeFiles(event) {
      this.upload = event.files
      // console.log(event)
    },

    submitForm() {
      const formData = new FormData();
      Object.entries(this.lastForm).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("tableHeader", JSON.stringify(this.tableHeader));
      formData.append("chooseTeeth", JSON.stringify(this.chooseTeeth));

      for (const file of this.upload) {
        formData.append("upload", file, file.name);
      }
      // Здесь логика открытия модалки
      this.progressModal = true
      axios.post("https://cifrodent.ru/wp-content/themes/cifrodent/php/send.php", formData, {
        onUploadProgress: function (progressEvent) {
          this.progressValue = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
          // console.log(progressEvent)
        }.bind(this)
      })
          .then(() => {
            //Роутить в самое начало с при завершении прелоадера
            this.$router.push({name: 'TeethMap'})
          })
          .catch(() => {
            //Возможность закрытия модалки и повторить отправку
            if (this.progressModal === true) {
              this.errorPush = true
            }
          })

        // console.log(response.data);
    },
  },

  computed: {
    ...mapGetters([
      'GET_STATE1',
      'GET_STATE2',
    ]),
    toothId() {
      return this.$route.params.id
    },
    stage1() {
      let teeth1Stage1 = [],
          teeth2Stage1 = [],
          concatStages = [];
      this.$store.state.module1.teeth1.forEach(el => {
        teeth1Stage1.push(el.stage1)
      })
      this.$store.state.module1.teeth2.forEach(el => {
        teeth2Stage1.push(el.stage1)
      })
      concatStages = teeth1Stage1.concat(teeth2Stage1)
      return concatStages
    },
    stage2() {
      let teeth1Stage2 = [],
          teeth2Stage2 = [],
          concatStages = [];
      this.$store.state.module1.teeth1.forEach(el => {
        teeth1Stage2.push(el.stage2)
      })
      this.$store.state.module1.teeth2.forEach(el => {
        teeth2Stage2.push(el.stage2)
      })
      concatStages = teeth1Stage2.concat(teeth2Stage2)
      return concatStages
    },
    compTooth1() {
      return this.stage1.find(el => el.toothNumber === this.toothId)
    },
    compTooth2() {
      return this.stage2.find(el => el.toothNumber === this.toothId)
    },
    teeth () {
      return this.teeth = [this.GET_STATE1, this.GET_STATE2]
    },
    stage () {
      return this.stage = [this.stage1, this.stage2]
    },
    chooseTeeth () {
      return this.$store.state.module1.chooseTeeth
    }

  },
};
</script>

