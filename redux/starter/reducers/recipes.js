import { ADD_RECIPE } from "../actions/recipes"

const initState = [
    {
        name: 'Omelette',
    },
]

export default (recipes = initState, action) => {
    switch(action.type) {
		case ADD_RECIPE:
			return recipes.concat(action.payload)
    }

    return recipes
}