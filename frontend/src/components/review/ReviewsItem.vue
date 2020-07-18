<template>
  <b-list-group-item :to="`review/${this.review.id}`" class="flex-column align-items-start">
     <div class="d-flex w-100 justify-content-between">
          <h5 class="mb-1">{{review.title}}</h5>
         <small>Last updated {{review.updated_at}}</small>
    </div>
    <div class="d-flex w-100">
         <small>{{review.description}}</small>
    </div>
  </b-list-group-item>
</template>

<script>
export default {
  name: "ReviewCard",
  props: {
    review: {
      type: Object,
      required: true
    }
  },
};
</script>
<style lang="scss">
</style>