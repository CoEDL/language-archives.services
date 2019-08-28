<template>
    <div class="px-lg-5">
        <div slot="header" class="clearfix">
            <h4>Nabu Collection Viewer</h4>
        </div>
        <p>
            The collection viewer for Nabu was developed as a loosely coupled extension of the main application. Where Nabu is a
            traditional server application with a web frontend to the catalog, the viewer is an AngularJS application that
            uses Nabu as a data feed.
        </p>
        <p>
            - The source code is accessible @
            <a
                href="https://github.com/CoEDL/nabu-collection-viewer-v1"
                target="_blank"
            >https://github.com/CoEDL/nabu-collection-viewer-v1</a>
        </p>
        <div class="outer">
            <el-carousel type="card" height="500px">
                <el-carousel-item v-for="(image, idx) in images" :key="idx">
                    <el-image :src="image" fit="contain" />
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            images: [
                "assets/images/viewer.jpg",
                "assets/images/viewer1.jpg",
                "assets/images/viewer2.jpg"
            ]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>
