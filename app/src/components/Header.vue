<template>
    <header class="header">
        <nav class="nav-links">
            <router-link class='router-links' to="/">Main</router-link>
            <span> | </span>
            <router-link class='router-links' to="/contacts">Contacts</router-link>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
}
</script>


<style scoped>
nav {
    background: linear-gradient(to right, #383c6e, #a49dff);
    display: flex;
    justify-content: center;
    padding: 2rem;
    flex-direction:row;
    border-radius: 10px;

}
.router-links, .nav-links > span {
    color: white;
    font-size: 20px;
    font-family: Verdana;
    margin: 10px;
    align-items: center;
}
.nav-links a:hover {
    background-color: rgb(54, 151, 255);
}
</style>