<template>
  <div class="review">
    <b-overlay :show="loading" rounded="sm">
      <b-container>
        <b-row v-if="!loading">
          <b-col v-if="selections.length > 0">
            <b-list-group>
              <b-list-group-item
                v-for="selection in selections"
                :key="selection.id"
                href="#"
                class="flex-column align-items-start"
              >
                <div class="d-flex w-100 justify-content-between">
                  <h5 class="mb-1">{{selection.name}}</h5>
                  <small>Started: {{selection.start_selection}}</small>
                </div>
                <div class="d-flex w-100 justify-content-between">
                  <span></span>
                  <small>End: {{selection.end_selection}}</small>
                </div>
                <small>Donec id elit non mi porta.</small>
                <div class="d-flex w-100 justify-content-end">
                  <b-badge
                    variant="success"
                    v-b-tooltip.hover
                    title="Number of articles selected"
                  >Selected 4</b-badge>
                  <b-badge
                    class="ml-2"
                    variant="danger"
                    v-b-tooltip.hover
                    title="Number of articles excluded"
                  >Excluded 4</b-badge>
                </div>
              </b-list-group-item>
            </b-list-group>
          </b-col>
          <b-col v-else>
            <h1>Ops...There's nothing here!</h1>
            <b-alert show variant="primary">You can create a new Selecion!</b-alert>
          </b-col>
        </b-row>
      </b-container>
    </b-overlay>
  </div>
</template>

<script>
import axios from "axios";

export default {
  props: ["id"],
  name: "Review",
  data() {
    return {
      loading: true,
      selections: []
    };
  },
  methods: {
    init() {
      const url = `http://localhost:3333/selections/review/${this.id}`;
      this.loading = true;
      axios.get(url).then(res => {
        this.selections = res.data;
        this.loading = false;
      });
    }
  },
  mounted() {
    this.init();
  }
};
</script>

<style lang="scss">
.review {
  padding-top: 100px;
}
</style>