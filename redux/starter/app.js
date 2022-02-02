
import store from './store'
import { addRecipe } from './actions/recipes';
import { addIngredient } from './actions/ingredients';
import loadUI from './ui'

loadUI();

store.dispatch(addRecipe('Pancakes'))
store.dispatch(addIngredient('Pancakes', 'Egg', 3))