<template>
    <div class="job-list">
        <h2>{{ msg }}</h2>
        <table>
            <thead>
                <td>Job Title</td>
                <td>Job Type</td>
                <td>Publish Date</td>
            </thead>
            <tbody>
                <tr v-for="item in sorted_job_data"
                    :key="item.id"
                    >
                    <td><a :href="'job/' + item.id"> {{ item.title }} </a></td>
                    <td>{{ item.job_type }}</td>
                    <td>{{ item.pub_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

export default {
    name: 'JobList',
    props: {
        msg: String,
        jobData: Object
    },
    computed: {
        sorted_job_data: function () {
            const job_array = [];
            for (const job_id in this.jobData) {
                const job_item = this.jobData[job_id];
                if (job_item.status === "open"  // Job may be closed.
                    && this.recruit_type.indexOf(job_item.recruit_type) !== -1  // Only current selected recruit type will be displayed.
                    && job_item.title.indexOf(this.keyword) !== -1  // Only display jobs that match the search keyword.
                ) {
                    const one_job = job_item;
                    one_job.id = job_id;
                    job_array.push(one_job);
                }
            }
            job_array.sort(sort_job_date);
            return job_array;
        },
        recruit_type: function () {
            return this.$store.state.job_filter.recruit_type;
        },
        keyword: function () {
            return this.$store.state.job_filter.keyword;
        }
    }
}

function sort_job_date(a, b) {
    if (a.pub_date > b.pub_date) {
        return -1;
    }
    else {
        return 1;
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.job-list {
    padding: 10px;

}
h2 {
    text-align: left;
}
table {
    border-radius: 5px;
    border-spacing: 0;
    width: 100%;
    line-height: 24px;
}

td {
    padding: 8px;
}

thead {
    background-color: lightpink;
    font-weight: 600;
}

tr:nth-child(odd) {
    background-color: #fff0ff;
}

tr:nth-child(even) {
    background-color: #fef9fc;
}

thead > td:first-child {
    border-top-left-radius: 5px;
}

thead > td:last-child {
    border-top-right-radius: 5px;
}

tr:last-child > td:first-child {
    border-bottom-left-radius: 5px;
}

tr:last-child > td:last-child {
    border-bottom-right-radius: 5px;
}

h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>
