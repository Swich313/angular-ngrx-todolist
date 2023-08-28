import {Todo} from "../../model/todo";
import {TodoActions, todoActionsType} from "./todo.actions";

export const TODO_REDUCER_NODE = 'todo';

export interface TodoState {
  idIncrement: number;
  todoList: Todo[];
}

const initialState: TodoState = {
  idIncrement: 1,
  todoList: []
};

export const todoReducer = (state = initialState, action: TodoActions) => {
  switch (action.type){
    case todoActionsType.create:
      return {
        ...state,
        idIncrement: state.idIncrement + 1,
        todoList: [
          ...state.todoList,
          {
            id: state.idIncrement,
            name: action.payload.name,
            completed: false
          }
        ]
      };
    case todoActionsType.delete:
      return {
        ...state,
        todoList: state.todoList.filter(item => item.id !== action.payload.id)
      };
    case todoActionsType.toggle:
      return  {
        ...state,
        todoList: state.todoList.map(item => item.id === action.payload.id ? {
          ...item,
          completed: !item.completed
        } : item )
      }
    case todoActionsType.edit:
      return {
        ...state,
        todoList: state.todoList.map(item => item.id === action.payload.id ? {
          ...item,
          name: action.payload.name
        } : item)
      }
    default:
      return state;
  }
};
