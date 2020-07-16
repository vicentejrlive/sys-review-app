<template>
  <div class="home-card">
    <b-card bg-variant="light" class="text-center mb-4">
      <span class="icon">
        <b-icon :icon="cardInfo.icon" variant="primary"></b-icon>
      </span>
      <b-card-title class="text-primary">{{cardInfo.title}}</b-card-title>
      <b-card-sub-title class="mb-2">{{cardInfo.subtitle}}</b-card-sub-title>
      <b-card-text>{{cardInfo.text}}</b-card-text>
    </b-card>
  </div>
</template>

<script>
export default {
  props: {
    cardInfo: {
      type: Object,
      required: true
    }
  }
};
</script>

<style lang="scss">
    .icon{
        font-size: 100px;
    }
</style>