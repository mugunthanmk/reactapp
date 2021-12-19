import React, { createContext, useState } from 'react'

export const ContextNews=createContext();

export default function NewsContext(props) {
    const [state,setState]=useState({});
    return (
       <ContextNews.Provider value={[state,setState]}>
           {props.children}
       </ContextNews.Provider>
    )
}
