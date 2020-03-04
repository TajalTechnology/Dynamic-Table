<template>
    <tbody>
    <!--     <p>{{header}}</p>-->
    <tr v-for="(item, i) in contents.obj" v-bind:key="i">

        <td v-for="(data, key) in contents.header" v-bind:key="key">
            {{item[key]}}
        </td>
    </tr>
    </tbody>
</template>

<script>
    export default {
        name: "TableBody",
        props: ['contents']
    }
</script>

<style scoped>

</style>