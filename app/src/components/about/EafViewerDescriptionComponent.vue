<template>
    <div class="px-5">
        <div slot="header" class="clearfix">
            <h4>ELAN Lint</h4>
        </div>
        <p>This tool aims to quickly reveal ELAN files that have holes or other data issues.</p>
        <p>
            - Use the application @
            <a
                href="http://language-archives.services/eaf-viewer/"
                target="_blank"
            >http://language-archives.services/eaf-viewer/</a>
            <br>- The source code is accessible @
            <a
                href="https://github.com/marcolarosa/pdsc-eaf-viewer"
                target="_blank"
            >https://github.com/marcolarosa/pdsc-eaf-viewer</a>
        </p>
        <div class="outer">
            <el-carousel type="card">
                <el-carousel-item v-for="(image, idx) in images" :key="idx">
                    <el-image :src="image" fit="fill"/>
                </el-carousel-item>
            </el-carousel>
        </div>
    </div>
</template>

<script>
import SiteHeaderComponent from "src/components/SiteHeaderComponent.vue";

export default {
    data() {
        return {
            images: ["assets/images/eafViewer.png"]
        };
    }
};
</script>

<style lang="scss" scoped>
</style>