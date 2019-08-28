<template>
    <div class="container-fluid style-app">
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    el: "#app"
};
</script>

<style lang="scss" scoped>
.style-app {
}
@media screen and (min-width: 1200px) {
    .style-app {
        width: 1200px;
    }
}
</style>
