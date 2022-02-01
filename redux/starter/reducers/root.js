import { ADD_RECIPE } from "../actions/recipes"
import { ADD_INGREDIENT } from "../actions/ingredients"

export default (state, action) => {
	switch(action.type) {
		case ADD_RECIPE:
			return Object.assign({}, state, { 
                recipes: state.recipes.concat(action.payload) 
            })

		case ADD_INGREDIENT:
			return Object.assign({}, state, { 
                ingredients: state.ingredients.concat(action.payload) 
            })
	}

	return state
}