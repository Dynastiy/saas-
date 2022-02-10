<template>
  <div class="home">
    <app-header></app-header>
    <div class="home__hero">
      
      <div class="container hero__section">
        <div>
          <h1 class="m-0">Let's meet!</h1>
         
          <h5 class="mb-4"> Wanna book an appointment? </h5>
          <router-link to="/signup"><button class="btn btn__login rounded-pill my-3 px-3 my-sm-0 mr-3" type="submit">Get Started <span> <i class="fa fa-play-circle ml-2" aria-hidden="true"></i> </span> </button></router-link>
        </div>
        <vue-typer text='Hello World! I was registered locally!'></vue-typer>
        <div>
          <img src="@/assets/img/hero-section.svg" width="100%" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import appHeader from '@/components/appHeader.vue';
import vueTyper from 'vue-typer'
export default {
  name: 'Home',
  components: {
    appHeader, vueTyper
  }
}
</script>
