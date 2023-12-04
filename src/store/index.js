import { createStore } from "vuex";
import products from './products'
export default createStore({
  state: {
 categoriesList:[]
	},
  getters: {
		getCategoriesList:(state) => state.categoriesList,
		getCategoryById:(state) => { return (categoryId) => { return {...state.categoriesList.find((category)=> category.id == categoryId)} 
		}
	}
	
	},
  mutations: {
		setCategoriesList(state, currentCategory){
		 state.categoriesList = currentCategory
		}
	},
  actions: {
		setCategoriesList({commit}){
			commit('setCategoriesList', products)
		}
	},
  modules: {},
});
