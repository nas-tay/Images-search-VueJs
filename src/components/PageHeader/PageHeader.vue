<template>
    <header class="page-header">
        <div class="container">
            <div class="page-header__wrapper header__wrapper">
                <div class="page-header__logo-link">
                    <router-link :to="{ name: 'homepage' }">
                        <img src="../../assets/images/logo.png" alt="logo" class="page-header__logo">
                    </router-link>
                </div>
                <nav class="page-header__navbar">
                    <router-link :to="{ name: 'homepage' }">
                        <div class="page-header__search">
                            <a href="#" class="page-header__search-link">Поиск</a>
                        </div>
                    </router-link>
                    <router-link :to="{ name: 'favourites-page' }">
                        <div class="page-header__favourites">
                            <a href="#" class="header__favourites-link">Избранное</a>
                        </div>
                    </router-link>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>

export default {
  name: "PageHeader",
}
</script>

<style scoped>
    .page-header{
        background-color: #000000;
        padding: 10px 0;
        color: #ffffff;
    }
    .header__wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .page-header__logo-link {
        display: flex;
        align-items: center;
    }
    .page-header__logo {
        width: 112px;
        height: 44px;
    }
    .page-header__navbar {
        display: flex;
        align-items: center;
    }
    .page-header__search {
        position: relative;
        display: flex;
        align-items: center;
        padding: 15px 0 15px 37px;
        cursor: pointer;
        margin-right: 30px;
    }
    .page-header__search::before {
        content: url('../../assets/images/search-white.svg');
        font-size: 24px;
        position: absolute;
        left: 0;
        top: 55%;
        transform: translateY(-50%);
        margin-right: 10px;
    }
    .page-header__favourites{
        position: relative;
        display: flex;
        align-items: center;
        padding: 15px 0 15px 37px;
        cursor: pointer;
    }
    .page-header__favourites::before{
        content: url('../../assets/images/heart.svg');
        font-size: 24px;
        position: absolute;
        left: 0;
        top: 65%;
        transform: translateY(-50%);
        margin-right: 10px;
    }
    @media screen and (max-width: 768px) {
        .page-header {
            padding: 15px 0 10px 0;
        }
        .page-header__logo {
            width: 84px;
            height: 32px;
        }
        .page-header__search-link {
            display: none;
        }
        .page-header__search {
            margin-right: 0;
        }
        .page-header__search::before {
            font-size: 24px;
            position: absolute;
            left: 0;
            top: 55%;
            transform: translateY(-50%);
            margin-right: 0;
        }
        .header__favourites-link {
            display: none;
        }
        .page-header__favourites::before {
            font-size: 24px;
            position: absolute;
            left: 0;
            top: 70%;
            transform: translateY(-50%);
            margin-right: 0;
        }
    }
</style>
