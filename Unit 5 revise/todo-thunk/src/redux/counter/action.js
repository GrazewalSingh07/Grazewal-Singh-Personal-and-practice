
export const CounterAction={
    ADD_COUNT:'ADD_COUNT',
    REDUCE_COUNT:'REDUCE_COUNT'
}

export const addCountAction=(payload)=>{
    return {
        type:CounterAction.ADD_COUNT,
        payload:payload
    }
}

export const reduceCountAction=(payload)=>{
    return{
        type:CounterAction.REDUCE_COUNT,
        payload:payload
    }
}