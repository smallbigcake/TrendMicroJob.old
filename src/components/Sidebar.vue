<template>
    <div class="sidebar">
        <div class="sidebar-content">
            <span id="ref_email">Referral Email: cake_xu[at]trendmicro.com</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Sidebar'
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

#ref_email {
    font-weight: 600;
    font-size: 24px;
    color: red;
    overflow-wrap: break-word;

}

.sidebar {
    width: 30%;
    float: left;
}

.sidebar-content {
    padding: 20px 10px;
    margin: 0 10px;
    background-color: #fcf8f3;
}

</style>
