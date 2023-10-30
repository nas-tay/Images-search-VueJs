<template>
    <div class="search">
        <div class="container">
            <div class="search__wrapper">
                <div class="search__box">
                    <input v-model="searchKeyword" @keyup.enter="searchImages" type="text" class="search__input" name="search" id="search" placeholder="Поиск">
                    <button @click="searchImages" class="search__btn">
                        <img class="search__btn-icon" src="../../assets/images/search.svg" alt="search-icon">
                    </button>
                </div>
            </div>
        </div>
    </div>
    <div class="style-bottom"></div>
</template>

<script>
    export default {
        name: 'AppSearch',
        data() {
            return {
                searchKeyword: '',
            };
        },
        methods: {
            searchImages() {
                this.$emit('search', this.searchKeyword);
            },
        },
    }
</script>

<style>
    .search{
        max-width: 1920px;
        width: 100vw;
        background: url('../../assets/images/search-backgound.jpg');
        padding: 42px 0;
    }
    .search__box {
        position: relative;
        width: 500px;
        display: flex;
        justify-content: center;
        margin: 0 auto;
    }
    .search__input {
        padding: 15px 25px;
        width: 450px;
    }
    .search__btn {
        position: absolute;
        top: 5px;
        right: 12px;
        padding: 10px;
        background: transparent;
    }
    .search__btn-icon {
        width: 15px;
        height: 15px;
    }
    .style-bottom {
        width: 100%;
        height: 3vh;
        background-color: #C4C4C4;
    }
    @media screen and (max-width: 768px) {
        .search__box {
            width: 100%;
        }
        .style-bottom {
            display: none;
        }
    }

</style>