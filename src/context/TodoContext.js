import { createContext, useContext } from "react";
export const toDoContext = createContext({

    todos: [
        {
            id:1,
            message:"learning react",
            completed:false,
            
            
        }
    ],
    addToDo: (message)=>{},
    updatedtoDo : (id,message)=>{},
    deleteTodo : (id)=>{},
    iscompleted : (id)=>{}
});
// usetodo is a custom hook that allows to consume the context 
export const useTodo = ()=>{
    return useContext(toDoContext); // use context ke andar ek context ko provide karte he
}
// todoprovider provides the context 
export const TodoProvider = toDoContext.Provider;
