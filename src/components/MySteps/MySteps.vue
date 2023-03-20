<template>

  <div class="steps-wrapper">
    <my-modal v-model:show="modalVisible1">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Тип конструкции</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container">

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/anatomic-crown.svg" alt="Анатомическая коронка">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type1.typeNameDefault}}</span>
            <Dropdown class="modal-select select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType1Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/anatomic-crown-screw-retained.svg" alt="Анатомическая коронка винтовой фиксации">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type2.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType2Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame.svg" alt="Каркас">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type3.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType3Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame-for-application.svg" alt="Каркас под нанесение">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type4.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType4Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/abutment.svg" alt="Абатмент">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type5.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType5Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/tab.svg" alt="Вкладка">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type6.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType6Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/rail-girder.svg" alt="Рельсовая балка">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type7.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType7Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/stump.svg" alt="Культя">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type8.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType8Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/surgical-template.svg" alt="Хирургический шаблон">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type9.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType9Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/splint.svg" alt="Сплинт">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type10.typeNameDefault}}</span>
            <Dropdown class="modal-select" v-model="compTooth1.typeConstruction" placeholder="Выберите размер" :options="typeConstructionType10Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

        </div>


      </div>

    </my-modal>

    <my-modal v-model:show="modalVisible2">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Системы имплантов и размер</h2>
        <h3 class="subheader__h2">Выберите один пункт</h3>

        <div class="modal-select-container" id="implants">

          <div class="modal-select-item">

            <span class ='modal-select-header'>Alfa Bio</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantAlfaBioValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ANKYLOS</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantANKYLOSValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Anthogry Axiom</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantAnthogryAxiomValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ASTRA TECH</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantASTRATECHValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>BEGO Semados</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantBEGOSemadosValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>BioHorizons</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantBioHorizonsValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Biotech</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantBiotechValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Conmet</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantConmetValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ICX</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantICXValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Dentium Implantium</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantDentiumImplantiumValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>IRIS Liko-M</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantIRISLikoMValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MegaGen AnyOne</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantMegaGenAnyOneValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MegaGen AnyRidge</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantMegaGenAnyRidgeValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MIS</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantMISValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MIS C1</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantMISC1Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>NIKO / LIKO</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantNIKOLIKOValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>NobelActive</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantNobelActiveValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>NobelReplace</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantNobelReplaceValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Osstem</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantOsstemValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>OT medical F1</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantOTmedicalF1Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>OT medical F2</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantOTmedicalF2Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Radix</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantRadixValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Renova</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantRenovaValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ROOTT</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantROOTTValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Straumann Bone Level</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantStraumannBoneLevelValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Straumann SyncOcta</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantStraumannSyncOctaValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>SIC</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantSICValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>XiVE</span>
            <Dropdown class="modal-select" v-model="compTooth1.implantSystem" placeholder="Выберите размер" :options="implantXiVEValues" optionLabel="name" optionValue="value">
            </Dropdown>

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

            <span class ='modal-select-header'>Pre-mill (Ti)</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialPremillTiValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>CoCr (кобальт хром)</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialCoCrValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Titan</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialTitanValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>PMMA</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialPMMAValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>WAX</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialWAXValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>PEEK</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialPEEKValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>BioHPP</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialBioHPPValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ZrO2 (циркон)</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialZrO2Values" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Multilayer 3D</span>
            <Dropdown class="modal-select" v-model="compTooth1.material" placeholder="Выберите материал" :options="materialMultilayer3DValues" optionLabel="name" optionValue="value">
            </Dropdown>

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

                <div class="modal-select-column-calc">
                  <div class="modal-select-column-item-calc" v-for='color in colorViteCalc' :id="color.id"
                       @click="activeButton(colorViteCalc, color)" :class="{ 'active': color.isActive }">
                    {{ color.value }}
                  </div>
                </div>

              </div>

                <label class="modal-select-input" for="">Другое</label>
                <InputText type="text" name="" placeholder="Напишите свой вариант" v-model="compTooth1.colorVita"/>


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

            <div class="modal-select-item">

              <Dropdown class="modal-select" v-model="compTooth1.gumPart" placeholder="Выберите значение" :options="gumPartValues" optionLabel="name" optionValue="value">
              </Dropdown>

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

          <div class="modal-select-item">

            <span class ='modal-select-header'>Опак</span>
            <Dropdown class="modal-select" v-model="compTooth1.opac" placeholder="Выберите значение" :options="opaqueValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Карвинг</span>
            <Dropdown class="modal-select" v-model="compTooth1.carving" placeholder="Выберите значение" :options="carvingValues" optionLabel="name" optionValue="value">
            </Dropdown>

          </div>

        </div>

      </div>
    </my-modal>

