import React, { useEffect } from 'react'

import { useLocalStorage } from '../hooks/useLocalStorage'

const useDarkMode = () => {
   
    const [someValue, setSomeValue] = useLocalStorage('darkMode', true)
   useEffect(() => {
    if(someValue){
        document.body.classList.add('dark-mode')
    } else{
        document.body.classList.remove('dark-mode')
    }
   }, [someValue])
   return[someValue, setSomeValue]
}

export default useDarkMode