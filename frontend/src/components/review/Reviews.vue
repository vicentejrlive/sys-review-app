<template>
  <div class="reviews px-4">
    <b-container>
      <b-row>
        <b-col>
          <b-card>
            <b-card-text>
              <b-input-group>
                <b-form-input v-model="filter" placeholder="Enter your project name..."></b-form-input>
                <b-input-group-append>
                  <b-button @click="search" variant="primary">
                    <b-icon icon="search"></b-icon>
                  </b-button>
                </b-input-group-append>
              </b-input-group>
            </b-card-text>
          </b-card>
        </b-col>
      </b-row>
      <b-list-group class="mt-4">
          <ReviewsItem v-for="review in reviews" :key="review.id" :review="review" />
      </b-list-group>
    </b-container>
  </div>
</template>

<script>
import axios from "axios";
import ReviewsItem from "./ReviewsItem";

export default {
  name: "Reviews",
  components: {
    ReviewsItem
  },
  data() {
    return {
      filter: "",
      reviews: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      const url = `http://localhost:3333/reviews/search`;
      axios
        .post(url, {
          page: 1,
          limit: 10,
          filter: this.filter
        })
        .then(res => {
          this.reviews = res.data.data;
        });
    },
    search() {
      this.init();
    }
  }
};
</script>

<style lang="scss">
.reviews {
  padding-top: 100px;
}
</style>