<!--  В текущем заказ наряде не используется   <my-modal v-model:show="modalVisible7">-->
<!--      <div class="content-modal-wrapper">-->

<!--        <h2 class="modal__h2">Укажите параметры отступа</h2>-->
<!--        <h3 class="subheader__h2">Напишите данные</h3>-->

<!--        <div class="modal-select-container-column">-->

<!--          <label class="modal-select-input" for="">Ширина уступа</label>-->
<!--          <InputText type="text" name="" placeholder="Вестибулярная (впишите значение в мм.)" v-model="this.indentOptions.WidhtWest"/>-->
<!--          <InputText type="text" name="" placeholder="Небная (впишите значение в мм.)" v-model="this.indentOptions.WidhtNeb" />-->

<!--          <label class="modal-select-input" for="">Глубина уступа</label>-->
<!--          <InputText type="text" name="" placeholder="Над десной (впишите значение в мм.)" v-model="this.indentOptions.Deep1"/>-->
<!--          <InputText type="text" name="" placeholder="Под дейсной (впишите значение в мм.)" v-model="this.indentOptions.Deep2"/>-->

<!--          <my-button @click="resetIndentOptions">Сбросить значение</my-button>-->

<!--        </div>-->

<!--      </div>-->
<!--    </my-modal>-->

    <input type="checkbox" class="steps-item checkbox-none" id="step1" @click.prevent="showModal1" v-model="isCheckedTypeConstruction">
    <label for="step1">Тип конструкции</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step2" @click.prevent="showModal2" v-model="isCheckedImplantSystem">
    <label for="step2">Система имплантатов и размеры</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step3" @click.prevent="showModal3" v-model="isCheckedMaterial">
    <label for="step3">Материал изготовления</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step4" @click.prevent="showModal4" v-model="isCheckedColorVita">
    <label for="step4">Цвет коронки</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step5" @click.prevent="showModal5" v-model="isCheckedGumPart">
    <label for="step5">Десневая часть</label>
    <input type="checkbox" class="steps-item checkbox-none" id="step6" @click.prevent="showModal6" v-model="isCheckedCarving">
    <label for="step6">Опак и карвинг</label>
<!-- Не используется   <input type="checkbox" class="steps-item checkbox-none" id="step7" @click="showModal7">-->
<!--    <label for="step7">Параметры отступа</label>-->

  </div>

</template>

<style lang='scss' src="./my-steps.scss" scoped ></style>

