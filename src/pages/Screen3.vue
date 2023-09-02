<template>
  <div class="container-data">

    <router-link to="/teeth-map" class="text-decoration-none">
      <back-button>
        Карта зубов
      </back-button>
    </router-link>

    <h1 class="container__h1">Итоговые данные</h1>

    <DataTable :value="newSelectedTeeth" :expandedRows="expandedRows" @row-toggle="onRowToggle" dataKey="toothNumber" :rowExpansionTemplate="rowExpansionTemplate">
      <Column field="toothNumber" header="Номер зуба"></Column>
      <Column expander></Column>
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

      <InputMask
          placeholder="Контактный номер телефона*"
          mask="+7 (999) 999-9999"
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
                  :show-upload-button="false" choose-label="Загрузить STL файл (.stl, .constructionInfo)"  cancelLabel="Удалить все файлы"
                  invalidFileSizeMessage="{0}: Неверный размер файла, файл должен быть меньше {1}." invalidFileTypeMessage="{0}: Неверный формат файла, разрешенные форматы: {1}."
                  uploadLabel="Нажмите или перетащите файлы в область загрузки" :previewWidth="37"
      />

      <div class="checkbox">

        <Checkbox v-model="checked" :binary="true" value="Согласен на обработку персональных данных" />
        <label> Согласен на обработку персональных данных</label>

      </div>

      <div class="buttons-wrapper">
          <my-button type="submit" class="text-decoration-none" :class="{'disabled': checked === false | upload === null}" @click="submitForm">Отправить в работу</my-button>
        <router-link to="/teeth-map" class="text-decoration-none">
          <my-button class="non-active">Вернуться к карте зубов</my-button>
        </router-link>
      </div>

    </form>

    <final-modal v-if="finalModal" @close="finalModal = false" :showModal="finalModal">
      <template v-slot:header>
        <h2 class="modal__h2">Выполняется загрузка файла</h2>
      </template>
      <ProgressBar :value="progressValue" />
      <template v-slot:footer>
        <h2 class="modal__h2" v-if="errorPush">Загрузка произошла с ошибкой, повторите попытку</h2>
        <button class="btn" @click="finalModal = false">Закрыть</button>
      </template>
    </final-modal>

  </div>
</template>

<style lang='scss' src="./screen3.scss"></style>

<script>

import InputMask from 'primevue/inputmask';
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
import FinalModal from "@/components/UI/FinalModal/FinalModal";


