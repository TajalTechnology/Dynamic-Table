<template>
    <thead>
        <th v-for="(name,index) in header" :key="index" @click="sorted(index)">{{name}}</th>
    </thead>
</template>

<script>
    export default {
        name: "Header",
        props: ['header'],
        methods:{
            sorted(para){
                console.log(para)

            }

        }


    }
</script>

<style scoped>

</style>