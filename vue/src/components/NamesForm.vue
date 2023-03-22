<script setup lang="ts">
    import { ref } from 'vue';

    const nameToAdd = ref('')
    const list = ref<string[]>([])

    const addName = function(){
        if(nameToAdd.value.length > 0){
            list.value = [...list.value, nameToAdd.value];
        }
    }
</script>

<template>
    <h1>{{nameToAdd}}</h1>
    <form @submit.prevent="addName()">
        <input type="text" v-model.trim="nameToAdd" />
        <button>Invia</button>
    </form>
    <ul v-if="list.length">
        <li v-for="item in list">{{item}}</li>
    </ul>
</template>