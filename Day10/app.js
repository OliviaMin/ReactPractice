import React,{useContext,useReducer} from 'react'
import ReactDOM from 'react-dom'
import './styles/style.scss';
import TodosContext from './playground/context';
import TodosReducer from './playground/reducer'
import TodoList from './playground/TodoList'
import TodoForm from './playground/TodoForm'

const AxiosEg=()=>{
    const initialState = useContext(TodosContext)
    const [state, dispatch] = useReducer(TodosReducer,initialState)

    return (
        <TodosContext.Provider value={{state,dispatch}}>
        <TodoForm/>
        <TodoList/>
        </TodosContext.Provider>
    )

}
ReactDOM.render(<AxiosEg/>, document.getElementById('app'));
