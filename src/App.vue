<template>
    <div id="whole">
        <router-view/>
    </div>
</template>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    text-align: -webkit-center;
    color: #2c3e50;
}



#nav {
    padding: 30px;
}

#whole {
    width: 1200px;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
}

img#logo {
    width: 200px;
}

#nav a.router-link-exact-active {
    color: #42b983;
}
</style>
