import { useState } from "react";

export  const useForm = (defualtValue)=>{
    const [value,setValue]= useState(defualtValue);

    return[
        value,event=>{
            setValue({
                ...value,
                [event.target.name]:event.target.value,
            });
        },
    ]; 
};