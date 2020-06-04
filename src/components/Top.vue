<template>

<div class="title my-4">

  <v-layout justify-center row @click="rerender()" style="cursor: pointer">
    <v-avatar tile size="48" class="mr-2 ml-0"><img src="/fishcount/img/bot.png" /></v-avatar>
    <span class="display-2 font-weight-black text-uppercase black--text pb-0"><span>Shrimp</span><span class="font-weight-thin">Counter</span></span>
  </v-layout>

  <v-layout align-center justify-center wrap>
    <!-- <h2 class="headline mt-4">{{ $t('subtitle') }}</h2> -->
    <h2 class="headline mt-4">Using computer vision to identify and count Shrimps.</h2>
  </v-layout>

  <v-layout align-center justify-center wrap>
    <v-flex xs12 md10 lg10 xl6>
      <!-- <p class="subheading my-3">{{ $t('description') }}</p> -->
      <p class="subheading my-3">
          This is a proof-of-concept web app to develop a way to algorithmically detect Shrimps and Shrimp cluster on magnified or microscope using computer vision. Try out the app using the 'demo' images.
      </p>
       </v-flex>
  </v-layout>

</div>

</template>

<script>
import { eventBus } from '../main.js'

export default {
  methods: {
    rerender () {
      eventBus.$emit('forceRerender')
    }
  }
}
</script>
