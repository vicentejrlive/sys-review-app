<template>
  <div id="app">
    <Header/>
    <Content />
  </div>
</template>

<script>
import Header from '@/components/template/Header'
import Content from '@/components/template/Content'

export default {
  components:{
    Header,
    Content
  }
}
</script>

<style lang="scss">
body{
  margin: 0;
  padding: 0;
}

#app {

  height: 100vh;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  grid-template-areas: 
    "header"
    "content"
  ;
}
</style>
