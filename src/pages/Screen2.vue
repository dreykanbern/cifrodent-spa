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
            v-on:select-type="selectedConstructionType"
            v-on:select-implant="selectedImplantSystem"
            v-on:select-material="selectedMaterial"
        >

        </my-steps>


        <div class="tip-wrapper">
          <flag-info>Как заполнять форму?</flag-info>
          <flag-info>Два этапа заполнения формы</flag-info>
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
        <tabs :options="{ useUrlFragment: false }" class="tabs-wrapper">
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
                    {{stage1.typeConstruction}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Система имплантов и размеры</span>
                  <span class="tooth-attribute__item-value">
                    {{stage1.implantSystem}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Материал изготовления</span>
                  <span class="tooth-attribute__item-value">
                    {{stage1.material}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Цвет коронки</span>
                  <span class="tooth-attribute__item-value">
                    {{stage1.colorVita}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Дисневая часть</span>
                  <span class="tooth-attribute__item-value">
                    {{stage1.gumPart}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак и карвинг</span>
                  <span class="tooth-attribute__item-value">
                    {{stage1.carving}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Параметры отступа</span>
                  <span class="tooth-attribute__item-value">
                    {{stage1.indentOptions}}
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
                    {{stage2.typeConstruction}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Система имплантов и размеры</span>
                  <span class="tooth-attribute__item-value">
                    {{stage2.implantSystem}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Материал изготовления</span>
                  <span class="tooth-attribute__item-value">
                    {{stage2.material}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Цвет коронки</span>
                  <span class="tooth-attribute__item-value">
                    {{stage2.colorVita}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Дисневая часть</span>
                  <span class="tooth-attribute__item-value">
                    {{stage2.gumPart}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак и карвинг</span>
                  <span class="tooth-attribute__item-value">
                    {{stage2.carving}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Параметры отступа</span>
                  <span class="tooth-attribute__item-value">
                    {{stage2.indentOptions}}
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
import {Tab, Tabs} from "vue3-tabs-component";
import MyModal from "@/components/UI/MyModal/MyModal";
import {mapGetters, mapMutations, mapActions} from 'vuex';
export default {
  name: "Screen2",
  components: {router, BackButton, FlagInfo, MyButton, MySteps, Tabs, Tab, MyModal,},
  inject: ['teeth1','teeth2',],
  data() {
    return {
      chooseType: "",
      chooseImplant: "",
      chooseMaterial: "",
      props: {

      },
    }
  },
  methods: {
    ...mapMutations([
      'MUT_PROPERTY',
      'MUT_COLOR'
    ]),
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
      return this.$store.state.module1.teeth1[`tooth${this.toothId}`].stage1
    },
    stage2 () {
      return this.$store.state.module1[`tooth${this.toothId}`].stage2
    },
  }
}
</script>

