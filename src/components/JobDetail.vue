<template>
    <div id="job_detail">
        <div class="small-title">Job Name: </div>
        <div> {{ job_detail.title }}</div>
        <div class="small-title">Responsibilities</div>
        <div class="content" v-html="responsibilities"></div>
        <div class="small-title">Qualifications</div>
        <div class="content" v-html="qualifications"></div>
    </div>
</template>
<script>

export default {
    name: "JobDetail",
    props: {
        jobData: Object,
        jobId: String
    },
    computed: {
        job_detail() {
            return this.jobData[this.jobId];
        },
        responsibilities() {
            return this.job_detail.responsibilities.replace(/\n/g, "<br>");
        },
        qualifications() {
            return this.job_detail.qualifications.replace(/\n/g, "<br>");
        }
    }
}
</script>

<style scoped>
#job_detail {
    text-align: left;
}
.small-title {
    font-weight: 600;
    font-size: 24px;
    margin: 20px 0;
}
.content {
    line-height: 36px;
}

</style>