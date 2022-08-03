<template>

  <div class="steps-wrapper">
    <my-modal v-model:show="modalVisible1">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Тип конструкции</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container">

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/anatomic-crown.svg" alt="Анатомическая коронка">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type1.typeNameDefault}}</span>
            <select
                class="modal-select select"
                v-model="this.optionsTypeConstruction.SelectOption"
            >
              <option class="option-modal" disabled >Выберите значение</option>
              <option class="option-modal">{{this.optionsTypeConstruction.Type1.option1}}</option>
              <option class="option-modal">{{this.optionsTypeConstruction.Type1.option2}}</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/anatomic-crown-screw-retained.svg" alt="Анатомическая коронка винтовой фиксации">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type2.typeNameDefault}}</span>
            <select class="modal-select" v-model="this.optionsTypeConstruction.SelectOption">
              <option class="option-modal" disabled >Выберите значение</option>
              <option class="option-modal">{{this.optionsTypeConstruction.Type2.option1}}</option>
              <option class="option-modal">{{this.optionsTypeConstruction.Type2.option2}}</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame.svg" alt="Каркас">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type3.typeNameDefault}}</span>
            <select class="modal-select" v-model="this.optionsTypeConstruction.SelectOption">
              <option class="option-modal" disabled >Выберите значение</option>
              <option class="option-modal">{{this.optionsTypeConstruction.Type3.option1}}</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame-for-application.svg" alt="Каркас под нанесение">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type4.typeNameDefault}}</span>
            <select class="modal-select" v-model="this.optionsTypeConstruction.SelectOption">
              <option class="option-modal" disabled >Выберите значение</option>
              <option class="option-modal">{{this.optionsTypeConstruction.Type4.option1}}</option>
              <option class="option-modal">{{this.optionsTypeConstruction.Type4.option1}}</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/abutment.svg" alt="Абатмент">
            <select class="modal-select" v-model="chooseType.chooseType5" @click="selectedConstructionType">
              <option class="option-disabled" disabled value="">Абатмент</option>
              <option class="option-modal">С использованием стандартных оснований</option>
              <option class="option-modal">С анодированием титанового абатмента</option>
              <option class="option-modal">С использованием жёлтых оснований</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/tab.svg" alt="Вкладка">
            <select class="modal-select" v-model="chooseType.chooseType6" @click="selectedConstructionType">
              <option class="option-disabled" disabled value="">Вкладка</option>
              <option class="option-modal">Не разборная</option>
              <option class="option-modal">Разборная</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/rail-girder.svg" alt="Рельсовая балка">
            <select class="modal-select" v-model="chooseType.chooseType7" @click="selectedConstructionType">
              <option class="option-disabled" disabled value="">Рельсовая балка</option>
              <option class="option-modal">С замками</option>
              <option class="option-modal">Под варку (с пинами)</option>
              <option class="option-modal">Под циркониевый мост</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/stump.svg" alt="Культя">
            <select class="modal-select" v-model="chooseType.chooseType8" @click="selectedConstructionType">
              <option class="option-disabled" disabled value="">Культя</option>
              <option class="option-modal">Культя</option>
              <option class="option-modal">Культя винтовой
                фиксации</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/surgical-template.svg" alt="Хирургический шаблон">
            <select class="modal-select" v-model="chooseType.chooseType9" @click="selectedConstructionType">
              <option class="option-disabled" disabled value="">Хирургический шаблон</option>
              <option class="option-modal">Выбран хирургический шаблон</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/splint.svg" alt="Сплинт">
            <select class="modal-select" v-model="chooseType.chooseType10" @click="selectedConstructionType">
              <option class="option-disabled" disabled value="">Сплинт</option>
              <option class="option-modal">Декомпрессионные (разгрузочные)</option>
              <option class="option-modal">Релаксационные (расслабляющие)</option>
              <option class="option-modal">Позиционирующие</option>
              <option class="option-modal">Стабилизирующие</option>
              <option class="option-modal">Репонирующие</option>
              <option class="option-modal">Ретенционные</option>
            </select>

          </div>

        </div>


      </div>

    </my-modal>

    <my-modal v-model:show="modalVisible2">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Системы имплантов и размер</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container">

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseImplant.chooseImplant1" @click="selectedImplantSystem">
              <option class="option-disabled" disabled value="">Система имплантов</option>
              <option class="option-modal">Straumann Bone Level</option>
              <option class="option-modal">Alfa Bio</option>
              <option class="option-modal">ANKYLOS</option>
              <option class="option-modal">Anthogry Axiom</option>
              <option class="option-modal">BEGO Semados</option>
              <option class="option-modal">BioHorizons</option>
              <option class="option-modal">Biotech</option>
              <option class="option-modal">Conmet</option>
              <option class="option-modal">ICX</option>
              <option class="option-modal">Dentium Implantium</option>
              <option class="option-modal">IRIS Liko-M</option>
              <option class="option-modal">MegaGen AnyOne</option>
              <option class="option-modal">MegaGen AnyRidge</option>
              <option class="option-modal">MIS</option>
              <option class="option-modal">NIKO / LIKO</option>
              <option class="option-modal">NobelActive</option>
              <option class="option-modal">NobelReplace</option>
              <option class="option-modal">OT medical F1</option>
              <option class="option-modal">OT medical F2</option>
              <option class="option-modal">Radix</option>
              <option class="option-modal">ROOTT</option>
              <option class="option-modal">Renova</option>
              <option class="option-modal">Straumann Bone Level</option>
              <option class="option-modal">Straumann SyncOcta</option>
              <option class="option-modal">SIC</option>
              <option class="option-modal">XiVE</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseImplant.chooseImplant2" @click="selectedImplantSystem">
              <option class="option-disabled" disabled value="">Размер имплантов</option>
              <option class="option-modal">RC (4.1 / 4.8)</option>
              <option class="option-modal">NC (3.3)</option>
              <option class="option-modal">Multi-Unit</option>
            </select>

          </div>

        </div>

      </div>
    </my-modal>

    <my-modal v-model:show="modalVisible3">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Укажите материал изготовления</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container">

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial1" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">Pre-mill (Ti)</option>
              <option class="option-modal">Выбран Pre-mill (Ti)</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial2" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">CoCr (кобальт хром)</option>
              <option class="option-modal">Mesa</option>
              <option class="option-modal">Scheftner</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial3" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">Titan</option>
              <option class="option-modal">Россия</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial4" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">PMMA</option>
              <option class="option-modal">Yamahachi</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial5" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">WAX</option>
              <option class="option-modal">Yamahachi</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial6" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">PEEK</option>
              <option class="option-modal">Bredent</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial7" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">BioHPP</option>
              <option class="option-modal">Bredent</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial8" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">ZrO2 (циркон)</option>
              <option class="option-modal">Aidite</option>
              <option class="option-modal">Katana</option>
              <option class="option-modal">ZirCAD</option>
              <option class="option-modal">Audental</option>
              <option class="option-modal">Everest</option>
              <option class="option-modal">Upcera</option>
            </select>

          </div>

          <div class="modal-select-item">

            <select class="modal-select" v-model="chooseMaterial.chooseMaterial9" @click="selectedMaterial">
              <option class="option-disabled" disabled value="">Multilayer 3D</option>
              <option class="option-modal">Aidite</option>
              <option class="option-modal">Katana</option>
              <option class="option-modal">ZirCAD</option>
              <option class="option-modal">Audental</option>
              <option class="option-modal">Everest</option>
              <option class="option-modal">Upcera</option>
            </select>

          </div>


        </div>

      </div>
    </my-modal>

    <my-modal v-model:show="modalVisible4">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Укажите цвет коронки по шкале VITA</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container">

            <div class="column">

              <div class="row gap10">
                <div class="modal-select-column">
                  <div class="modal-select-column-item">A</div>
                  <div class="modal-select-column-item">B</div>
                  <div class="modal-select-column-item">C</div>
                  <div class="modal-select-column-item">D</div>
                  <div class="modal-select-column-item">Bleach</div>
                </div>

                <div class="modal-select-column">
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">1</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">1</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">1</div>
                  <div class="modal-select-column-item" id="bg-none">&nbsp&nbsp</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">1</div>
                </div>

                <div class="modal-select-column">
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">2</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">2</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">2</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">2</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">2</div>
                </div>

                <div class="modal-select-column">
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">3</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">3</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">3</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">3</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">3</div>
                </div>

              <div class="group-column-item">

                <div class="modal-select-column-item border-radius-60" @click="activeButton" v-bind:class="{ active: isActive }">3.5</div>
                <div class="modal-select-column">
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">4</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">4</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">4</div>
                  <div class="modal-select-column-item" @click="activeButton" v-bind:class="{ active: isActive }">4</div>
                </div>
              </div>

              </div>

              <label class="modal-select-input" for="">Другое</label>
              <input type="text" name="" placeholder="Напишите свой вариант">


            </div>

        </div>

      </div>
    </my-modal>

    <my-modal v-model:show="modalVisible5">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Десневая часть</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container-column">

          <div class="row gap60">
              <div class="modal-select-carving-btn">Есть</div>
              <div class="modal-select-carving-btn">Отсуствует</div>
          </div>

          <div class="column gap10">
            <div class="row gap10">
              <input type="radio" class="modal-select-carving-btn">
              <label class="input">Красить</label>
            </div>
            <div class="row gap10">
              <input type="radio" class="modal-select-carving-btn">
              <label class="input">Не красить</label>
            </div>

          </div>

        </div>



      </div>
    </my-modal>

    <my-modal v-model:show="modalVisible6">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Опак и карвинг</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container-column">

          <div class="column gap10">
            <div class="row gap10">
              <input type="checkbox" class="modal-select-carving-btn">
              <label class="input">Опак</label>
            </div>

            <div class="row gap10">
              <input type="checkbox" class="modal-select-carving-btn">
              <label class="input">Карвинг (силами фрезерного центра)</label>
            </div>

            <div class="row gap10">
              <input type="checkbox" class="modal-select-carving-btn">
              <label class="input">Отправить на карвинг заказчику</label>
            </div>

          </div>

        </div>

      </div>
    </my-modal>

    <my-modal v-model:show="modalVisible7">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Укажите параметры отступа</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

      </div>
    </my-modal>

    <input type="checkbox" class="steps-item checkbox-none" id="step1" @click="showModal1">
    <label for="step1">Тип конструкции</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step2" @click="showModal2">
    <label for="step2">Система имплантатов и размеры</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step3" @click="showModal3">
    <label for="step3">Материал изготовления</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step4" @click="showModal4">
    <label for="step4">Цвет коронки</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step5" @click="showModal5">
    <label for="step5">Десневая часть</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step6" @click="showModal6">
    <label for="step6">Опак и карвинг</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step7" @click="showModal7">
    <label for="step7">Параметры отступа</label>

  </div>

