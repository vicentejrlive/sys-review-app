<template>
  <div class="home-main">
     <div class="home-main-svg">
     <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#f3f4f5" fill-opacity="1" d="M0,288L48,282.7C96,277,192,267,288,272C384,277,480,299,576,304C672,309,768,299,864,272C960,245,1056,203,1152,192C1248,181,1344,203,1392,213.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
    <div class="container">
      <b-row>
        <b-col class="home-main-text" md="6" sm="12">
          <h1 class="mt-5 pt-5">The best Open Source Application for Systematic Review</h1>
          <p class="text-justify">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam felis augue, aliquet non sagittis vitae, pulvinar a nunc. Sed ac mi sem. Proin at libero rhoncus, bibendum mi sed, cursus nibh. Phasellus ultricies convallis sem, at mattis ligula. Suspendisse potenti. Aenean convallis arcu sit amet mauris semper volutpat.</p>
          <router-link to="/reviews" >
            <b-button size="md" class="my-2 my-sm-0" variant="primary">Create your account</b-button>
          </router-link>
        </b-col>
        <b-col class="home-main-img" md="6" sm="12">
          <img src="@/assets/svg/analysis.svg" alt="">
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style lang="scss">
.home-main {
  grid-area: main;
  position: relative;
  color: white;
  padding-top: 60px;
  .home-main-svg{
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
  }
  .home-main-img{
    display: flex;
    align-items: center;
    justify-content: center;
    img{
      max-width: 400px;
    }
  }
}
</style>
