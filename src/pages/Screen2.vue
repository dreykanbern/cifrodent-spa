<template>
  <div class="container1">

    <router-link to="/teeth-map" class="text-decoration-none">
      <back-button>
        Карта зубов
      </back-button>
    </router-link>

    <div class="tooth-material">

      <div class="steps-material">

        <my-steps
            v-if="tabActive.value === true"
            v-on:select-type="selectedConstructionType"
            v-on:select-implant="selectedImplantSystem"
            v-on:select-material="selectedMaterial"
        >
        </my-steps>

        <my-steps2 v-else></my-steps2>


        <div class="tip-wrapper">
          <flag-info id="flag1">

            <div id="flag-container">

              <div id="flag-content1">
                <h3 class="flag-h3">Выполните следующие шаги:</h3>
                <ul>
                  <li class="flag-li">Для заполнения формы необходимо выбрать соответствующий раздел.</li>
                  <li class="flag-li">Далее выбрать параметр.</li>
                  <li class="flag-li">В форму подтянется выбранный параметр и это будет подтверждением выбора.</li>
                  <li class="flag-li">После заполнения всех необходимых разделов, все данные будут выведены в таблицу.</li>
                </ul>
              </div>

            </div>
            Как заполнять форму?
          </flag-info>

          <flag-info id="flag2">

            <div id="flag-container">

              <div id="flag-content2">
                <h3 class="flag-h3">Пояснения к этапам конструкции</h3>
                <ul>
                  <li class="flag-li">В заказ-наряде предусмотрены двухэтапные конструкции. </li>
                </ul>
                <h3 class="flag-h3">В случаях, когда, например, необходимо изготовить индивидуальный абатмент, а сверху каркас или анатомическую коронку, все можно сразу одним нарядом обозначить в соответствующих вкладках этапов и задание для лаборатории будет принято корректно. </h3>
              </div>

            </div>

            Этапы конструкции
          </flag-info>

        </div>

        <div class="buttons-wrapper">
          <router-link v-if="tabActive.value === true" to="/teeth-map" class="text-decoration-none">
            <my-button @click=saveTeeth>Сохранить настройки</my-button>
          </router-link>
          <router-link v-else to="/teeth-map" class="text-decoration-none">
            <my-button @click=saveTeeth>Сохранить настройки</my-button>
          </router-link>
          <router-link to="/teeth-map" class="text-decoration-none">
            <my-button class="non-active">Отменить</my-button>
          </router-link>
        </div>

      </div>

      <div class="tabs-info">
        <TabView class="tabs-wrapper"  @click="stageTabsToggle">
          <TabPanel header="1 этап" class="tab-content">
            <div class="tooth-info-wrapper">
              <div class="tooth-number">
                <span class="tooth-title"> Вы редактируете зуб под номером </span>
                <div class="tooth-item">{{$route.params.id}}</div>
              </div>

              <div class="tooth-attribute">

                <div class="tooth-attribute__item" >
                  <span class="tooth-attribute__item-title">Тип конструкции</span>
                  <span class="tooth-attribute__item-value" >
                    {{compTooth1.typeConstruction}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Система имплантов и размеры</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.implantSystem}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Материал изготовления</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.material}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Цвет коронки</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.colorVita}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Десневая часть</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.gumPart}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Карвинг</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.carving}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.opac}}
                  </span>
                </div>
<!--  Параметры отступа не нужны               <div class="tooth-attribute__item">-->
<!--                  <span class="tooth-attribute__item-title">Параметры отступа</span>-->
<!--                  <span class="tooth-attribute__item-value">-->
<!--                    {{compTooth1.indentOptions}}-->
<!--                  </span>-->
<!--                </div>-->

              </div>

            </div>
          </TabPanel>
          <TabPanel header="2 этап"  class="tab-content">
            <div class="tooth-info-wrapper">

              <div class="tooth-number">
                <span class="tooth-title"> Вы редактируете зуб под номером </span>
                <div class="tooth-item">{{$route.params.id}}</div>
              </div>

              <div class="tooth-attribute">

                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Тип конструкции</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.typeConstruction}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Система имплантов и размеры</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.implantSystem}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Материал изготовления</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.material}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Цвет коронки</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.colorVita}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Десневая часть</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.gumPart}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Карвинг</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.carving}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.opac}}
                  </span>
                </div>
<!-- Параметры отступа пока не нужны               <div class="tooth-attribute__item">-->
<!--                  <span class="tooth-attribute__item-title">Параметры отступа</span>-->
<!--                  <span class="tooth-attribute__item-value">-->
<!--                    {{compTooth2.indentOptions}}-->
<!--                  </span>-->
<!--                </div>-->

              </div>

            </div>
          </TabPanel>
        </TabView>
      </div>

    </div>

  </div>
