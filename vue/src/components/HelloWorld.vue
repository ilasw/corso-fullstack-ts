<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ msg: string }>();

const count = ref(0);
const name = ref(['Pippo']);

const increment = function(){
  console.log({props})
  count.value = ++count.value;
}

let array = ref<string[]>([]);
let value = ['prova']
array.value = value;


const items = ['a', 'b'];

// Definire un counter e ad ogni variazione di "count" 
// fare la chiamare a cat facts con quel "amount"
watch(count, (newCount, oldCount) => {
  console.log(`Passing from ${oldCount} to ${newCount}`, {oldCount, newCount});
})
</script>

<template>
  <div class="container">
    <h1 class="title">{{ msg }}</h1>
    <div class="logo"><div class="item">a</div></div>
    <div class="card"> {{ name }}
      <button type="button" @click="increment()">count is {{ count }}</button>
    </div>

    <li v-for="item in items">{{item}}</li>
  </div>
</template>

<style scoped lang="scss">
  .container{
    margin:  0 auto;
    width: min(88%, 80rem);
  }

  .title{
    font-size: clamp(20px, 8vw, 80px);
    text-align: center;
  }

</style>
