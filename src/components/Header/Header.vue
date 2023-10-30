<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <router-link :to="{ name: 'homepage' }">
                    <img src="../../assets/images/logo.png" alt="logo" class="header__logo">
                </router-link>
                <router-link :to="{ name: 'favourites-page' }">
                    <div class="header__favourites">
                        <a href="#" class="header__favourites-link">Избранное</a>
                    </div>
                </router-link>
            </div>
        </div>
    </header>
</template>

<script>

export default {
  name: "AppHeader",
}
</script>

<style scoped>
    .header{
        background-color: #000000;
        padding: 25px 0;
        color: #ffffff;
    }
    .header__wrapper{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .header__favourites{
        position: relative;
        display: flex;
        align-items: center;
        padding: 25px 0 25px 37px;
        cursor: pointer;
    }
    .header__favourites::before{
        content: url('../../assets/images/heart.svg');
        font-size: 24px;
        position: absolute;
        left: 0;
        top: 60%;
        transform: translateY(-50%);
        margin-right: 10px;
    }
    @media (max-width: 768px) {
        .header {
            padding: 15px 0 10px 0;
        }
        .header__logo {
            width: 84px;
            height: 32px;
        }
        .header__favourites-link {
            display: none;
        }
        .header__favourites::before {
            font-size: 24px;
            position: absolute;
            left: 0;
            top: 65%;
            transform: translateY(-50%);
            margin-right: 10px;
        }
        .header__favourites{
            padding: 15px 0 15px 37px;
        }
    }
</style>
