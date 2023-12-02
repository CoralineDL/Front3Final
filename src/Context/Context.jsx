import axios from "axios";
import { createContext, useContext, useReducer, useEffect } from "react";
import { reducer } from "../reducers/reducer";
import React from 'react'


const CharStates = createContext()

const initialState = {
    list: [],
    favs: JSON.parse(localStorage.getItem('favs')) || [],
    // theme
}

const Context = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState)
    const { list, favs } = state
    console.log(state)
    const url = 'https://rickandmortyapi.com/api/character/'
    useEffect(() => {
        axios(url)
            .then(res => dispatch({ type: 'GET_CHARACTERS', payload: res.data.results }))
    }, [])

    useEffect(() => {
        localStorage.setItem('favs', JSON.stringify(state.favs))
    }, [state.favs])

    return (
        <CharStates.Provider value={{ list, favs, dispatch }}>
            {children}
        </CharStates.Provider>
    )
}


export default Context

export const useCharStates = () => useContext(CharStates)