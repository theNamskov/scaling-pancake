export const addRecipe = (name) => {
	return ({ type: ADD_RECIPE, payload: { name } })
}