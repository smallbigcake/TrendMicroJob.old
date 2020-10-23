<template>
    <div class="job-list">
        <h2>{{ msg }}</h2>
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
                    <td><a :href="'job/' + index"> {{ item.title }} </a></td>
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
