<template>
    <div>
        <div class="row">
            <div class="col style-text">
                <p>
                    The Centre of Excellence for the Dynamics of Language is focussed on investigating
                    how languages
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-diversity/"
                        target="_blank"
                    >vary</a>,
                    how we learn
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-learning/"
                        target="_blank"
                    >them</a>,
                    how we
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-processing/"
                        target="_blank"
                    >process</a>
                    them and how they
                    <a
                        href="http://www.dynamicsoflanguage.edu.au/research/language-evolution/"
                        target="_blank"
                    >evolve</a>.
                </p>
                <p>
                    A key aspect of our work is the use and development of cutting edge technologies
                    to facilitate community access to primary records at the same time as
                    curating them for research purposes.
                </p>
                <p>
                    This site is a demonstrator of the technologies we're developing. Links to the
                    code are provided.
                </p>
                <p>
                    To read more about what we do
                    <a
                        href="http://www.dynamicsoflanguage.edu.au"
                        target="_blank"
                    >visit our main site.</a>
                </p>
                <p class="text-muted style-link">
                    All material is provided under a
                    <a
                        href="https://www.gnu.org/licenses/gpl-3.0.en.html"
                        target="_blank"
                    >GNU/GPL General Public License</a>
                </p>
            </div>
        </div>

        <div class="row mt-5 mb-2">
            <div class="col">
                <div class="row">
                    <div class="col">
                        <h5>People</h5>
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col">
                        The projects shown in this site are led by
                        <a
                            href="http://nthieberger.net"
                            target="_blank"
                        >Associate Professor Nick Thieberger</a>
                        and
                        have been funded as part of the
                        ARC Centre of Excellence for the Dynamics of Language (ARC grant CE140100041)
                    </div>
                </div>
                <div class="row my-4">
                    <div class="col">
                        The primary developer of these applications is
                        <a
                            href="https://github.com/marcolarosa"
                            target="_blank"
                        >Dr Marco La Rosa</a>.
                    </div>
                </div>
            </div>
        </div>

        <div class="row my-2 py-5 style-logo-row">
            <div class="col text-center">
                <a href="https://www.arc.gov.au/" target="_blank">
                    <img src="assets/images/ARC-2x.gif" class="style-logo px-3" />
                </a>
                <a href="https://www.uq.edu.au/" target="_blank">
                    <img src="assets/images/UQ-2x.gif" class="style-logo px-3" />
                </a>
                <a href="https://www.anu.edu.au/" target="_blank">
                    <img src="assets/images/ANU-2x.gif" class="style-logo px-3" />
                </a>
                <a href="https://www.unimelb.edu.au/" target="_blank">
                    <img src="assets/images/UM-2x.gif" class="style-logo px-2" />
                </a>
                <a href="https://www.westernsydney.edu.au/" target="_blank">
                    <img src="assets/images/WSU-2x.png" class="style-logo px-2" />
                </a>
            </div>
        </div>
        <div class="text-center px-auto">
            <div v-masonry transition-duration="0s" item-selector=".item">
                <div v-masonry-tile class="item" v-for="(item, idx) in items" :key="idx">
                    <el-card class="style-card style-tile">
                        <div slot="header" class="style-tile-header style-tile-title">
                            <router-link :to="item.uri">{{item.name}}</router-link>
                        </div>
                        <router-link :to="item.uri">
                            <img :src="item.image" class="style-image mx-auto d-block" />
                        </router-link>
                    </el-card>
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
.remove-padding {
    padding: 0;
}

.pad-funding-note {
    border-top: 1px solid #ccc;
    margin-top: 50px;
}

.style-image {
    width: 100%;
    height: auto;
}

.style-link {
    font-size: 14px;
}

.style-card {
    border: 1px solid #ccc;
    border-radius: 4px;
}

.style-image {
    margin: 20px 2%;
    // -webkit-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    // -moz-box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
    // box-shadow: 10px 10px 20px 0px rgba(212, 212, 212, 1);
}

.style-logo {
    width: 18%;
}

.style-logo-row {
    background-color: rgb(245, 245, 245);
}
.style-tile {
    min-width: calc(100vw 100px);
    max-width: calc(100vw 100px);
    margin: 15px;
}
@media only screen and (min-width: 768px) {
    .style-tile {
        min-width: calc((100vw / 2) - 80px);
        max-width: calc((100vw / 2) - 80px);
    }
}
@media only screen and (min-width: 1024px) {
    .style-tile {
        min-width: calc((100vw / 2) - 130px);
        max-width: calc((100vw / 2) - 130px);
    }
    .style-text {
        font-size: 1.2em;
        letter-spacing: 1px;
    }
}
@media only screen and (min-width: 1200px) {
    .style-tile {
        min-width: 500px;
        max-width: 500px;
        padding: 0 50px;
    }
}
</style>
