<template>
  <div>
    <navbar/>
    <b-container fluid>
      <app-logo/>
      <Categories/>
      <meals/>
      <Area/>
      <Refs/>
    </b-container>
    <Footer/>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'
import Navbar from '~/components/Navbar.vue'
import Area from '~/components/Area.vue'
import Categories from '~/components/Category.vue'
import Meals from '~/components/Meals.vue'
import Refs from '~/components/Reference.vue'
import Footer from '~/components/footer.vue'

export default {
  components: {
    AppLogo,
    Navbar,
    Area,
    Categories,
    Meals,
    Refs,
    Footer
  }
}
</script>

<style>
.container-fluid {
  width: 100%;
  justify-content: center;
  align-items: center;
  text-align: none;
}

.links {
  padding-top: 15px;
}
</style>

