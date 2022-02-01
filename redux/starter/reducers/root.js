
import recipesReducer from './recipes'
import ingredientsReducer from './ingredients'

export default (state, action) => Object.assign({}, state, {
    recipes: recipesReducer(state.recipes, action),
    ingredients: ingredientsReducer(state.ingredients, action),
})