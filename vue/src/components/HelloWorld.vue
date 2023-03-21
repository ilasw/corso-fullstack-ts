<script setup lang="ts">
import { ref, watch } from 'vue'

const props = defineProps<{ msg: string }>();

const count = ref(0);
const name = ref('Pippo');

const increment = function(){
  console.log({props})
  count.value = ++count.value;
}


const items = ['a', 'b'];

// Definire un counter e ad ogni variazione di "count" 
// fare la chiamare a cat facts con quel "amount"
watch(count, (newCount, oldCount) => {
  console.log(`Passing from ${oldCount} to ${newCount}`, {oldCount, newCount});
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <div class="logo"><div class="item">a</div></div>
  <div class="card"> {{ name }}
    <button type="button" @click="increment()">count is {{ count }}</button>
  </div>

  <li v-for="item in items">{{item}}</li>

</template>

<style scoped lang="scss">

.logo{
  .item{ 
    background-color: red;
  }
}

.logo{
  display: none;
}
.read-the-docs {
  color: #888;
}
</style>
