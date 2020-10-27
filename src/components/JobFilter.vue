<template>
    <div class="filter">
        <h2>
            Search Job Position
        </h2>
        <label>
            Search:
            <input type="text" v-model="keyword">
        </label>
        <p>
            招聘类型：
            <input id="social" type="checkbox" value="social" v-model="recruit_type">
            <label for="social">社招</label>

            <input id="campus" type="checkbox" value="campus" v-model="recruit_type">
            <label for="campus">校招</label>

            <input id="intern" type="checkbox" value="intern" v-model="recruit_type">
            <label for="intern">实习</label>
        </p>
    </div>
</template>

<script>
export default {
    name: 'JobFilter',
    data() {
        return {
            recruit_type: this.$store.state.job_filter.recruit_type,
            keyword: this.$store.state.job_filter.keyword
        }
    },
    watch: {
        recruit_type() {
            const params = {
                filter_type: "recruit_type",
                filter_value: this.recruit_type
            }
            this.$store.commit('change_filter', params);
        },
        keyword() {
            const params = {
                filter_type: "keyword",
                filter_value: this.keyword
            }
            this.$store.commit("change_filter", params);
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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

.filter {
    padding: 10px;
    text-align: left;
    clear: both;
}
</style>
