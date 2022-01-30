let state = {
    counter: 0
}

const INC = 'INC',
      DEC = 'DEC'

const listeners = []

const updateView = ({counter}) => document.querySelector('#counter').innerText = counter

const subscribe = (cb) => listeners.push(cb)

const reducer = (currState, {type, payload }) => {
    switch(type) {
        case INC:
            return ({ ...currState, counter: currState.counter + Number.parseInt(payload.step) })
        case DEC:
            return ({ ...currState, counter: currState.counter - Number.parseInt(payload.step) })
        default:
            return currState
    }
 }
 
const dispatch = (action) => { 
    const newState = reducer(state, action)

    if(state !== newState) {
        state = newState
    }

    listeners.forEach(subscriber => subscriber(state))
 }

 const createAction = (type, step) => ({ type, payload: {step} })

 subscribe(updateView)

const stepRef = document.querySelector('#step')
document.querySelector('#inc').addEventListener('click', (e) => dispatch(createAction(INC, stepRef.value)))
document.querySelector('#dec').addEventListener('click', (e) => dispatch(createAction(DEC, stepRef.value)))