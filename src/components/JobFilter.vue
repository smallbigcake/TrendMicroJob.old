<template>
    <div class="filter">
        <h2>
            Search Job Position
        </h2>
<!--        <label>-->
<!--            Search:-->
<!--            <input type="text" >-->
<!--        </label>-->
        <p>
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
            recruit_type: this.$store.state.job_filter.recruit_type
        }
    },
    watch: {
        recruit_type() {
            this.$store.commit('change_filter', this.recruit_type);
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
