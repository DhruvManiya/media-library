import React, { useReducer } from 'react'
import DataContext from './DataContext'

const InitialData = {
    data:[],
}

const DataReducer = (state,action) => {
    if(action.type === 'ADD'){
        const updateData = state.data.concat(action.item)
        return {
            data:updateData
        }
    }
    return InitialData;
}

const DataProvider = (props) => {

    const [dataState,dispatchDataState] = useReducer(DataReducer,InitialData)

    const addData = item => {
        dispatchDataState({type:'ADD',item})
    }

    const dataContext = {
        data:dataState.data,
        addData,
    }
  return (
    <DataContext.Provider value={dataContext}>{props.children}</DataContext.Provider>
  )
}

export default DataProvider