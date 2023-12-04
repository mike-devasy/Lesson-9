<template>
	<div v-for="category in getCategoriesList" :key="category.id" style="cursor: pointer;" @click="onSelectedCategory(category.id)" >
{{ category.title }}
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
	export default {
		name:'ShopList',
		computed:{
			...mapGetters(['getCategoriesList'])
		},
		created(){
			this.setCategoriesList()
		},
		methods: {
			...mapActions(['setCategoriesList']),
			onSelectedCategory(id) {
				this.$router.push({
					name:'category',
					params:{
						categoryId:id
					}
				})
			}
		},
	
	}
</script>

<style lang="scss" scoped>

</style>