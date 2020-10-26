<template>
    <div class="home">
        <Header></Header>
        <Sidebar></Sidebar>
        <div class="main-content">
            <JobDetail :job-data="job_data" :job-id="$route.params.id"></JobDetail>
        </div>
    </div>
</template>

<script>

// @ is an alias to /src
import Common from "@/components/Common";
import Header from '@/components/Header.vue'
import Sidebar from '@/components/Sidebar.vue'
import JobDetail from "@/components/JobDetail"

export default {
    name: 'Job',
    components: {
        Header,
        Sidebar,
        JobDetail
    },
    data() {
        return {
            job_data: Common.job_data
        };
    },
    created: function () {
        // Change html title to current job title.
        document.title = this.job_data[this.$route.params.id].title;
    }
}</script>

<style scoped>
.main-content {
    width: 70%;
    float: left;
}
</style>