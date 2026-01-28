import { useState } from "react"

export default function useLocalStorage(storageName, initialValue){
  const [state, setState]=useState(
    JSON.parse(localStorage.getItem(storageName))?? initialValue)

  const updateSecondValue=(newValue)=>{
      if(typeof newValue=='function'){
        const FunValue=newValue(state);
          localStorage.setItem(storageName, JSON.stringify(FunValue));
          setState(FunValue);
        }
      localStorage.setItem(storageName, JSON.stringify(newValue));
      setState(newValue)
  }
  return [state, updateSecondValue]
}