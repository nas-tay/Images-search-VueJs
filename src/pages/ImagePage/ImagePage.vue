<template>
    <PageHeader />
    <div class="image-info" :style="imageInfoStyle">
        <div class="image-info__blur">
            <div class="container">
                <div class="image-info__wrapper">
                    <div class="image-page__header">
                        <div class="image-page__header-author author">
                            <img v-if="image" :src="image.user.profile_image.small" class="author__image"/>
                            <div class="author__info">
                                <p class="author__text author__name" v-if="image">{{ image.user.name }}</p>
                                <p class="author__text author__username" v-if="image">@{{ image.user.instagram_username }}</p>
                            </div>
                        </div>
                        <div class="image-page__header-actions actions">
                            <button class="actions__like" @click="toggleLike">
                                <img class="actions__like-icon" :src="liked ? require('@/assets/images/heart-red.svg') : require('@/assets/images/heart-black.svg')" alt="like">
                            </button>
                            <button class="actions__download">
                                <a v-if="image" :href="image.urls.full" :download="image.jpg">
                                    <img class="actions__download-icon" src="../../assets/images/download.svg" alt="download">
                                </a>
                                Download
                            </button>
                        </div>
                    </div>
                    <div class="image-page__main">
                        <img v-if="image" :src="image.urls.regular" class="image-page__main-image" alt="image" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import PageHeader from "../../components/PageHeader/PageHeader.vue"
    
    export default {
        name: "ImagePage",
        components: {
            PageHeader,
        },
        data() {
            return {
                image: null,
                liked: false,
                likedImages: [],
            }
        },
        created() {
            let imageJSON = "";

            const likedImagesJSON = localStorage.getItem('likedImages');
            if (likedImagesJSON) {
                console.log("from likeImage");
                const likedImages = JSON.parse(likedImagesJSON);
                const imageId = this.$route.params.id;
                const likedImage = likedImages.find((img) => img.id === imageId);

                if (likedImage) {
                this.image = likedImage;
                this.liked = true;
                }
            }

            if (!this.image) {
                console.log("not from liked images");
                imageJSON = localStorage.getItem('selectedImage');
                if (imageJSON) {
                this.image = JSON.parse(imageJSON);
                }
            }
        },
        computed: {
            imageInfoStyle() {
                if (this.image) {
                return {
                    ...(window.innerWidth >= 768 && {
                    background: `url(${this.image.urls.regular})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    }),
                };
                } else {
                return {};
                }
            },
        },
        methods: {
            toggleLike() {
                this.liked = !this.liked;

                if (this.liked) {
                    this.addLikedImage(this.image);
                } else {
                    this.removeLikedImage(this.image);
                }
            },
            isLiked(image) {
                const likedImages = this.getLikedImages();
                if (!likedImages) {
                    return false;
                }
                
                return likedImages.some(likedImage => likedImage.id === image.id);
            },
            addLikedImage(image) {
                const likedImages = this.getLikedImages();
                if (!image) {
                    return;
                }
                likedImages.push(image);
                localStorage.setItem('likedImages', JSON.stringify(likedImages));
            },
            removeLikedImage(image) {
                const likedImages = this.getLikedImages(); 
                const index = likedImages.findIndex((img) => img.id === image.id);
                if (index !== -1) {
                    likedImages.splice(index, 1);
                    localStorage.setItem('likedImages', JSON.stringify(likedImages));
                }
            },
            getLikedImages() {
                const likedImages = localStorage.getItem('likedImages');
                return likedImages ? JSON.parse(likedImages) : [];
            },
        },
    }
</script>

<style>
    .image-info {
        background-size: cover;
    }
    .image-info__blur {
        background: rgba(0, 0, 0, 0.50);
        backdrop-filter: blur(4px);
        padding: 30px 0;
        height: 60vh;
    }
    .image-page__header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 30px;
    }
    .image-page__header-author {
        display: flex;
        align-items: center;
    }
    .author__image {
        border-radius: 8px;
        width: 50px;
        height: 50px;
        border: 1px solid #FFF;
        margin-right: 10px;
    }
    .author__text {
        text-align: start;
        color: #FFF;
    }
    .author__name {
        font-size: 25px;
    }
    .author__username {
        font-size: 16px;
    }
    .image-page__header-actions .actions__like {
        width: 43px;
        height: 43px;
        border-radius: 8px;
        margin-right: 15px;
        background-color: #fff;
    }
    .image-page__header-actions {
        display: flex;
        align-items: center;
    }
    .image-page__header-actions .actions__download {
        display: flex;
        align-items: center;
        background-color: #FFF200;
        padding: 10px 20px;
        border-radius: 8px;
    }
    .actions__download-icon {
        margin-right: 15px;
    }
    .image-page__main {
        position: relative;
        height: 65vh;
        width: 100%;
    }
    .image-page__main-image {
        position: absolute;
        border-radius: 8px;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    @media screen and (max-width: 768px) {
        .image-info {
            background: none;
        }
        .image-info__blur {
            background: none;
        }
        .author__name {
            font-size: 18px;
            color: #000;
        }
        .author__username {
            font-size: 16px;
            color: #BDBDBD;
        }
        .actions__download {
            font-size: 0;
        }
        .actions__download-icon {
            margin-right: 0;
        }
        .image-page__header-actions .actions__download {
            padding: 10px;
        }
    }
</style>