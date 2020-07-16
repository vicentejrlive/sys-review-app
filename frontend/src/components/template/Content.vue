<template>
  <div class="content">
      <router-view/>
  </div>
</template>

<script>
export default {
    name: 'Content'
}
</script>

<style lang="scss">
    .content{
        grid-area: content;
    }
</style>