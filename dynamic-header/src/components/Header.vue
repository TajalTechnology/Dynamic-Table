<template>
    <div>
<!--        <thead v-for ="(name,index) in author" :key="index">-->
<!--{{name}}-->
<!--        </thead>-->
        <th v-for ="(name,index) in header" :key="index">{{name}}</th>
        <!--        <table class="table">-->
<!--        <thead>-->
<!--        <tr>-->
<!--            <th>-->
<!--                {{author.Roll}}-->

<!--            </th>-->
<!--            <th>-->
<!--                {{author.title}}-->

<!--            </th>-->
<!--            <th>-->
<!--                {{author.NickName}}-->

<!--            </th>-->
<!--            <th>-->
<!--                {{author.Email}}-->

<!--            </th>-->

<!--        </tr>-->
<!--        </thead>-->

    </div>
</template>

<script>
    export default {
        name: "Header",
        props: ['header']


    }
</script>

<style scoped>

</style>