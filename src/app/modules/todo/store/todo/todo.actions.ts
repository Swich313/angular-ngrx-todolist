import {Action} from "@ngrx/store";
import {TodoState} from "./todo.reducer";

export enum todoActionsType {
  create = '[TODO] create todo item',
  delete = '[TODO] delete todo item',
  toggle = '[TODO] toggle completion todo item',
  edit = '[TODO] todo item edited',
  load = '[TODO] todolist loaded from localStorage'
}

export class TodoCreateAction implements Action {
  readonly type = todoActionsType.create;

  constructor(public payload: {name: string}) {
  }
}

export class TodoDeleteAction implements Action {
  readonly type = todoActionsType.delete;

  constructor(public payload: {id: number}) {
  }
}

export class TodoToggleAction implements Action {
  readonly type = todoActionsType.toggle;

  constructor(public payload: {id: number}) {
  }
}

export class TodoEditAction implements Action {
  readonly type = todoActionsType.edit;

  constructor(public payload: {id: number, name: string}) {
  }
}

export class TodoLoadAction implements Action {
  readonly type = todoActionsType.load;

  constructor(public payload: {state: TodoState}) {
  }
}

export type TodoActions = TodoCreateAction | TodoDeleteAction | TodoToggleAction | TodoEditAction | TodoLoadAction;
