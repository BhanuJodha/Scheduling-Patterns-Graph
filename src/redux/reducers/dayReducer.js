const reducer = (state = {data: []}, action) => {
    switch (action.type) {
        case "SET_DAY_DATA":
            return {...state, data: action.payload};
        default:
            return state;
    }
}

export default reducer;