<script setup lang="ts">
const items = ['form', 'facts']
</script>

<template>
    
    <header>
        <div class="container">
            <nav>
                <ul>
                    <li ><router-link to="/">Home</router-link></li>
                    <li v-for="item in items">
                        <router-link :to="`/${item}`">{{item}}</router-link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
</template>

<style scoped>

    .container{
        margin: 0 auto;
        width: min(88%, 80rem);
    }
</style>