<template>
  <div class="container">

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
                <div class="tooth-item"> Здесь инжектить значение зуба </div>
              </div>

              <div class="tooth-attribute">

                <div class="tooth-attribute__item" >
                  <span class="tooth-attribute__item-title">Тип конструкции</span>
                  <span class="tooth-attribute__item-value" >
                    {{chooseType.chooseType1}}
                    {{chooseType.chooseType2}}
                    {{chooseType.chooseType3}}
                    {{chooseType.chooseType4}}
                    {{chooseType.chooseType5}}
                    {{chooseType.chooseType6}}
                    {{chooseType.chooseType7}}
                    {{chooseType.chooseType8}}
                    {{chooseType.chooseType9}}
                    {{chooseType.chooseType10}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Система имплантов и размеры</span>
                  <span class="tooth-attribute__item-value">
                    {{chooseImplant.chooseImplant1}}
                    {{chooseImplant.chooseImplant2}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Материал изготовления</span>
                  <span class="tooth-attribute__item-value">
                    {{chooseMaterial.chooseMaterial1}}
                    {{chooseMaterial.chooseMaterial2}}
                    {{chooseMaterial.chooseMaterial3}}
                    {{chooseMaterial.chooseMaterial4}}
                    {{chooseMaterial.chooseMaterial5}}
                    {{chooseMaterial.chooseMaterial6}}
                    {{chooseMaterial.chooseMaterial7}}
                    {{chooseMaterial.chooseMaterial8}}
                    {{chooseMaterial.chooseMaterial9}}
                  </span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Цвет коронки</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Дисневая часть</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак и карвинг</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Параметры отступа</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>

              </div>

            </div>
          </tab>
          <tab name="2 этап" class="tab-content">
            <div class="tooth-info-wrapper">

              <div class="tooth-number">
                <span class="tooth-title"> Вы редактируете зуб под номером </span>
                <div class="tooth-item"> Здесь инжектить значение зуба </div>
              </div>

              <div class="tooth-attribute">

                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Тип конструкции</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Система имплантов и размеры</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Материал изготовления</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Цвет коронки</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Дисневая часть</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Опак и карвинг</span>
                  <span class="tooth-attribute__item-value">-</span>
                </div>
                <div class="tooth-attribute__item">
                  <span class="tooth-attribute__item-title">Параметры отступа</span>
                  <span class="tooth-attribute__item-value">-</span>
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
export default {
  name: "Screen2",
  components: {router, BackButton, FlagInfo, MyButton, MySteps, Tabs, Tab, MyModal},
  data() {
    return {
      chooseType: "",
      chooseImplant: "",
      chooseMaterial: "",
    }
  },
  methods: {
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
  }
}
</script>

