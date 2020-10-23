<template>
    <div class="home">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="main-content">
            <JobFilter msg="Welcome to Trend Micro Job Referral"/>
            <JobList msg="Job List" :job-data="job_data"/>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import JobFilter from '@/components/JobFilter.vue'
import JobList from '@/components/JobList.vue'

import Common from '@/components/Common.vue'


export default {
    name: 'Home',
    components: {
        Header,
        Sidebar,
        JobFilter,
        JobList
    },
    data() {
        return {
            job_data: Common.job_data
        }
    }
}
</script>

<style scoped>
.home {
    width: 1200px;
}

.main-content {
    width: 70%;
    float: left;
    background-color: #fcf8f3;
}
</style>
