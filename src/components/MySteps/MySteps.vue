<template>

  <div class="steps-wrapper">
    <my-modal v-model:show="modalVisible">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Тип конструкции</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container">

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/anatomic-crown.svg" alt="Анатомическая коронка">
            <select class="modal-select" v-model="chooseType.chooseType1">
              <option class="option-disabled" disabled value="">Анатомическая коронка</option>
              <option class="option-modal">Полная анатомия</option>
              <option class="option-modal">С вестибулярным редуцированием</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/anatomic-crown-screw-retained.svg" alt="Анатомическая коронка винтовой фиксации">
            <select class="modal-select" v-model="chooseType.chooseType2">
              <option class="option-disabled" disabled value="">Анатомическая коронка винтовой фиксации</option>
              <option class="option-modal">Полная анатомия</option>
              <option class="option-modal">С вестибулярным редуцированием</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame.svg" alt="Каркас">
            <select class="modal-select" v-model="chooseType.chooseType3">
              <option class="option-disabled" disabled value="">Каркас</option>
              <option class="option-modal">Выбран каркас</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame-for-application.svg" alt="Каркас под нанесение">
            <select class="modal-select" v-model="chooseType.chooseType4">
              <option class="option-disabled" disabled value="">Каркас под нанесение</option>
              <option class="option-modal">Винтовой фиксации</option>
              <option class="option-modal">Цементной фиксации</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/abutment.svg" alt="Абатмент">
            <select class="modal-select" v-model="chooseType.chooseType5">
              <option class="option-disabled" disabled value="">Абатмент</option>
              <option class="option-modal">С использованием стандартных оснований</option>
              <option class="option-modal">С анодированием титанового абатмента</option>
              <option class="option-modal">С использованием жёлтых оснований</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/tab.svg" alt="Вкладка">
            <select class="modal-select" v-model="chooseType.chooseType6">
              <option class="option-disabled" disabled value="">Вкладка</option>
              <option class="option-modal">Не разборная</option>
              <option class="option-modal">Разборная</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/rail-girder.svg" alt="Рельсовая балка">
            <select class="modal-select" v-model="chooseType.chooseType7">
              <option class="option-disabled" disabled value="">Рельсовая балка</option>
              <option class="option-modal">С замками</option>
              <option class="option-modal">Под варку (с пинами)</option>
              <option class="option-modal">Под циркониевый мост</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/stump.svg" alt="Культя">
            <select class="modal-select" v-model="chooseType.chooseType8">
              <option class="option-disabled" disabled value="">Культя</option>
              <option class="option-modal">Культя</option>
              <option class="option-modal">Культя винтовой
                фиксации</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/surgical-template.svg" alt="Хирургический шаблон">
            <select class="modal-select" v-model="chooseType.chooseType9">
              <option class="option-disabled" disabled value="">Хирургический шаблон</option>
              <option class="option-modal">Выбран хирургический шаблон</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/splint.svg" alt="Сплинт">
            <select class="modal-select" v-model="chooseType.chooseType10">
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
    <input type="checkbox" class="steps-item checkbox-none" id="step1" @click="showModal">
    <label for="step1">Тип конструкции</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step2">
    <label for="step2">Система имплантатов и размеры</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step3">
    <label for="step3">Материал изготовления</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step4">
    <label for="step4">Цвет коронки</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step5">
    <label for="step5">Десневая часть</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step6">
    <label for="step6">Опак и карвинг</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step7">
    <label for="step7">Параметры отступа</label>

  </div>

</template>

<style lang='scss' src="./my-steps.scss" scoped></style>

<script>
import MyModal from "@/components/UI/MyModal/MyModal";
export default  {
  name: "MySteps",
  components: {
    MyModal
  },
  data() {
    return {
      modalVisible: false,
      provide() {
        return {

        };
      },
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

    }
  },
  methods: {
    showModal() {
      this.modalVisible = true;
    }
  }
}
</script>

