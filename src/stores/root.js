import { defineStore } from 'pinia'
import axios from 'axios'
import { INGREDIENTS_URL, COCKTAILS_BY_INGR_URL } from '../constants'

export const useRootStore = defineStore('root', {
  state: () => ({
    ingredients: [],
    ingredient: null,
    cocktails: []
  }),
  actions: {
    async getIngredients() {
      const data = await axios.get(INGREDIENTS_URL)
      this.ingredients = data?.data?.drinks
    },
    async getCocktails(ingredient) {
      const data = await axios.get(`${COCKTAILS_BY_INGR_URL}${ingredient}`)

      this.cocktails = data?.data?.drinks
      console.log('pinia', this.cocktails)
    },
    setIngredient(val) {
      console.log('im val', val)
      this.ingredient = val
      console.log('im this', this.ingredient)
    }
  }

})
