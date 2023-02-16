export const setData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_DATA",
            payload: data
        })
    }
}

export const setProcessedData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_PROCESSED_DATA",
            payload: data
        })
    }
}

export const setScheduleData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SCHEDULE_DATA",
            payload: data
        })
    }
}

export const setScheduleProcessedData = (data) => {
    return (dispatch) => {
        dispatch({
            type: "SET_SCHEDULE_PROCESSED_DATA",
            payload: data
        })
    }
}