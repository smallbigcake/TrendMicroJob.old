<template>
    <div class="home">
        <Header></Header>
        <JobDetail :job-data="job_data" :job-id="$route.params.id"></JobDetail>
    </div>
</template>

<script>

// @ is an alias to /src
import Common from "@/components/Common";
import Header from '@/components/Header.vue'
import JobDetail from "@/components/JobDetail"

export default {
    name: 'Job',
    components: {
        Header,
        JobDetail
    },
    data() {
        return {
            job_data: Common.job_data
        };
    }
}
</script>