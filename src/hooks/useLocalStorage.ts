"use client"
import { useState } from "react"
export default function useLocalStorage(storageName, initialValue){
  const [state, setState]=useState(()=>{
    if(typeof window ==="undefined"){
      return initialValue;
    }
    try {
      const item = localStorage.getItem(storageName);
      return item ? JSON.parse(item) : initialValue;
    } catch (err) {
      console.error(err);
      return initialValue;
    }
  }
  )

  const updateSecondValue=(newValue)=>{
    if(typeof window==="undefined") return;
    if(typeof newValue==='function'){
      const FunValue=newValue(state);
      localStorage.setItem(storageName, JSON.stringify(FunValue));
      setValue(FunValue)
    }
    else{
      localStorage.setItem(storageName, JSON.stringify(newValue));
      setState(newValue)
    }
  }
  return [state, updateSecondValue]
}
