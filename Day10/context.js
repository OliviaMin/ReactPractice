import React from 'react'

const TodosContext=React.createContext({
    todos: [
        {id: 1,text:"Eat breakfast", completed:false},
        {id: 2,text:"Do Laundry", completed:false},
        {id: 3,text:"Finish project", completed:true},
    ],
    currentTodo:{}
});

export default TodosContext