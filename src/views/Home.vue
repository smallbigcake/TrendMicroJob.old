<template>
    <div class="home">
        <Header />
        <JobFilter msg="Welcome to Trend Micro Job Referral"/>
        <JobList msg="Job List" :job-data="job_data"/>
    </div>
</template>

<script>
// @ is an alias to /src

import Header from '@/components/Header.vue'
import JobFilter from '@/components/JobFilter.vue'
import JobList from '@/components/JobList.vue'

import Common from '@/components/Common.vue'


export default {
    name: 'Home',
    components: {
        Header,
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
