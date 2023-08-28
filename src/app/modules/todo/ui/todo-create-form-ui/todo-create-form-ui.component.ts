import {Component, EventEmitter, OnInit, Output, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-todo-create-form-ui',
  templateUrl: './todo-create-form-ui.component.html',
  styleUrls: ['./todo-create-form-ui.component.scss']
})
export class TodoCreateFormUiComponent implements OnInit {
  name: string = '';

  @Output()
  create = new EventEmitter<string>();

  onSubmit() {
    if(this.name){
      this.create.emit(this.name);
      this.name = '';
    }

  }

  ngOnInit(): void {
  }
}
