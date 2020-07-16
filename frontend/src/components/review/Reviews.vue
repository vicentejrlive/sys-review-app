<template>
  <div class="reviews">
    <b-card v-for="review in reviews" :key="review.id" :title="review.title">
      <b-card-text>{{review.description}}</b-card-text>
      <template v-slot:footer>
        <b-card-text class="small text-muted text-right">
          <div class="card-action">
            <div class="card-action-buttons">
              <b-button size="sm" href="#" variant="primary">Open</b-button>
            </div>
            <span>Last updated {{review.updated_at}}</span>
          </div>
        </b-card-text>
      </template>
    </b-card>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Reviews",
  data() {
    return {
      reviews: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const url = `http://localhost:3333/reviews`;
      axios.get(url).then(res => {
        this.reviews = res.data;
      });
    }
  }
};
</script>

<style lang="scss">
.reviews {
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 10px;
  column-gap: 10px;
  padding: 20px;

  .card-action {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
</style>
