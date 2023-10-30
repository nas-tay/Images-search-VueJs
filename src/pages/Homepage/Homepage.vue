<template>
    <AppHeader />
    <AppSearch @search="searchImages"/>
    <AppGallery :loadedImages="loadedImages"/>
  </template>

<script>
import axios from 'axios';
import { unsplashApiKey } from '@/config';
import AppHeader from '@/components/Header/Header.vue';
import AppSearch from '@/components/Search/AppSearch.vue';
import AppGallery from '@/components/Gallery/Gallery.vue';

export default {
  name: 'AppHomepage',
  components: {
    AppHeader,
    AppSearch,
    AppGallery
    },
    data() {
        return {
            searchKeyword: '',
            loadedImages: [],
        };
    },
    methods: {
        async searchImages(searchKeyword) {
            try {
                const response = await axios.get(`https://api.unsplash.com/search/photos`, {
                    params: {
                        query: searchKeyword,
                        per_page: 8,
                    },
                    headers: {
                        Authorization: `Client-ID ${unsplashApiKey}`,
                    },
                });

                this.loadedImages = response.data.results;
            } catch (error) {
                console.error('Error loading images', error);
            }
        },
    },
}
</script>

<style>
</style>