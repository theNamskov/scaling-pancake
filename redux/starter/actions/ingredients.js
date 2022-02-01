
export const ADD_INGREDIENT = 'ADD_INGREDIENT'

export const addIngredient = (recipe, name, quantity) => {
	return ({ type: ADD_INGREDIENT, payload: { recipe, name, quantity } })	
}