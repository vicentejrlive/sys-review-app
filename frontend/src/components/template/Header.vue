<template>
  <header class="header">
    <b-navbar fixed="top" toggleable="lg" type="dark" variant="dark">
      <router-link to="/">
        <b-navbar-brand>SYS<strong class="text-primary">Review</strong></b-navbar-brand>
      </router-link>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="ml-auto">
          <b-nav-item href="#">Login</b-nav-item>
          <b-nav-item href="/">Sign Up</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
.header {
  grid-area: header;
}
</style>