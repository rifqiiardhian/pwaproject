<template>
<b-row class="row-category">
    <b-col class="col-md-12 mt-5 mb-4">
        <h3 class="category-title">Categories</h3>
    </b-col>
    <b-col class="col-md-2" v-for="(data, index) in datacategory" :key="index">
        <b-card
            v-bind:img-src="data.strCategoryThumb"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 20rem;"
            class="mb-2"
        >
            <h6 class="category-text">{{ data.strCategory }}</h6>
            <b-card-text>{{ data.strCategoryDescription | truncate(50, '...')}}</b-card-text>
        </b-card>
    </b-col>
</b-row>
</template>
<script>
import axios from 'axios'
export default {
    data() {
        return {
            datacategory: []
        }
    },
    async created() {
        const BASEURI = 'https://www.themealdb.com/api/json/v1/1/categories.php'
        axios.get(BASEURI).then((result) => {
            this.datacategory = result.data.categories
        })
    },
    filters: {
        truncate: function(value, length, suffix) {
            if (value.length > length) {
                return value.substring(0, length) + suffix
            } else {
                return value
            }
        }
    }
}
</script>
<style>
.row-category {
    background-color: none;
    margin: 50px;
}
.category-title {
    font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
    display: block;
    font-weight: 400;
    font-size: 50px;
    color: #35495e;
    letter-spacing: 1px;
}
.category-text {
    text-align: center;
}
</style>