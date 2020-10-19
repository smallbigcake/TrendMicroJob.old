<template>
    <div class="job-list">
        <h1>{{ msg }}</h1>
        <table>
            <thead>
                <td>Job Title</td>
                <td>Job Type</td>
                <td>Publis Date</td>
            </thead>
            <tbody>
                <tr v-for="(item, index) in job"
                    :key="index"
                    >
                    <td>{{ item.title }}</td>
                    <td>{{ item.type }}</td>
                    <td>{{ item.pub_date }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

const job = {
    190296265: {
        title: "资深开发工程师Linux C++",
        type: "开发",
        pub_date: "2020-10-09",
        responsibilities: "test resp",
        qualifications: "test qual"
    },
    190295876: {
        title: "资深测试开发工程师-Android",
        type: "测试开发",
        pub_date: " 2020-09-29",
        responsibilities: "test resp",
        qualifications: "test qual"

    },
    190291157: {
        title: "资深测试工程师",
        type: "测试",
        pub_date: " 2020-09-09",
        responsibilities: "test resp",
        qualifications: "test qual"

    },
}

export default {
    name: 'JobList',
    props: {
        msg: String
    },
    data() {
        return {
            job: job
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
table {
    border-width: 1px;
    border-style: solid;
    border-collapse: collapse;
    width: 100%;
}

td {
    border-width: 1px;
    border-style: solid;
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
