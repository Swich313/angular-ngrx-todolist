import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../model/todo";

@Component({
  selector: 'app-todo-list-item-edit-ui',
  templateUrl: './todo-list-item-edit-ui.component.html',
  styleUrls: ['./todo-list-item-edit-ui.component.scss']
})
export class TodoListItemEditUiComponent implements OnInit{
  name = '';

  @Input()
  todo: Todo;

  @Output()
  edit = new EventEmitter<string>()

  onEdit(){
    if(this.name){
      this.edit.emit(this.name)
    }
  }

  onCancel(){
    this.name = this.todo.name;
  }

  ngOnInit(): void {
    this.name = this.todo.name
  }
}
