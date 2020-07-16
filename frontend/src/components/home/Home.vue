<template>
  <div class="home">
      <HomeMain/>
      <HomeFunctionality/>
      <HomeFooter/>
  </div>
</template>

<script>
import HomeMain from './HomeMain'
import HomeFunctionality from './HomeFunctionality'
import HomeFooter from './HomeFooter'
export default {
  components:{
    HomeMain,
    HomeFunctionality,
    HomeFooter
  }
}
</script>

<style lang="scss">
  .home{
    background-color: #343a40 !important;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 600px 1fr 100px;
    grid-template-areas: 
      "main"
      "functionality"
      "footer"
    ;
  }
</style>