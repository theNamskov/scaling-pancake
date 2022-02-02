import $ from 'jquery'

import store from './store'

const updateUI = () => {

    const { recipes } = store.getState()
    const displayRecipe = ( {name} ) => `<li>${name}</li>`

    $('.recipes > ul').html(recipes.map(displayRecipe))
}