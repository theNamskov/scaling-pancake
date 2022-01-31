let initialState = {
    counter: 3
}

const INC = 'INC',
      DEC = 'DEC'

const reducer = (currState, { type, payload }) => {
    switch(type) {
        case INC:
            return ({ ...currState, counter: currState.counter + Number.parseInt(payload.step) })
        case DEC:
            return ({ ...currState, counter: currState.counter - Number.parseInt(payload.step) })
        default:
            return currState
    }
 }

 const store = Redux.createStore(reducer, initialState)

 const updateView = () => document.querySelector('#counter').innerText = store.getState().counter

 store.subscribe(updateView)
 
 updateView()

 const createAction = (type, step) => ({ type, payload: {step} })

 const stepRef = document.querySelector('#step')
 document.querySelector('#inc').addEventListener('click', (e) => store.dispatch(createAction(INC, stepRef.value)))
 document.querySelector('#dec').addEventListener('click', (e) => store.dispatch(createAction(DEC, stepRef.value)))