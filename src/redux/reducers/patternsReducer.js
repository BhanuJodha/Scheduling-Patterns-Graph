const reducer = (state = {data: [], processedData: []}, action) => {
    switch (action.type){
        case "SET_DATA":
            return {...state, data: action.payload};
        case "SET_PROCESSED_DATA":
            return {...state, processedData: action.payload};
        default:
            return state;
    }
}

export default reducer;