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
            v-if="tabActive === true"
            v-on:select-type="selectedConstructionType"
            v-on:select-implant="selectedImplantSystem"
            v-on:select-material="selectedMaterial"
        >
        </my-steps>

        <my-steps2 v-else></my-steps2>


        <div class="tip-wrapper">
          <flag-info id="flag1">

            <div id="flag-content1">
              Данный раздел находится в активной разработке и будет дополнен в ближайшее время
            </div>

            Как заполнять форму?
          </flag-info>

          <flag-info id="flag2">

            <div id="flag-content2">
              Данный раздел находится в активной разработке и будет дополнен в ближайшее время
            </div>

            Два этапа заполнения формы
          </flag-info>

        </div>

        <div class="buttons-wrapper">
          <router-link to="/teeth-map" class="text-decoration-none">
            <my-button>Сохранить настройки</my-button>
          </router-link>
          <router-link to="/teeth-map" class="text-decoration-none">
            <my-button class="disabled">Отменить</my-button>
          </router-link>
        </div>

      </div>

      <div class="tabs-info">
        <tabs :options="{ useUrlFragment: false }" class="tabs-wrapper" @click="stageTabsToggle">
          <tab name="1 этап" class="tab-content">
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
                  <span class="tooth-attribute__item-title">Дисневая часть</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.gumPart}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак и карвинг</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.carving}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Параметры отступа</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth1.indentOptions}}
                  </span>
                </div>

              </div>

            </div>
          </tab>
          <tab name="2 этап" class="tab-content">
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
                  <span class="tooth-attribute__item-title">Дисневая часть</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.gumPart}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак и карвинг</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.carving}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Параметры отступа</span>
                  <span class="tooth-attribute__item-value">
                    {{compTooth2.indentOptions}}
                  </span>
                </div>

              </div>

            </div>
          </tab>
        </tabs>
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
export default {
  name: "Screen2",
  components: {router, BackButton, FlagInfo, MyButton, MySteps, MySteps2, Tabs, Tab, MyModal,},
  // inject: ['teeth1','teeth2',],
  data() {
    return {
      chooseType: "",
      chooseImplant: "",
      chooseMaterial: "",
      tabActive: true,
      props: {

      },
    }
  },
  methods: {
    ...mapMutations([
      'MUT_COLOR1',
      'MUT_COLOR2',

    ]),
    stageTabsToggle () {
      this.tabActive = !this.tabActive
    },
    selectedConstructionType(chooseType) {
      console.log(chooseType)
      this.chooseType = chooseType;
    },
    selectedImplantSystem(chooseImplant) {
      console.log(chooseImplant)
      this.chooseImplant = chooseImplant;
    },
    selectedMaterial(chooseMaterial) {
      console.log(chooseMaterial)
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
    // stage1 () {
    //   return this.$store.state.module1.teeth1[`tooth${this.toothId}`].stage1
    // },
    // stage2 () {
    //   return this.$store.state.module1[`tooth${this.toothId}`].stage2
    // },
  }
}
</script>

