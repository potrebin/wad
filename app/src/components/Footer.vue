<template>
    <footer>
        <div class="footer-left">
            <p>PS4 team H</p>
            <p>Web Application Development</p>
            <p>Tartu 2024</p>
        </div>
        <div class="footer-right">
            <img src="../assets/sm_icon1.jpg" alt="social">
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer'
}
</script>


<style scoped>
footer {
    background: linear-gradient(to right, #383c6e, #a49dff);
    display: flex;
    align-items: center;
    padding: 2rem;
    justify-content: space-between;
    flex-direction: row;
    border-radius: 10px;

}
footer > .footer-left > p {
    color: white;
    font-size: 16px;
    font-family: Verdana;
    margin: 6px;
}
footer img {
    width: 4rem;
    border-radius: 10px;
    margin-right: 60px;
}
</style>