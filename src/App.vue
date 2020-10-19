<template>
    <div id="whole">
        <img id="logo" alt="Vue logo" src="./assets/logo.svg">
        <JobFilter msg="Welcome to Trend Micro Job Referral"/>
        <JobList msg="Job List Here"/>
    </div>
</template>

<script>
import JobFilter from './components/JobFilter.vue'
import JobList from './components/JobList.vue'

export default {
    name: 'App',
    components: {
        JobFilter,
        JobList
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    text-align: -webkit-center;
    color: #2c3e50;
    margin-top: 60px;
}
#whole {
    width: 800px;
}
img#logo {
    width: 50%
}
</style>
