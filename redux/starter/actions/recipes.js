
const ADD_RECIPE = 'ADD_RECIPE'

export const addRecipe = (name) => {
	return ({ type: ADD_RECIPE, payload: { name } })
}