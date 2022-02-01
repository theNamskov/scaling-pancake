
export const ADD_INGREDIENT = 'ADD_INGREDIENT'

export const addIngredient = (name, recipe, quantity) => {
	return ({ type: ADD_INGREDIENT, payload: { name, recipe, quantity } })	
}