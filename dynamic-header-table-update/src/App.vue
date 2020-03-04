<template>
    <div class="row">
        main page
        <div class="col-md-6">
            <h1>User Table</h1>
            <table class="table">
                <Header v-bind:header="author"></Header>
                <TableBody v-bind:contents="{obj: user_obj, header: author}"/>
            </table>
        </div>
        <div class="col-md-6">
            <h1>Player Table</h1>
            <table class="table">
                <Header v-bind:header="player"></Header>
                <TableBody v-bind:contents="{obj: user_obj, header: author}"/>
            </table>

        </div>

        <router-view></router-view>
    </div>

</template>

<script>
    import Header from "./components/Header";
    import TableBody from "./components/TableBody";


    export default {
        name: 'App',
        components: {
            TableBody,
            Header,
        },
        data() {
            return {

                author: {name: 'A.Name', roll: 'A.Address', dept: 'A.Phone'},
                user_obj: [
                    {
                        name: 'Tajal',
                        roll: '1189',
                        dept: 'CSE'
                    },
                    {

                        name: 'Islam',
                        roll: '1190',
                        dept: 'EEE',

                    },
                    {
                        roll: '1',
                        name: 'julfikar',
                        dept: 'CMS'
                    },
                ],


                player:
                    {
                        name: 'P.Name',
                        Roll: 'P.Address',
                        Dept: 'P.Phone'
                    }
                ,
                pobj: [{
                    name: 'Tajal',
                    Roll: '1189',
                    Dept: 'CSE'
                },
                    {
                        Dept: 'EEE',
                        name: 'Islam',
                        Roll: '1190',

                    },
                    {
                        Roll: '1',
                        name: 'julfikar',

                        Dept: 'CMS'
                    },
                ],


            }
        }
    }
</script>

<style>

</style>
