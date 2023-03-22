<script setup lang="ts">
import { ref, watch } from 'vue';

const count = ref<number>(0);
const facts = ref<string[]>([]);
const URL = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=`;

watch(count, async () => {
    const result = await fetch(URL+count.value).then(r => r.json());
    // const list = Array.isArray(result) ? result : [result];
    const list: Array<{ _id: string, text:string }> = [].concat(result);

    facts.value = list.map((item) => item.text);
})

</script>

<template>
    <div class="counter">
        <button @click="count -= 1" >-1</button>
        <span>{{count}}</span>
        <button @click="count += 1" >+1</button>
    </div>
    <ul v-if="facts.length">
        <li v-for="fact in facts">{{fact}}</li>
    </ul>
</template>

<style scoped lang="scss">
    .counter{
        font-size: 2rem;
        text-align: center;
    }

    button{
        background: transparent;
        border: 1px solid #222;
        cursor: pointer;
        display: inline-block;
        margin: 0 .8rem;
        padding: .4em .8em;

        &:hover{
            background-color: #eee;
            border-color: rebeccapurple;
        }
    }

</style>