</template>

<style lang='scss' src="./my-steps.scss" scoped></style>

<script>
import MyModal from "@/components/UI/MyModal/MyModal";
import MySelect from "@/components/UI/MySelect/MySelect";
export default  {
  name: "MySteps",
  components: {
    MyModal,MySelect
  },
  data() {
    return {
      isActive: false,
      modalVisible1: false,
      modalVisible2: false,
      modalVisible3: false,
      modalVisible4: false,
      modalVisible5: false,
      modalVisible6: false,
      modalVisible7: false,
      chooseType: {
        chooseType1: "",
        chooseType2: "",
        chooseType3: "",
        chooseType4: "",
        chooseType5: "",
        chooseType6: "",
        chooseType7: "",
        chooseType8: "",
        chooseType9: "",
        chooseType10: "",
      },
      chooseImplant: {
        chooseImplant1: "",
        chooseImplant2: "",
      },
      chooseMaterial: {
        chooseMaterial1: "",
        chooseMaterial2: "",
        chooseMaterial3: "",
        chooseMaterial4: "",
        chooseMaterial5: "",
        chooseMaterial6: "",
        chooseMaterial7: "",
        chooseMaterial8: "",
        chooseMaterial9: "",
      },

    }
  },

  methods: {
    activeButton() {
      if (this.isActive !== true) {
        this.isActive = true;
      } else {
        this.isActive = false;
      }
    },

    showModal1() {
      this.modalVisible1 = true;
    },
    showModal2() {
      this.modalVisible2 = true;
    },
    showModal3() {
      this.modalVisible3 = true;
    },
    showModal4() {
      this.modalVisible4 = true;
    },
    showModal5() {
      this.modalVisible5 = true;
    },
    showModal6() {
      this.modalVisible6 = true;
    },
    showModal7() {
      this.modalVisible7 = true;
    },
  },
  computed: {
    toothId () {
      return this.$route.params.id
    },
    optionsTypeConstruction () {
      return this.$store.state.module1.optionsTypeConstruction
    },
    zub: {
      set(value) {
        this.$store.commit('changeTypeConstruction', value);
      },
      get() {
        return this.$store.getters('zub');
      }
    }

  }
}
</script>

