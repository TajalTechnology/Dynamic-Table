<template>
    <tbody>
    <!--     <p>{{header}}</p>-->
    <tr v-for="(item, i) in obj" v-bind:key="i">

        <td v-for="(data, key) in header" v-bind:key="key">
            {{item[key]}}
        </td>
    </tr>
    </tbody>
</template>

<script>
    export default {
        name: "TableBody",
        props: ['header', 'obj']
    }
</script>

<style scoped>

</style>