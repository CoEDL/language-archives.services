<template>
    <div>
        <div class="flex flex-col text-xl">
            <p>
                The Centre of Excellence for the Dynamics of Language is
                focussed on investigating how languages
                <a
                    href="http://www.dynamicsoflanguage.edu.au/research/language-diversity/"
                    target="_blank"
                    >vary</a
                >, how we learn
                <a
                    href="http://www.dynamicsoflanguage.edu.au/research/language-learning/"
                    target="_blank"
                    >them</a
                >, how we
                <a
                    href="http://www.dynamicsoflanguage.edu.au/research/language-processing/"
                    target="_blank"
                    >process</a
                >
                them and how they
                <a
                    href="http://www.dynamicsoflanguage.edu.au/research/language-evolution/"
                    target="_blank"
                    >evolve</a
                >.
            </p>
            <p>
                A key aspect of our work is the use and development of cutting
                edge technologies to facilitate community access to primary
                records at the same time as curating them for research purposes.
            </p>
            <p>
                This site is a demonstrator of the technologies we're
                developing. Links to the code are provided.
            </p>
            <p>
                To read more about what we do
                <a href="http://www.dynamicsoflanguage.edu.au" target="_blank"
                    >visit our main site.</a
                >
            </p>
            <p class="text-muted text-sm">
                All material is provided under a
                <a
                    href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                    target="_blank"
                    >GNU/GPL General Public License</a
                >
            </p>
        </div>

        <div class="flex flex-col m-4">
            <div class="text-2xl">People</div>
            <div class="text-lg my-2">
                The projects shown in this site are led by
                <a href="http://nthieberger.net" target="_blank"
                    >Associate Professor Nick Thieberger</a
                >
                and have been funded as part of the ARC Centre of Excellence for
                the Dynamics of Language (ARC grant CE140100041)
            </div>
            <div class="text-lg my-2">
                The primary developer of these applications is
                <a href="https://github.com/marcolarosa" target="_blank"
                    >Dr Marco La Rosa</a
                >.
            </div>
        </div>

        <div class="flex flex-row items-center p-5 style-logo-row my-4">
            <a href="https://www.arc.gov.au/" target="_blank" class="mx-2">
                <img src="assets/images/ARC-2x.gif" />
            </a>
            <a href="https://www.uq.edu.au/" target="_blank" class="mx-2">
                <img src="assets/images/UQ-2x.gif" />
            </a>
            <a href="https://www.anu.edu.au/" target="_blank" class="mx-2">
                <img src="assets/images/ANU-2x.gif" />
            </a>
            <a href="https://www.unimelb.edu.au/" target="_blank" class="mx-2">
                <img src="assets/images/UM-2x.gif" />
            </a>
            <a
                href="https://www.westernsydney.edu.au/"
                target="_blank"
                class="mx-2"
            >
                <img src="assets/images/WSU-2x.png" />
            </a>
        </div>
        <div class="text-center px-auto">
            <div class="flex flex-row flex-wrap">
                <div
                    v-for="(item, idx) in items"
                    :key="idx"
                    class="w-full lg:w-1/2 xl:w-1/3 p-2 "
                >
                    <router-link :to="item.uri">
                        <el-card
                            class="shadow-2xl shadow-inner text-orange-700 hover:bg-gray-200 hover:text-gray-800 cursor-pointer"
                            shadow="never"
                        >
                            <div slot="header" class="text-lg xl:text-base">
                                {{ item.name }}
                            </div>
                            <img
                                :src="item.image"
                                class="h-64 w-full object-contain"
                            />
                        </el-card>
                    </router-link>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { debounce } from "lodash";
export default {
    data() {
        return {
            items: [
                {
                    id: 0,
                    name: "Nabu",
                    image: "assets/images/nabu.jpg",
                    uri: "/about/nabu"
                },
                {
                    id: 1,
                    name: "Nabu Collection Viewer",
                    image: "assets/images/viewer.jpg",
                    uri: "/about/nabu-viewer"
                },
                {
                    id: 2,
                    name: "Nabu Collection Mobile Viewer",
                    image: "assets/images/mobile-viewer1.png",
                    uri: "/about/mobile-viewer"
                },
                {
                    id: 3,
                    name: "Language Archives Data Visualisation",
                    image: "assets/images/olacvis.jpg",
                    uri: "/about/olac-vis"
                },
                {
                    id: 4,
                    name: "Language Archives Explorer",
                    image: "assets/images/olac-explorer.png",
                    uri: "/olac-explorer/explore-country"
                },
                {
                    id: 5,
                    name: "Language Archives Data Service",
                    image: "assets/images/olacdata.jpg",
                    uri: "/about/data-service"
                },
                {
                    id: 6,
                    name: "Data Loader",
                    image: "assets/images/dataloader.new.png",
                    uri: "/about/data-loader"
                },
                {
                    id: 7,
                    name: "Word Generator",
                    image: "assets/images/wordgen.png",
                    uri: "/about/wordgen"
                },
                {
                    id: 8,
                    name: "Raspberry Pi as a Repatriation Device",
                    image: "assets/images/raspberrypi-ar21.svg",
                    uri: "/about/pi"
                },
                {
                    id: 9,
                    name: "50 Words",
                    image: "assets/images/50words.png",
                    uri: "/about/50words"
                },
                {
                    id: 10,
                    name: "EAF Viewer",
                    image: "assets/images/eaf-viewer3.png",
                    uri: "/about/eaf-viewer"
                }
            ]
        };
    },
    mounted() {
        window.addEventListener(
            "resize",
            debounce(this.handleResize, 100, { trailing: true })
        );
    },
    beforeDestroy: function() {
        window.removeEventListener("resize", () => {});
    },
    methods: {
        handleResize() {
            setTimeout(this.$redrawVueMasonry, 200);
        }
    }
};
</script>

<style lang="scss" scoped>
@import "assets/variables.scss";

.style-logo-row {
    background-color: rgb(245, 245, 245);
}
</style>
