<template>

  <div class="steps-wrapper">

    <input type="checkbox" class="steps-item checkbox-none" id="step1">
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
export default {
  name: "MySteps"
}
</script>

