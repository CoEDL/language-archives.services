<template>
    <div>
        <div class="row my-2">
            <div class="col">
                <filter-language-component/>
            </div>
        </div>
        <div class="row my-2">
            <div class="col">
                <language-list-table-component v-if="country"/>
                <p v-if="!country">Please select a country from the dropdown.</p>
            </div>
        </div>
        <div class="row my-2">
            <div class="col">
                <language-list-chart-component v-if="country"/>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from "vuex";
import { compact } from "lodash";
import ApexCharts from "apexcharts";
import LanguageListTableComponent from "./LanguageListTableComponent.vue";
import LanguageListChartComponent from "./LanguageListChartComponent.vue";
import FilterLanguageComponent from "./FilterLanguageComponent.vue";

export default {
    components: {
        LanguageListTableComponent,
        LanguageListChartComponent,
        FilterLanguageComponent
    },
    data() {
        return {};
    },
    computed: {
        ...mapState({
            country: state => state.explorerStore.browseByCountry.country
        })
    }
};
</script>

<style lang="scss" scoped>
</style>
