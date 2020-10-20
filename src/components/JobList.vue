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
                <tr v-for="(item, index) in jobData"
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

export default {
    name: 'JobList',
    props: {
        msg: String,
        jobData: Object
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
