<template>
  <div class="container">
    <h1 class="container__h1">Заказ-наряд на фрезеровку</h1>
    <h2 class="container__h2">Карта-зубов</h2>

    <div class="container__teeth-map">

      <div class="teeth-map__first-column">
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
      </div>
      <div class="teeth-map__second-column">
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
      </div>
      <div class="teeth-map__third-column">
        <div class="third-column__item">18</div>
        <div class="third-column__item">17</div>
        <div class="third-column__item">16</div>
        <div class="third-column__item">15</div>
        <div class="third-column__item">14</div>
        <div class="third-column__item">13</div>
        <div class="third-column__item">12</div>
        <div class="third-column__item">11</div>
        <div class="third-column__item">21</div>
        <div class="third-column__item">22</div>
        <div class="third-column__item">23</div>
        <div class="third-column__item">24</div>
        <div class="third-column__item">25</div>
        <div class="third-column__item">26</div>
        <div class="third-column__item">27</div>
        <div class="third-column__item">28</div>
      </div>
      
    </div>

      <!-- Выделить модификатор rotate-180 -->
    <div class="container__teeth-map rotate-180"> 

      <div class="teeth-map__first-column">
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
        <div class="first-column__item"></div>
      </div>
      <div class="teeth-map__second-column">
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
        <div class="second-column__item"></div>
      </div>
      <div class="teeth-map__third-column">
        <div class="third-column__item rotate-180">48</div>
        <div class="third-column__item rotate-180">47</div>
        <div class="third-column__item rotate-180">46</div>
        <div class="third-column__item rotate-180">45</div>
        <div class="third-column__item rotate-180">44</div>
        <div class="third-column__item rotate-180">43</div>
        <div class="third-column__item rotate-180">42</div>
        <div class="third-column__item rotate-180">41</div>
        <div class="third-column__item rotate-180">31</div>
        <div class="third-column__item rotate-180">32</div>
        <div class="third-column__item rotate-180">33</div>
        <div class="third-column__item rotate-180">34</div>
        <div class="third-column__item rotate-180">35</div>
        <div class="third-column__item rotate-180">36</div>
        <div class="third-column__item rotate-180">37</div>
        <div class="third-column__item rotate-180">38</div>
      </div>
      
    </div>

    <div class="container__info">

      <div class="info__wrapper">

        <span class="wrapper__flag"> 
        Мостовидная опора
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>

        <span class="wrapper__flag"> 
        Мостовидная опора
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>
      
      </div>

      <button class="container__finish-editing">
      Завершить редактирование
      </button> 

    </div>

    <div class="container__right-click-ivent">
      <!-- <img class="right-click-ivent__img" src="./assets/img/background-right-click.svg" alt="#"> -->
      <div class="right-click-ivent__item">Копировать</div>
      <div class="right-click-ivent__item">Вставить</div>
      <div class="right-click-ivent__item">Пометить зуб как <span class="red">отсутствующий</span></div>
      <div class="right-click-ivent__item">Пометить зуб как <span class="green">здоровый</span></div>
      <div class="right-click-ivent__item">Cбросить настройки зуба</div>
    </div>

    <button class="container__back-button">
      <img class="back-button__img" src="./assets/img/back-button.svg" alt="#">
    </button>

    <div class="container__wrapper">

      <div class="wrapper__chain">
      <!--<img class="chain__img" src="./assets/img/line-chain.svg" alt="#"> Надо продумать логику свг цепочек-->  
      <img class="chain__valid-img" src="./assets/img/valid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      <img class="chain__novalid-img" src="./assets/img/novalid-chain.svg" alt="#">
      </div>

      <div class="chain__title">
        <h2 class="title__h2">Тип конструкции</h2>
        <h2 class="title__h2">Система имплантатов и размеры</h2>
        <h2 class="title__h2">Материал изготовления</h2>
        <h2 class="title__h2">Цвет коронки</h2>
        <h2 class="title__h2">Десневая часть</h2>
        <h2 class="title__h2">Опак и карвинг</h2>
        <h2 class="title__h2">Параметры отступа</h2>
      </div>

    </div>

      <div class="info__wrapper flex-column">

        <span class="wrapper__flag "> 
          Как заполнить форму
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>

        <span class="wrapper__flag"> 
        Мостовидная опора
        <img class="flag__img" src="./assets/img/info-icon.svg" alt="#">
        </span>
      
      </div>

    

  </div>
</template>

<style lang='scss' src="./app.scss"></style>

<script>
export default {
  data() {

  },
  methods: {

  }
}
</script>