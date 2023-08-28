import {Component, OnInit} from '@angular/core';
import {select, Store} from "@ngrx/store";
import {TodoState} from "../../store/todo/todo.reducer";
import {
  TodoCreateAction,
  TodoDeleteAction,
  TodoEditAction,
  TodoLoadAction,
  TodoToggleAction
} from "../../store/todo/todo.actions";
import {Todo} from "../../model/todo";
import {todoListSelector} from "../../store/todo/todo.selectors";
import {Observable} from "rxjs";
import {TODO_LOCALSTORAGE_KEY, TodoSyncStorageService} from "../../services/todo-sync-storage.service";

@Component({
  selector: 'app-todo-widget',
  templateUrl: './todo-widget.component.html',
  styleUrls: ['./todo-widget.component.scss']
})
export class TodoWidgetComponent implements OnInit{

  todoList$: Observable<Todo[]> = this.store$.pipe(select(todoListSelector))

  constructor(private store$: Store<TodoState>, private todoSyncStorage: TodoSyncStorageService) {
  }

  onCreate(name: string){
    this.store$.dispatch(new TodoCreateAction({name}));
  }

  onDelete(id: number){
    this.store$.dispatch(new TodoDeleteAction({id}));
  }

  onToggle(id: number){
    this.store$.dispatch(new TodoToggleAction({id}));
  }

  onEdit({id, name}: {id: number, name: string}){
    this.store$.dispatch(new TodoEditAction({id, name}))
  }

  ngOnInit(): void {
    this.todoSyncStorage.init();
  }
}
