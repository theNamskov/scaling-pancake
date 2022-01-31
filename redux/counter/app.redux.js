let initialState = {
    counter: 0
}

const INC = 'INC',
      DEC = 'DEC'

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

 const store = Redux.createStore(reducer, initialState)
