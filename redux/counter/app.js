let state = {
    counter: 0
}

const INC = 'INC',
      DEC = 'DEC'

const listeners = []

const updateView = ({counter}) => document.querySelector('#counter').innerText = counter

const subscribe = (cb) => listeners.push(cb)

const reducer = (currState, {type}) => {
    switch(type) {
        case INC:
            return ({ ...currState, counter: currState.counter + 1 })
        case DEC:
            return ({ ...currState, counter: currState.counter - 1 })
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

 subscribe(updateView)

document.querySelector('#inc').addEventListener('click', (e) => dispatch({ type: INC }))
document.querySelector('#dec').addEventListener('click', (e) => dispatch({ type: DEC }))