<script>
import Dropdown from 'primevue/dropdown';
import 'primevue/resources/themes/saga-blue/theme.css';       //theme
import InputText from 'primevue/inputtext';
import MyModal from "@/components/UI/MyModal/MyModal";
import MySelect from "@/components/UI/MySelect/MySelect";
import FlagInfo from "@/components/UI/FlagInfo/FlagInfo";
import {mapGetters, mapMutations, mapActions} from 'vuex';
import MyButton from "@/components/UI/MyButton/MyButton";
export default  {
  name: "MySteps",
  components: {
    FlagInfo,
    MyModal,
    MySelect,
    MyButton,
    InputText,
    Dropdown,
  },

  data() {
    return {
      colorViteCalc: [
      {id: 'A1', name:"A1", isActive: false, value:1},
      {id: 'B1', name:"B1", isActive: false, value:1},
      {id: 'C1', name:"C1", isActive: false, value:1},
      {id: 'bg-none', name:"D1", isActive: false, value: null},
      {id: 'Bleach1', name:"Bleach1", isActive: false, value:1},
      {id: 'A2', name:"A2", isActive: false, value:2},
      {id: 'B2', name:"B2", isActive: false, value:2},
      {id: 'C2', name:"C2", isActive: false, value:2},
      {id: 'D2', name:"D2", isActive: false, value:2},
      {id: 'Bleach2', name:"Bleach2", isActive: false, value:2},
      {id: 'A3', name:"A3", isActive: false, value:3},
      {id: 'B3', name:"B3", isActive: false, value:3},
      {id: 'C3', name:"C3", isActive: false, value:3},
      {id: 'D3', name:"D3", isActive: false, value:3},
      {id: 'Bleach3', name:"Bleach3", isActive: false, value:3},
      {id: 'A35', name:"A3.5", isActive: false, value:3.5},
      {id: 'B4', name:"B4", isActive: false, value:4},
      {id: 'C4', name:"C4", isActive: false, value:4},
      {id: 'D4', name:"D4", isActive: false, value:4},
      {id: 'Bleach4', name:"Bleach4", isActive: false, value:4},
      ],
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
      indentOptions: {
        WidhtWest: '',
        WidhtNeb: '',
        Deep1: '',
        Deep2: '',
      },
      opaqueValues: [
        {name:'Выберите значение', value:'Нет'},
        {name:'Слабый', value:'Опак: Слабый'},
        {name:'Средний', value:'Опак: Средний'},
        {name:'Сильный', value:'Опак: Сильный'},
      ],
      carvingValues: [
        {name:'Выберите значение', value:'Нет'},
        {name:'Карвинг (силами фрезерного центра)', value:'Карвинг (силами фрезерного центра)'},
        {name:'Отправить на карвинг заказчику', value:'Отправить на карвинг заказчику'},
      ],
      gumPartValues: [
        {name:'Выберите значение', value:'-'},
        {name:'Красить', value:'Есть: Красить'},
        {name:'Не красить', value:'Есть: Не красить'},
        {name:'Отсутствует', value:'Отсутствует'},
      ],
      materialPremillTiValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Выбран Pre-mill (Ti)', value:'Pre-mill (Ti)'},
      ],
      materialCoCrValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Mesa', value:'CoCr (кобальт хром): Mesa'},
        {name:'Scheftner', value:'CoCr (кобальт хром): Scheftner'},
      ],
      materialTitanValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Титан (Россия)', value:'Titan: Россия'},
      ],
      materialPMMAValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Yamahachi', value:'PMMA: Yamahachi'},
      ],
      materialWAXValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Yamahachi', value:'WAX: Yamahachi'},
      ],
      materialPEEKValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Bredent', value:'PEEK: Bredent'},
      ],
      materialBioHPPValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Bredent', value:'BioHPP: Bredent'},
      ],
      materialZrO2Values: [
        {name:'Выберите материал', value:'-'},
        {name:'Aidite', value:'ZrO2 (циркон): Aidite'},
        {name:'Katana', value:'ZrO2 (циркон): Katana'},
        {name:'ZirCAD', value:'ZrO2 (циркон): ZirCAD'},
        {name:'Audental', value:'ZrO2 (циркон): Audental'},
        {name:'Everest', value:'ZrO2 (циркон): Everest'},
        {name:'Upcera', value:'ZrO2 (циркон): Upcera'},
      ],
      materialMultilayer3DValues: [
        {name:'Выберите материал', value:'-'},
        {name:'Aidite', value:'Multilayer 3D: Aidite'},
        {name:'Katana', value:'Multilayer 3D: Katana'},
        {name:'ZirCAD', value:'Multilayer 3D: ZirCAD'},
        {name:'Audental', value:'Multilayer 3D: Audental'},
        {name:'Everest', value:'Multilayer 3D: Everest'},
        {name:'Upcera', value:'Multilayer 3D: Upcera'},
      ],
      implantAlfaBioValues: [
        {name:'Выберите размер', value:'-'},
        {name:'4.5', value:'Alfa Bio: 4.5'},
        {name:'X', value:'Alfa Bio: X'},
        {name:'Multi-Unit', value:'Alfa Bio: Multi-Unit'},
      ],
      implantANKYLOSValues: [
        {name:'Выберите размер', value:'-'},
        {name:'C', value:'ANKYLOS: C'},
        {name:'X', value:'ANKYLOS: X'},
        {name:'Multi-Unit', value:'ANKYLOS: Multi-Unit'},
      ],
      implantAnthogryAxiomValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Multi-Unit', value:'Anthogry Axiom: Multi-Unit'},
      ],
      implantASTRATECHValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.0', value:'ASTRA TECH: 3.0'},
        {name:'3.5 / 4.0', value:'ASTRA TECH: 3.5 / 4.0'},
        {name:'4.5 / 5.0', value:'ASTRA TECH: 4.5 / 5.0'},
        {name:'Multi-Unit', value:'ASTRA TECH: Multi-Unit'},
      ],
      implantBEGOSemadosValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.25 / 3.75', value:'BEGO Semados: 3.25 / 3.75'},
        {name:'4.1', value:'BEGO Semados: 4.1'},
        {name:'4.5', value:'BEGO Semados: 4.5'},
        {name:'5.5', value:'BEGO Semados: 5.5'},
        {name:'Multi-Unit', value:'BEGO Semados: Multi-Unit'},
      ],
      implantBioHorizonsValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.0', value:'BioHorizons: 3.0'},
        {name:'3.5', value:'BioHorizons: 3.5'},
        {name:'4.5', value:'BioHorizons: 4.5'},
        {name:'5.0 / 6.0', value:'BioHorizons: 5.0 / 6.0'},
        {name:'Multi-Unit', value:'BioHorizons: Multi-Unit'},
      ],
      implantBiotechValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.6 / 4.8', value:'Biotech: 3.6 / 4.8'},
        {name:'Multi-Unit', value:'Biotech: Multi-Unit'},
      ],
      implantConmetValues: [
        {name:'Выберите размер', value:'-'},
        {name:'NP (2.2)', value:'Conmet: NP (2.2)'},
        {name:'RP (2.7)', value:'Conmet: RP (2.7)'},
        {name:'Multi-Unit', value:'Conmet: Multi-Unit'},
      ],
      implantICXValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Multi-Unit', value:'ICX: Multi-Unit'},
      ],
      implantDentiumImplantiumValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.4', value:'Dentium Implantium: 3.4'},
        {name:'3.8 / 4.2', value:'Dentium Implantium: 3.8 / 4.2'},
        {name:'Multi-Unit', value:'Dentium Implantium: Multi-Unit'},
      ],
      implantIRISLikoMValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Multi-Unit', value:'IRIS Liko-M: Multi-Unit'},
      ],
      implantMegaGenAnyOneValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Multi-Unit', value:'MegaGen AnyOne: Multi-Unit'},
      ],
      implantMegaGenAnyRidgeValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Multi-Unit', value:'MegaGen AnyRidge: Multi-Unit'},
      ],
      implantMISValues: [
        {name:'Выберите размер', value:'-'},
        {name:'NP (3.3)', value:'MIS: NP (3.3)'},
        {name:'SP (3.75 / 4.2)', value:'MIS: SP (3.75 / 4.2)'},
        {name:'WP (5.0 / 6.0)', value:'MIS: WP (5.0 / 6.0)'},
        {name:'Multi-Unit', value:'MIS: Multi-Unit'},
      ],
      implantMISC1Values: [
        {name:'Выберите размер', value:'-'},
        {name:'NP (3.3)', value:'MIS C1: NP (3.3)'},
        {name:'SP (3.75 / 4.2)', value:'MIS C1: SP (3.75 / 4.2)'},
        {name:'WP (5.0)', value:'MIS C1: WP (5.0'},
        {name:'Multi-Unit', value:'MIS C1: Multi-Unit'},
      ],
      implantNIKOLIKOValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.5', value:'NIKO / LIKO: 3.5'},
        {name:'4.5', value:'NIKO / LIKO: 4.5'},
        {name:'Multi-Unit', value:'NIKO / LIKO: Multi-Unit'},
      ],
      implantNobelActiveValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.0', value:'NobelActive: 3.0'},
        {name:'NP (3.5)', value:'NobelActive: NP (3.5)'},
        {name:'RP (4.5)', value:'NobelActive: RP (4.5)'},
        {name:'WP (5.0)', value:'NobelActive: WP (5.0)'},
        {name:'WP (5.5)', value:'NobelActive: WP (5.5)'},
        {name:'Multi-Unit', value:'NobelActive: Multi-Unit'},
      ],
      implantNobelReplaceValues: [
        {name:'Выберите размер', value:'-'},
        {name:'NP (3.5)', value:'NobelReplace: NP (3.5)'},
        {name:'RP (4.3)', value:'NobelReplace: RP (4.3)'},
        {name:'WP (5.0)', value:'NobelReplace: WP (5.0)'},
        {name:'WP (6.0)', value:'NobelReplace: WP (6.0)'},
        {name:'Multi-Unit', value:'NobelReplace: Multi-Unit'},
      ],
      implantOsstemValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Mini (3.5)', value:'Osstem: Mini (3.5)'},
        {name:'Regular (4.0 / 4.5 / 5.0)', value:'Osstem: Regular (4.0 / 4.5 / 5.0)'},
        {name:'Multi-Unit', value:'Osstem: Multi-Unit'},
      ],
      implantOTmedicalF1Values: [
        {name:'Выберите размер', value:'-'},
        {name:'3.3', value:'OT medical F1: 3.3'},
        {name:'3.8', value:'OT medical F1: 3.8'},
        {name:'4.1', value:'OT medical F1: 4.1'},
        {name:'Multi-Unit', value:'OT medical F1: Multi-Unit'},
      ],
      implantOTmedicalF2Values: [
        {name:'Выберите размер', value:'-'},
        {name:'4.1', value:'OT medical F2: 4.1'},
        {name:'5.0', value:'OT medical F2: 5.0'},
        {name:'Multi-Unit', value:'OT medical F2: Multi-Unit'},
      ],
      implantRadixValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Multi-Unit', value:'Radix: Multi-Unit'},
      ],
      implantRenovaValues: [
        {name:'Выберите размер', value:'-'},
        {name:'SP (3.75 / 4.2)', value:'Renova: SP (3.75 / 4.2)'},
        {name:'RDI (4.5 / 4.75)', value:'Renova: RDI (4.5 / 4.75)'},
        {name:'Multi-Unit', value:'Renova: Multi-Unit'},
      ],
      implantROOTTValues: [
        {name:'Выберите размер', value:'-'},
        {name:'Multi-Unit', value:'ROOTT: Multi-Unit'},
      ],
      implantStraumannBoneLevelValues: [
        {name:'Выберите размер', value:'-'},
        {name:'NC (3.3)', value:'Straumann Bone Level: NC (3.3)'},
        {name:'RC (4.1 / 4.8)', value:'Straumann Bone Level: RC (4.1 / 4.8)'},
        {name:'Multi-Unit', value:'Straumann Bone Level: Multi-Unit'},
      ],
      implantStraumannSyncOctaValues: [
        {name:'Выберите размер', value:'-'},
        {name:'NN (3.5)', value:'Straumann SyncOcta: NN (3.5)'},
        {name:'RN (4.8)', value:'Straumann SyncOcta: RN (4.8)'},
        {name:'WN (6.5)', value:'Straumann SyncOcta: WN (6.5)'},
        {name:'Multi-Unit', value:'Straumann Bone Level: Multi-Unit'},
      ],
      implantSICValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.3', value:'SIC: 3.3'},
        {name:'4.2', value:'SIC: 4.2'},
        {name:'Multi-Unit', value:'SIC: Multi-Unit'},
      ],
      implantXiVEValues: [
        {name:'Выберите размер', value:'-'},
        {name:'3.0', value:'XiVE: 3.0'},
        {name:'3.4', value:'XiVE: 3.4'},
        {name:'3.8', value:'XiVE: 3.8'},
        {name:'4.5', value:'XiVE: 4.5'},
        {name:'5.5', value:'XiVE: 5.5'},
        {name:'Multi-Unit', value:'XiVE: Multi-Unit'},
      ],
      typeConstructionType1Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Полная анатомия', value:'Анатомическая коронка: полная анатомия'},
        {name:'С вестибулярным редуцированием', value:'Анатомическая коронка: с вестибулярным редуцированием'},
      ],
      typeConstructionType2Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Полная анатомия', value:'Анатомическая коронка: полная анатомия '},
        {name:'С вестибулярным редуцированием', value:'Анатомическая коронка: с вестибулярным редуцированием '},
      ],
      typeConstructionType3Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Использовать каркас', value:'Каркас'},
      ],
      typeConstructionType4Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Винтовой фиксации', value:'Каркас под нанесение: винтовой фиксации'},
        {name:'Цементной фиксации', value:'Каркас под нанесение: цементной фиксации'},
      ],
      typeConstructionType5Values: [
        {name:'Выберите значение', value:'-'},
        {name:'С использованием стандартных оснований', value:'Абатмент: с использованием стандартных оснований'},
        {name:'С анодированием титанового абатмента', value:'Абатмент: с анодированием титанового абатмента'},
        {name:'С использованием жёлтых оснований', value:'Абатмент: с использованием жёлтых оснований'},
      ],
      typeConstructionType6Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Не разборная', value:'Вкладка: не разборная'},
        {name:'Разборная', value:'Вкладка: разборная'},
      ],
      typeConstructionType7Values: [
        {name:'Выберите значение', value:'-'},
        {name:'С замками', value:'Рельсовая балка: с замками'},
        {name:'Под варку (с пинами)', value:'Рельсовая балка: под варку (с пинами)'},
        {name:'Под циркониевый мост', value:'Рельсовая балка: под циркониевый мост'},
      ],
      typeConstructionType8Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Выбрана культя', value:'Культя'},
      ],
      typeConstructionType9Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Выбран хирургический шаблон', value:'Хирургический шаблон'},
      ],
      typeConstructionType10Values: [
        {name:'Выберите значение', value:'-'},
        {name:'Декомпрессионный (разгрузочный)', value:'Сплинт: декомпрессионный (разгрузочный)'},
        {name:'Релаксационный (расслабляющий)', value:'Сплинт: релаксационный (расслабляющий)'},
        {name:'Позиционирующий', value:'Сплинт: позиционирующий'},
        {name:'Стабилизирующий', value:'Сплинт: стабилизирующий'},
        {name:'Репонирующий', value:'Сплинт: репонирующий'},
        {name:'Ретенционный', value:'Сплинт: ретенционный'},
      ],
    }
  },

  methods: {
    ...mapMutations([
        'MUT_PROPERTY1',
        'MUT_COLOR1',
        'MUT_FILLED_TOOTH'
    ]),
    resetIndentOptions () {
      this.MUT_PROPERTY1({ newValue: '-', toothId: this.toothId})
      this.indentOptions.WidhtWest= "";
      this.indentOptions.WidhtNeb= "";
      this.indentOptions.Deep1= "";
      this.indentOptions.Deep2= "";
    },
    activeButton (colorViteCalc, color) {
      color.isActive = !color.isActive;
      colorViteCalc.forEach(item => {
        if (item.name !== color.name) {
          item.isActive = false
        }
      })
      //console.log(this.toothId)
      this.MUT_COLOR1( {
        newValue: color.isActive ? color.name : '-',
        toothId: this.toothId,
      })
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
    optionsTypeConstruction () {
      return this.$store.state.module1.optionsTypeConstruction
    },
    compTooth1() {
      return this.stage1.find(el => el.toothNumber === this.toothId)
    },
    compTooth2() {
      return this.stage2.find(el => el.toothNumber === this.toothId)
    },
    isCheckedTypeConstruction() {
      return this.compTooth1.typeConstruction !== '-';
    },
    isCheckedImplantSystem() {
      return this.compTooth1.implantSystem !== '-'
    },
    isCheckedMaterial() {
      return this.compTooth1.material !== '-'
    },
    isCheckedColorVita() {
      return this.compTooth1.colorVita !== '-'
    },
    isCheckedGumPart() {
      return this.compTooth1.gumPart !== '-'
    },
    isCheckedCarving() {
      return this.compTooth1.carving !== 'Нет' || this.compTooth1.opac !== 'Нет';
    },
  },
  watch: {

    indentOptions: {
      deep: true,
      handler(indentOptions) {
          if (this.indentOptions.WidhtWest.length >= 1 && this.indentOptions.WidhtNeb.length >= 1 && this.indentOptions.Deep1.length >= 1 && this.indentOptions.Deep2.length >= 1 ) {
            indentOptions = `Ширина уступа: Вестибулярная ${this.indentOptions.WidhtWest}мм Небная ${this.indentOptions.WidhtNeb}мм Глубина уступа: Над десной ${this.indentOptions.Deep1}мм Под десной ${this.indentOptions.Deep2}мм`
            this.MUT_PROPERTY1({
              newValue: indentOptions,
              toothId: this.toothId
            })
          }
      }
    }
  }
}
</script>

