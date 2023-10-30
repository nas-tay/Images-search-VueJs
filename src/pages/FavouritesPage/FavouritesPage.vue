<template>
    <PageHeader/>
    <div class="style-bottom"></div>
    <div class="favourites">
        <div class="container">
            <div class="favourites__wrapper">
                <h1 class="favourites__title">Избранное</h1>
                <div class="gallery__box">
                    <div class="gallery__image-box" v-for="image in likedImages" :key="image.id">
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
    import PageHeader from '../../components/PageHeader/PageHeader.vue';

    export default {
        name: "FavouritesPage",
        components: {
            PageHeader,
        },
        data() {
            return {
            likedImages: [],
            };
        },
        methods: {
            saveImageToLocalStorage(image) {
                const imageData = JSON.stringify(image);
    
                localStorage.setItem('selectedImage', imageData);
            },
        },
        created() {
            const storedLikedImages = localStorage.getItem('likedImages');
            if (storedLikedImages) {
            this.likedImages = JSON.parse(storedLikedImages);
            console.log(this.likedImages);
            }
        },
    }
</script>

<style>
    .favourites {
        padding: 50px 0;
    }
    .favourites__title {
        color: #000;
        font-size: 60px;
        font-weight: 700;
        margin-bottom: 40px;
    }
    .style-bottom {
        width: 100%;
        height: 3vh;
        background-color: #C4C4C4;
    }
    @media screen and (max-width: 768px) {
        .favourites__title {
            font-size: 36px;
        }
    }
</style>