</template>

<style lang='scss' src="./screen2.scss" scoped></style>

<script>
import router from "@/router/router";
import BackButton from "@/components/UI/BackButton/BackButton";
import FlagInfo from "@/components/UI/FlagInfo/FlagInfo";
import MyButton from "@/components/UI/MyButton/MyButton";
import MySteps from "@/components/MySteps/MySteps";
import MySteps2 from "@/components/MySteps2/MySteps2";
import {Tab, Tabs} from "vue3-tabs-component";
import MyModal from "@/components/UI/MyModal/MyModal";
import {mapGetters, mapMutations, mapActions} from 'vuex';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';
export default {
  name: "Screen2",
  components: {router, BackButton, FlagInfo, MyButton, MySteps, MySteps2, Tabs, Tab, MyModal, TabView, TabPanel},
  // inject: ['teeth1','teeth2',],
  data() {
    return {
      chooseType: "",
      chooseImplant: "",
      chooseMaterial: "",
      tabActive: {
        type: Boolean,
        value: true,
      },
      props: {

      },
    }
  },
  methods: {
    ...mapMutations([
      'MUT_COLOR1',
      'MUT_COLOR2',
      'MUT_CHOOSED_TEETH',
    ]),

    saveTeeth () {
      if (this.tabActive.value === true) {
        this.MUT_CHOOSED_TEETH(
            this.saveTeethObject1
        )
        this.tabActive.value = true;
      } else {
        this.MUT_CHOOSED_TEETH(
            this.saveTeethObject2
        )
        this.tabActive.value = true;
      }
    },
    stageTabsToggle () {
      let tabViewHeader = document.querySelector('.p-tabview-nav-link')
       if (tabViewHeader.getAttribute('tabindex') === '0') {
         this.tabActive.value = true
       } else if (tabViewHeader.getAttribute('tabindex') === '-1') {
         this.tabActive.value = false
       }
    },

    selectedConstructionType(chooseType) {
      // console.log(chooseType)
      this.chooseType = chooseType;
    },
    selectedImplantSystem(chooseImplant) {
      // console.log(chooseImplant)
      this.chooseImplant = chooseImplant;
    },
    selectedMaterial(chooseMaterial) {
      // console.log(chooseMaterial)
      this.chooseMaterial = chooseMaterial;
    }
  },
  computed: {
    toothId () {
      return this.$route.params.id
    },
    stage1 () {
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
    stage2 () {
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

    reactiveStageNumber () {
      let stageNumber

      if (this.tabActive.value === true) {
        stageNumber = '1'
      } else {
        stageNumber = '2'
      }

      return stageNumber
    },

    saveTeethObject1 () {
      if (this.tabActive.value === true) {
        return {
          "stageNumber": "1",
          "toothNumber": this.$route.params.id,
          "typeConstruction": this.compTooth1.typeConstruction,
          "implantSystem": this.compTooth1.implantSystem,
          "material": this.compTooth1.material,
          "colorVita": this.compTooth1.colorVita,
          "gumPart": this.compTooth1.gumPart,
          "carving": this.compTooth1.carving,
          "opac": this.compTooth1.opac,
        }
      }
    },

    saveTeethObject2 () {
    if (this.tabActive.value === false) {
        return {
          "stageNumber": "2",
          "toothNumber": this.$route.params.id,
          "typeConstruction": this.compTooth2.typeConstruction,
          "implantSystem": this.compTooth2.implantSystem,
          "material": this.compTooth2.material,
          "colorVita": this.compTooth2.colorVita,
          "gumPart": this.compTooth2.gumPart,
          "carving": this.compTooth2.carving,
          "opac": this.compTooth2.opac,
        }
      }
    },

    // if (this.tabActive !== true) {
    //   //          return {
    //   "stageNumber": '2',
    //   "toothNumber": this.$route.params.id,
    //   "typeConstruction": this.compTooth1.typeConstruction,
    //   "implantSystem": this.compTooth1.implantSystem,
    //   "material": this.compTooth1.material,
    //   "colorVita": this.compTooth1.colorVita,
    //   "gumPart": this.compTooth1.gumPart,
    //   "carving": this.compTooth1.carving,
    //   "indentOptions": this.compTooth1.indentOptions,
    // }
    // }

    // stage1 () {
    //   return this.$store.state.module1.teeth1[`tooth${this.toothId}`].stage1
    // },
    // stage2 () {
    //   return this.$store.state.module1[`tooth${this.toothId}`].stage2
    // },

  }
}
</script>

