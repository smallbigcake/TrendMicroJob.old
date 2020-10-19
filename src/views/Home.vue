<template>
    <div class="home">
        <img id="logo" alt="Vue logo" src="../assets/logo.svg">
        <JobFilter msg="Welcome to Trend Micro Job Referral"/>
        <JobList msg="Job List Here"/>
    </div>
</template>

<script>
// @ is an alias to /src
import JobFilter from '@/components/JobFilter.vue'
import JobList from '@/components/JobList.vue'


export default {
    name: 'Home',
    components: {
        JobFilter,
        JobList
    }
}
</script>