export default {
  name: "Screen3",
  components: {
    MyButton, BackButton, router, vueBaseInput, InputText, Textarea, Checkbox, Calendar, FileUpload, DataTable, Column, ColumnGroup, Row, axios, ProgressBar, MyModal, FinalModal, InputMask,
  },
  data() {
    return {
      expandedRows: [],
      errorPush: false,
      finalModal: false,
      progressValue: null,
      checked: false,
      tableHeader: {
        "toothNumber": 'Номер зуба',
        'stageNumber':'Номер этапа',
        "typeConstruction": 'Тип конструкции',
        "implantSystem": 'Система имплантов и размеры',
        "material": 'Материал изготовления',
        "colorVita": 'Цвет по шкале Vita',
        "gumPart": 'Десневая часть',
        "carving": 'Карвинг',
        "opac": 'Опак'
      },
      upload: null,
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

    selectFiles(event) {
      this.upload = event.files
      // console.log(this.upload)
    },

    removeFiles(event) {
      const filesToRemove = event.files;
      for (let file of filesToRemove) {
        const index = this.upload.indexOf(file);
        this.upload.splice(index, 1);
      }
      // console.log(event)
    },

    submitForm() {
      const formData = new FormData();
      Object.entries(this.lastForm).forEach(([key, value]) => {
        formData.append(key, value);
      });
      formData.append("tableHeader", JSON.stringify(this.tableHeader));
      formData.append("chooseTeeth", JSON.stringify(this.chooseTeeth));

      for (let file of this.upload) {
        formData.append("upload[]", file, file.name);
      }
      // Здесь логика открытия модалки
      this.finalModal = true
      axios.post("https://cifrodent.ru/wp-content/themes/cifrodent/php/send.php", formData, {
        onUploadProgress: function (progressEvent) {
          this.progressValue = parseInt(Math.round((progressEvent.loaded / progressEvent.total) * 100));
        }.bind(this)
      })
          .then(response => {
            // Использовать полученное значение
            let orderNumber = response.data

            //Роутить на страницу успеха при завершении прелоадера
            this.$router.push({ name: 'SuccessPage', params: { orderNumber } })
          })
          .catch(() => {
            //Возможность закрытия модалки и повторить отправку
            if (this.finalModal === true) {
              this.errorPush = true
            }
          })
    },
  },

  computed: {
    ...mapGetters([
      'GET_STATE1',
      'GET_STATE2',
      'GET_NEW_CHOOSE_TEETH',
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
      let arr = this.$store.state.module1.chooseTeeth
      let defaultObj = {
        'stageNumber': '-',
        "toothNumber": '-',
        "typeConstruction": '-',
        "implantSystem": '-',
        "material": '-',
        "colorVita": '-',
        "gumPart": '-',
        "carving": '-',
        "opac": '-',
      }

      if (arr.length > 1) {
        return arr.filter(function (obj) {
          return obj.stageNumber !== defaultObj.stageNumber || defaultObj.toothNumber !== obj.toothNumber || obj.typeConstruction !== defaultObj.typeConstruction || obj.implantSystem !== defaultObj.implantSystem
              || obj.material !== defaultObj.material || obj.colorVita !== defaultObj.colorVita || obj.gumPart !== defaultObj.gumPart || obj.carving !== defaultObj.carving || obj.opac !== defaultObj.opac;
        })
      } else return arr
    },
    sortedTeeth() {
      return this.$store.getters.GET_NEW_CHOOSE_TEETH.sort(function(a, b) {
        return a.sortOrder - b.sortOrder;
      });
    },
    newSelectedTeeth () {
      let arr = this.sortedTeeth
      let defaultObj = {
        toothNumber: '-',
        sortOrder: 1,
        stages: [
            {
              "stageNumber": '1',
              "typeConstruction": "-",
              "implantSystem": '-',
              "material": '-',
              "gumPart": '-',
              "colorVita": '-',
              "carving": 'Нет',
              "opac": 'Нет',
            },
            {
              "stageNumber": '2',
              "typeConstruction": "-",
              "implantSystem": '-',
              "material": '-',
              "gumPart": '-',
              "colorVita": '-',
              "carving": 'Нет',
              "opac": 'Нет',
            }
        ],
      }
      if (arr.length > 1) {
        return arr.filter(function (obj) {
          return defaultObj.stage1.toothNumber !== obj.stage1.toothNumber || defaultObj.stage2.toothNumber !== obj.stage2.toothNumber
              || obj.stage1.typeConstruction !== defaultObj.stage1.typeConstruction || obj.stage2.typeConstruction !== defaultObj.stage2.typeConstruction
              || obj.stage1.implantSystem !== defaultObj.stage1.implantSystem || obj.stage2.implantSystem !== defaultObj.stage2.implantSystem
              || obj.stage1.material !== defaultObj.stage1.material || obj.stage2.material !== defaultObj.stage2.material
              || obj.stage1.colorVita !== defaultObj.stage1.colorVita || obj.stage2.colorVita !== defaultObj.stage2.colorVita
              || obj.stage1.gumPart !== defaultObj.stage1.gumPart || obj.stage2.gumPart !== defaultObj.stage2.gumPart
              || obj.stage1.carving !== defaultObj.stage1.carving || obj.stage2.carving !== defaultObj.stage2.carving
              || obj.stage1.opac !== defaultObj.stage1.opac || obj.stage2.opac !== defaultObj.stage2.opac;
        })
      } else return arr
    },
  },
};
</script>