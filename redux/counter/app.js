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
            return ({ ...currState, counter: currState.counter + payload.step })
        case DEC:
            return ({ ...currState, counter: currState.counter - payload.step })
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

 const createActionObj = (type, ...payload) => ({ type, payload })

 subscribe(updateView)

const stepRef = document.querySelector('#step')
document.querySelector('#inc').addEventListener('click', (e) => dispatch({ type: INC }))
document.querySelector('#dec').addEventListener('click', (e) => dispatch({ type: DEC }))