import $ from 'jquery'

import store from './store'
import { addRecipe } from './actions/recipes'

const updateUI = () => {

    const { recipes } = store.getState()
    const displayRecipe = ( {name} ) => `<li>${name}</li>`

    $('.recipes > ul').html(recipes.map(displayRecipe))
}

const handleAdd = () => {
    const $recipeNameRef = $('.recipes > input')

    store.dispatch(addRecipe($recipeNameRef.val()))
}

export default () => {
    $('#app').append(`
        <div class="recipes">
            <div>Recipes:</div>
            <ul></ul>
            <input type="text" />
            <button>Add Recipe</button>
        </div>
    `)

    store.subscribe(updateUI)

    $(document).on('click', '.recipes > button', handleAdd)

    updateUI()
}