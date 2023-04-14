import React, { useState } from "react";

export default function(props){
     const [errors, setErrors] = useState(null);
     const [input, setInput] = useState({});
     const [validation, setValidation]   = useState(false);
     const [inputRegist, setInputRegist] = useState({});

     return{
          handleChanges: async (event) => {
               setInput((values) =>{
                    return {...values, [event.target.id] : event.target.value}
               })
               setInputRegist((values) => {
                    return {...values, [event.target.id]: false}
               })
          },
          register: (names, options) => {
               React.useEffect(() =>{
                    if(input !== null){
                         if(input?.[names]?.length > options?.maxLength && options?.maxLength){
                              setErrors((errors) => {
                                   return {...errors, [names] :'maxLength'}
                              })
                         }else if(input?.[names]?.length < options?.minLength && input?.[names]?.length >= 1 && options?.minLength){
                              setErrors((errors) => {
                                   return {...errors, [names] :'minLength'}
                              })
                         }else if(!(options?.pattern?.test(input?.[names])) && input?.[names]?.length >= 1 && options?.pattern){
                              setErrors((errors) => {
                                   return {...errors, [names] :'pattern'}
                              })
                         }else if(input?.[names]?.length < 1){
                              if(options?.required){
                                   setErrors((errors) => {
                                        return {...errors, [names] :'required'}
                                   })
                              }
                         }
                         else{
                              if(input?.[names]){
                                   if(input?.[names]?.length > 1){
                                        setInputRegist((values) => {
                                             return {...values, [names]: true}
                                        })
                                   }
                              }
                              delete errors?.[names];
                         }
                    }
               }, [input, setInput])  
          },
          handleSubmit: async (event , callback) => {
              event.preventDefault();
              return callback(input);
          },
          registerAction:inputRegist,
          error: errors,
          action: validation
     }
}