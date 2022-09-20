<template>
  <div class="recipe-container font-design">
    <a href="#">
      <div class="salsa-image"></div>
    </a>
    <div class="recipe-header">
      <h3><a href="#">BLACK BEAN AND MANGO SALSA</a></h3>
    </div>
    <div class="recipe-text">
      <p>Black beans and mango combined with fresh ingredients like tomatoes, onions, and cilantro makes a flavor pack
        salsa, high in protein and plant-forward. This is a versatile recipe that can be served with chips, enjoyed as a
        salad or as a side dish with grilled chicken or fish.
      </p>
    </div>
    <a href="#" class="recipe-read-more">
        <span>Read More</span>
        <span class="material-icons-outlined recipe-arrow-icon">arrow_right_alt</span>
    </a>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue';

export default defineComponent({
  name: 'RecipeList',
});
</script>

<style lang="scss" scoped>
.font-design {
  font-family: Brandon Grotesque,serif;
  font-size: 16px;
  font-weight: 500;
}
.recipe-arrow-icon {
  font-size: 18px;
  color: #888888;
  padding-top: 1%;
  padding-left: 3%;
}
.recipe-header a {
  text-decoration: none;
  color: black;
}
.recipe-read-more {
  text-decoration: none;
  display: flex;
  flex-direction: row;
  gap: 5px;
}
.recipe-read-more span:hover{
  color: green;
}
.salsa-image {
  min-height: 250px;
  background-image: url("../assets/img/salsa.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
@media screen and (max-width: 600px) {
  .recipe-container {
    max-height: 600px;
    max-width: 100%;
    overflow: hidden;
    box-shadow: 5px 10px 8px #888888;
    padding: 10px;
  }
}

</style>
