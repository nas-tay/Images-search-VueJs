<template>
    <div class="gallery">
        <div class="container">
            <div class="gallery__wrapper">
                <div class="gallery__box">
                    <div v-for="(image, index) in loadedImages" :key="index" class="gallery__image-box">
                        <router-link :to="{ name: 'image-page', params: { id: image.id } }">
                            <img :src="image.urls.regular" @click=saveImageToLocalStorage(image) class="gallery__image" :alt="image.alt_description" />
                        </router-link>
                    </div>
                    <div class="gallery__image-box" v-for="image in images" :key="image.id">
                        <router-link :to="{ name: 'image-page', params: { id: image.id } }">
                            <img :src="image.urls.regular" @click=saveImageToLocalStorage(image) class="gallery__image" alt="image" />
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import axios from "axios";
    import { unsplashApiKey } from '@/config';

    export default {
        name: "AppGallery",
        props: {
            loadedImages: Array,
        },
        data() {
            return {
            images: [], 
            };
        },
        methods: {
            saveImageToLocalStorage(image) {
                const imageData = JSON.stringify(image);
    
                localStorage.setItem('selectedImage', imageData);
            },
        },
        mounted() {
            const unsplashAccessKey = unsplashApiKey;
            const apiUrl = `https://api.unsplash.com/photos/random?count=8&client_id=${unsplashAccessKey}`;

            axios
            .get(apiUrl)
            .then((response) => {
                this.images = response.data;
            })
            .catch((error) => {
                console.error('Error fetching images:', error);
            });
        },
    }
</script>

<style>
    .gallery {
        padding: 60px 0;
    }
    .gallery__box{
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        gap: 30px;
    }
    .gallery__image-box {
        width: 30%;
        min-width: 330px;
        max-height: 330px;
        min-height: 330px;
    }
    .gallery__image {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 8px;
    }
</style>