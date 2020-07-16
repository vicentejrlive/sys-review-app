<template>
  <div class="home-functionality">
    <b-container>
      <b-row>
        <b-col>
          <h2 class="text-center mb-4">
            You can
            <strong class="text-primary">DO</strong>!
          </h2>
        </b-col>
      </b-row>
      <b-row>
        <b-col v-for="cardInfo in cardsInfo" :key="cardInfo.title" lg="6" md="6" sm="12">
          <HomeCard :cardInfo="cardInfo"/>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import HomeCard from "./HomeCard";
export default {
  name: "HomeFuncionality",
  components: {
    HomeCard
  },
  data() {
    return {
      cardsInfo: [
        { icon:"award-fill", title: "Share your Research 1", subtitle: "You can share your research with others.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus ultricies rutrum. Nunc varius tempor tortor. Aliquam at efficitur urna. Morbi ac massa eget mauris vehicula ornare ut in quam. " },
        { icon:"award-fill", title: "Share your Research 2", subtitle: "You can share your research with others.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus ultricies rutrum. Nunc varius tempor tortor. Aliquam at efficitur urna. Morbi ac massa eget mauris vehicula ornare ut in quam. " },
        { icon:"award-fill", title: "Share your Research 3", subtitle: "You can share your research with others.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus ultricies rutrum. Nunc varius tempor tortor. Aliquam at efficitur urna. Morbi ac massa eget mauris vehicula ornare ut in quam. " },
        { icon:"award-fill", title: "Share your Research 4", subtitle: "You can share your research with others.", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras luctus ultricies rutrum. Nunc varius tempor tortor. Aliquam at efficitur urna. Morbi ac massa eget mauris vehicula ornare ut in quam. " }
      ]
    };
  }
};
</script>

<style lang="scss">
.home-functionality {
  grid-area: functionality;
  padding-top: 100px;
  min-height: 100vh;
  background-color: #f3f4f5;
}
</style>