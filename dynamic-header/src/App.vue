<template>
    <div>
        <h1>User Table</h1>
        <table class="table" >
            <Header v-bind:header="author"></Header>
<!--            <Player ></Player>-->
        </table>

        <hr>
        <hr>
        <hr>

        <h2>Player Table</h2>

        <table class="table">
 <Header v-bind:header="player"></Header>
            <Player></Player>
        </table>
        <router-view></router-view>
    </div>

</template>

<script>
    import Header from "./components/Header";
    import Player from "./components/Player";


    export default {
        name: 'App',
        components: {
            Player,
            Header

        },
        data() {
            return {
                author:['name','rool','dept','roll','kj','kam'],
                player:['name','yyyyy','dyyyyept','y']
            }
        }

    }
</script>

<style>

</style>
