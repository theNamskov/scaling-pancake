import { ADD_INGREDIENT } from "../actions/ingredients"

const initState = [
    {
        recipe: 'Omelette',
        name: 'Egg',
        quantity: 2,
    },
]

export default (ingredients = initState, action) => {
    switch(action.type) {
        case ADD_INGREDIENT:
            return ingredients.concat(action.payload)
    }

    return ingredients
}