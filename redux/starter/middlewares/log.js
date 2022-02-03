

export default (store) => (next) => (action) => {
    console.log(`${action.type} fired...`)

    next(action)
}