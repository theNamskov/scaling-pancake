import $ from 'jquery'

import store from './store'

const updateUI = () => {

    const { recipes } = store.getState()
    const displayRecipe = ( {name} ) => `<li>${name}</li>`

    $('.recipes > ul').html(recipes.map(displayRecipe))
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

    updateUI()
}