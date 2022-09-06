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
            <select class="modal-select select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Анатомическая коронка: полная анатомия'">Полная анатомия</option>
              <option class="option-modal" :value="'Анатомическая коронка: с вестибулярным редуцированием'">С вестибулярным редуцированием</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/anatomic-crown-screw-retained.svg" alt="Анатомическая коронка винтовой фиксации">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type2.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Анатомическая коронка винтовой фиксации: полная анатомия'">Полная анатомия</option>
              <option class="option-modal" :value="'Анатомическая коронка винтовой фиксации: с вестибулярным редуцированием'">С вестибулярным редуцированием</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame.svg" alt="Каркас">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type3.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Каркас'">Использовать каркас</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/frame-for-application.svg" alt="Каркас под нанесение">
            <span class = 'modal-select-header'>{{this.optionsTypeConstruction.Type4.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Каркас под нанесение: винтовой фиксации'">Винтовой фиксации</option>
              <option class="option-modal" :value="'Каркас под нанесение: цементной фиксации'">Цементной фиксации</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/abutment.svg" alt="Абатмент">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type5.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Абатмент: с использованием стандартных оснований'">С использованием стандартных оснований</option>
              <option class="option-modal" :value="'Абатмент: с анодированием титанового абатмента'">С анодированием титанового абатмента</option>
              <option class="option-modal" :value="'Абатмент: с использованием жёлтых оснований'">С использованием жёлтых оснований</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/tab.svg" alt="Вкладка">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type6.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Вкладка: не разборная'">Не разборная</option>
              <option class="option-modal" :value="'Вкладка: разборная'">Разборная</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/rail-girder.svg" alt="Рельсовая балка">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type7.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Рельсовая балка: с замками'">С замками</option>
              <option class="option-modal" :value="'Рельсовая балка: под варку (с пинами)'">Под варку (с пинами)</option>
              <option class="option-modal" :value="'Рельсовая балка: под циркониевый мост'">Под циркониевый мост</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/stump.svg" alt="Культя">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type8.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Культя'">Выбрана культя</option>
              <option class="option-modal" :value="'Культя винтовой фиксации'">Винтовой фиксации</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/surgical-template.svg" alt="Хирургический шаблон">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type9.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Хирургический шаблон'">Выбран хирургический шаблон</option>
            </select>

          </div>

          <div class="modal-select-item">

            <img class="type-construction-img" src="~@/assets/img/type-construction/splint.svg" alt="Сплинт">
            <span class ='modal-select-header'>{{this.optionsTypeConstruction.Type10.typeNameDefault}}</span>
            <select class="modal-select" v-model="compTooth1.typeConstruction">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Сплинт: декомпрессионный (разгрузочный)'"><flag-info></flag-info> Декомпрессионный (разгрузочный)</option>
              <option class="option-modal" :value="'Сплинт: релаксационный (расслабляющий)'"><flag-info></flag-info>Релаксационный (расслабляющий)</option>
              <option class="option-modal" :value="'Сплинт: позиционирующий'"><flag-info></flag-info>Позиционирующий</option>
              <option class="option-modal" :value="'Сплинт: стабилизирующий'"><flag-info></flag-info>Стабилизирующий</option>
              <option class="option-modal" :value="'Сплинт: репонирующий'"><flag-info></flag-info>Репонирующий</option>
              <option class="option-modal" :value="'Сплинт: ретенционный'"><flag-info></flag-info>Ретенционный</option>
            </select>

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
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Alfa Bio: 4.5'">4.5</option>
              <option class="option-modal" :value="'Alfa Bio: X'">X</option>
              <option class="option-modal" :value="'Alfa Bio: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ANKYLOS</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'ANKYLOS: C'">C</option>
              <option class="option-modal" :value="'ANKYLOS: X'">X</option>
              <option class="option-modal" :value="'ANKYLOS: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Anthogry Axiom</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Anthogry Axiom: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ASTRA TECH</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'ASTRA TECH: 3.0'">3.0</option>
              <option class="option-modal" :value="'ASTRA TECH: 3.5 / 4.0'">3.5 / 4.0</option>
              <option class="option-modal" :value="'ASTRA TECH: 4.5 / 5.0'">4.5 / 5.0</option>
              <option class="option-modal" :value="'ASTRA TECH: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>BEGO Semados</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'BEGO Semados: 3.25 / 3.75'">3.25 / 3.75</option>
              <option class="option-modal" :value="'BEGO Semados: 4.1'">4.1</option>
              <option class="option-modal" :value="'BEGO Semados: 4.5'">4.5</option>
              <option class="option-modal" :value="'BEGO Semados: 5.5'">5.5</option>
              <option class="option-modal" :value="'BEGO Semados: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>BioHorizons</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'BioHorizons: 3.0'">3.0</option>
              <option class="option-modal" :value="'BioHorizons: 3.5'">3.5</option>
              <option class="option-modal" :value="'BioHorizons: 4.5'">4.5</option>
              <option class="option-modal" :value="'BioHorizons: 5.0 / 6.0'">5.0 / 6.0</option>
              <option class="option-modal" :value="'BioHorizons: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Biotech</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Biotech: 3.6 / 4.8'">3.6 / 4.8</option>
              <option class="option-modal" :value="'Biotech: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Conmet</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Conmet: NP (2.2)'">NP (2.2)</option>
              <option class="option-modal" :value="'Conmet: RP (2.7'">RP (2.7</option>
              <option class="option-modal" :value="'Conmet: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ICX</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'ICX: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Dentium Implantium</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Dentium Implantium: 3.4'">3.4</option>
              <option class="option-modal" :value="'Dentium Implantium: 3.8 / 4.2'">3.8 / 4.2</option>
              <option class="option-modal" :value="'Dentium Implantium: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>IRIS Liko-M</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'IRIS Liko-M: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MegaGen AnyOne</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'MegaGen AnyOne: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MegaGen AnyRidge</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'MegaGen AnyRidge: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MIS</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'MIS: NP (3.3)'">NP (3.3)</option>
              <option class="option-modal" :value="'MIS: SP (3.75 / 4.2)'">SP (3.75 / 4.2)</option>
              <option class="option-modal" :value="'MIS: WP (5.0 / 6.0)'">WP (5.0 / 6.0)</option>
              <option class="option-modal" :value="'MIS: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>MIS C1</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'MIS C1: NP (3.3)'">NP (3.3)</option>
              <option class="option-modal" :value="'MIS C1: SP (3.75 / 4.2)'">SP (3.75 / 4.2)</option>
              <option class="option-modal" :value="'MIS C1: WP (5.0)'">WP (5.0)</option>
              <option class="option-modal" :value="'MIS C1: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>NIKO / LIKO</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'NIKO / LIKO: 3.5'">3.5</option>
              <option class="option-modal" :value="'NIKO / LIKO: 4.5'">4.5</option>
              <option class="option-modal" :value="'NIKO / LIKO: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>NobelActive</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'NobelActive: 3.0'">3.0</option>
              <option class="option-modal" :value="'NobelActive: NP (3.5)'">NP (3.5)</option>
              <option class="option-modal" :value="'NobelActive: RP (4.5)'">RP (4.5)</option>
              <option class="option-modal" :value="'NobelActive: WP (5.0)'">WP (5.0)</option>
              <option class="option-modal" :value="'NobelActive: WP (5.5)'">WP (5.5)</option>
              <option class="option-modal" :value="'NobelActive: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>NobelReplace</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'NobelReplace:NP (3.5)'">NP (3.5)</option>
              <option class="option-modal" :value="'NobelReplace: RP (4.3)'">RP (4.3)</option>
              <option class="option-modal" :value="'NobelReplace: WP (5.0)'">WP (5.0)</option>
              <option class="option-modal" :value="'NobelReplace: WP (6.0)'">WP (6.0)</option>
              <option class="option-modal" :value="'NobelReplace: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Osstem</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Osstem: Mini (3.5)'">Mini (3.5)</option>
              <option class="option-modal" :value="'Osstem: Regular (4.0 / 4.5 / 5.0)'">Regular (4.0 / 4.5 / 5.0)</option>
              <option class="option-modal" :value="'Osstem: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>OT medical F1</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'OT medical F1: 3.3'">3.3</option>
              <option class="option-modal" :value="'OT medical F1: 3.8'">3.8</option>
              <option class="option-modal" :value="'OT medical F1: 4.1'">4.1</option>
              <option class="option-modal" :value="'OT medical F1: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>OT medical F2</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'OT medical F2: 4.1'">4.1</option>
              <option class="option-modal" :value="'OT medical F2: 5.0'">5.0</option>
              <option class="option-modal" :value="'OT medical F2: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Radix</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Radix: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Renova</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Renova: SP (3.75 / 4.2)'">SP (3.75 / 4.2)</option>
              <option class="option-modal" :value="'Renova: RDI (4.5 / 4.75)'">RDI (4.5 / 4.75)</option>
              <option class="option-modal" :value="'Renova: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ROOTT</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'ROOTT: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Straumann Bone Level</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Straumann Bone Level: RC (4.1 / 4.8)'">RC (4.1 / 4.8)</option>
              <option class="option-modal" :value="'Straumann Bone Level: NC (3.3)'">NC (3.3)</option>
              <option class="option-modal" :value="'Straumann Bone Level: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Straumann SyncOcta</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'Straumann SyncOcta: NN (3.5)'">NN (3.5)</option>
              <option class="option-modal" :value="'Straumann SyncOcta: RN (4.8)'">RN (4.8)</option>
              <option class="option-modal" :value="'Straumann SyncOcta: WN (6.5)'">WN (6.5)</option>
              <option class="option-modal" :value="'Straumann SyncOcta: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>SIC</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'SIC: 3.3'">3.3)</option>
              <option class="option-modal" :value="'SIC: 4.2'">4.2</option>
              <option class="option-modal" :value="'SIC: Multi-Unit'">Multi-Unit</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>XiVE</span>
            <select class="modal-select" v-model="compTooth1.implantSystem">
              <option class="option-modal default-option" selected :value="'-'">Выберите размер</option>
              <option class="option-modal" :value="'XiVE: 3.0'">3.0</option>
              <option class="option-modal" :value="'XiVE: 3.4'">3.4</option>
              <option class="option-modal" :value="'XiVE: 3.8'">3.8</option>
              <option class="option-modal" :value="'XiVE: 4.5'">4.5</option>
              <option class="option-modal" :value="'XiVE: 5.5'">5.5</option>
              <option class="option-modal" :value="'XiVE: Multi-Unit'">Multi-Unit</option>
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

            <span class ='modal-select-header'>Pre-mill (Ti)</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'Pre-mill (Ti)'">Выбран Pre-mill (Ti)</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>CoCr (кобальт хром)</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'CoCr (кобальт хром): Mesa'">Mesa</option>
              <option class="option-modal" :value="'CoCr (кобальт хром): Scheftner'">Scheftner</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Titan</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'Titan: Россия'">Россия</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>PMMA</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'PMMA: Yamahachi'">Yamahachi</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>WAX</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'WAX: Yamahachi'">Yamahachi</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>PEEK</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'PEEK: Bredent'">Bredent</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>BioHPP</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'BioHPP: Bredent'">Bredent</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>ZrO2 (циркон)</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'ZrO2 (циркон): Aidite'">Aidite</option>
              <option class="option-modal" :value="'ZrO2 (циркон): Katana'">Katana</option>
              <option class="option-modal" :value="'ZrO2 (циркон): ZirCAD'">ZirCAD</option>
              <option class="option-modal" :value="'ZrO2 (циркон): Audental'">Audental</option>
              <option class="option-modal" :value="'ZrO2 (циркон): Everest'">Everest</option>
              <option class="option-modal" :value="'ZrO2 (циркон): Upcera'">Upcera</option>
            </select>

          </div>

          <div class="modal-select-item">

            <span class ='modal-select-header'>Multilayer 3D</span>
            <select class="modal-select" v-model="compTooth1.material">
              <option class="option-modal default-option" selected :value="'-'">Выберите материал</option>
              <option class="option-modal" :value="'Multilayer 3D: Aidite'">Aidite</option>
              <option class="option-modal" :value="'Multilayer 3D: Katana'">Katana</option>
              <option class="option-modal" :value="'Multilayer 3D: ZirCAD'">ZirCAD</option>
              <option class="option-modal" :value="'Multilayer 3D: Audental'">Audental</option>
              <option class="option-modal" :value="'Multilayer 3D: Everest'">Everest</option>
              <option class="option-modal" :value="'Multilayer 3D: Upcera'">Upcera</option>
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

                <div class="modal-select-column-calc">
                  <div class="modal-select-column-item-calc" v-for='color in colorViteCalc' :id="color.id"
                       @click="activeButton(colorViteCalc, color)" :class="{ 'active': color.isActive }">
                    {{ color.value }}
                  </div>
                </div>

              </div>

                <label class="modal-select-input" for="">Другое</label>
                <input type="text" name="" placeholder="Напишите свой вариант" v-model="compTooth1.colorVita">


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

              <span class ='modal-select-header'>Десневая часть есть</span>
              <select class="modal-select" v-model="compTooth1.gumPart">
                <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
                <option class="option-modal" :value="'Есть: красить'">Красить</option>
                <option class="option-modal" :value="'Есть: Не красить'">Не красить</option>
              </select>

            </div>

          </div>

          <div class="column gap10">

            <div class="modal-select-item">

              <span class ='modal-select-header'>Десневая часть отсутствует</span>
              <select class="modal-select" v-model="compTooth1.gumPart">
                <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
                <option class="option-modal" :value="'Отсутствует: красить'">Красить</option>
                <option class="option-modal" :value="'Отсутствует: Не красить'">Не красить</option>
              </select>

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

            <span class ='modal-select-header'></span>
            <select class="modal-select" v-model="compTooth1.carving">
              <option class="option-modal default-option" selected :value="'-'">Выберите значение</option>
              <option class="option-modal" :value="'Опак'">Опак</option>
              <option class="option-modal" :value="'Карвинг (силами фрезерного центра)'">Карвинг (силами фрезерного центра)</option>
              <option class="option-modal" :value="'Отправить на карвинг заказчику'">Отправить на карвинг заказчику</option>
            </select>

          </div>

        </div>

      </div>
    </my-modal>

    <my-modal v-model:show="modalVisible7">
      <div class="content-modal-wrapper">

        <h2 class="modal__h2">Укажите параметры отступа</h2>
        <h3 class="subheader__h2">Напишите данные</h3>

        <div class="modal-select-container-column">

          <label class="modal-select-input" for="">Ширина уступа</label>
          <input type="text" name="" placeholder="Вестибулярная (впишите значение в мм.)" v-model="this.indentOptions.WidhtWest">
          <input type="text" name="" placeholder="Небная (впишите значение в мм.)" v-model="this.indentOptions.WidhtNeb" >

          <label class="modal-select-input" for="">Глубина уступа</label>
          <input type="text" name="" placeholder="Над десной (впишите значение в мм.)" v-model="this.indentOptions.Deep1">
          <input type="text" name="" placeholder="Под дейсной (впишите значение в мм.)" v-model="this.indentOptions.Deep2">

          <my-button @click="resetIndentOptions">Сбросить значение</my-button>

        </div>

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
      implantSystemLocal: {
        StraumannBoneLevel: {
          value1: '',
          value2: '',
          value3: '',
        }
      },
      indentOptions: {
        WidhtWest: '',
        WidhtNeb: '',
        Deep1: '',
        Deep2: '',
      },

    }
  },

  methods: {
    ...mapMutations([
        'MUT_PROPERTY',
        'MUT_COLOR',
        'MUT_FILLED_TOOTH'
    ]),
    resetIndentOptions () {
      this.MUT_PROPERTY({ newValue: '-', toothId: this.toothId})
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
      this.MUT_COLOR( {
        newValue: color.isActive ? color.name : '-',
        toothId: this.toothId
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
  },
  watch: {
    indentOptions: {
      deep: true,
      handler(indentOptions) {
          if (this.indentOptions.WidhtWest.length >= 1 && this.indentOptions.WidhtNeb.length >= 1 && this.indentOptions.Deep1.length >= 1 && this.indentOptions.Deep2.length >= 1 ) {
            indentOptions = `Ширина уступа: Вестибулярная ${this.indentOptions.WidhtWest}мм Небная ${this.indentOptions.WidhtNeb}мм Глубина уступа: Над десной ${this.indentOptions.Deep1}мм Под десной ${this.indentOptions.Deep2}мм`
            this.MUT_PROPERTY({
              newValue: indentOptions,
              toothId: this.toothId
            })
          }
      }
    }
  }
}
</script>

