<template>
    <div class="container">
        <div v-for="product in getCategoryById(categoryId).products" :key="product.id" class="card">
            <div class="card__image">
                <img :src="product.image" alt="product" />
            </div>
            <div class="card__body">
                <div class="card__title">{{ product.title }}</div>
                <div class="card__price">{{ product.price }}</div>
            </div>
        </div>
    </div>
    <router-link to="/" class="card__button button">На головну</router-link> |
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'ProductPage',
    // data() {
    //     return {
    //         currentCategory: {},
    //     }
    // },
    computed: {
        ...mapGetters(['getCategoryById']),
        categoryId() {
            return this.$route.params.categoryId
        },
    },
  
}
</script>

<style lang="scss" scoped>
.container {
    padding: 50px;
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2, 1fr);
}
.card {
    padding: 15px;
    border-radius: 10px;
    width: 400px;
    display: flex;
    gap: 20px;
    background-color: rgb(236, 235, 235);
    &__image {
        flex: 0 1 30%;
    }
    &__image img {
        display: inline-block;
        max-width: 100%;
    }
    &__title {
        margin-bottom: 20px;
    }
    &__price {
    }
    &__button {
        text-align: center;
        display: inline-block;
        text-decoration: none;
        margin-left: 50px;
        padding-top: 10px;
        border: 2px solid blue;
        width: 150px;
        height: 30px;
        border-radius: 5px;
    }
}
</style>
