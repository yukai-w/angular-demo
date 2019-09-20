import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {

  todoList: string[] = ['todo1'];

  inputValue = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo(): void {
    const { inputValue, todoList } = this;
    if (inputValue) {
      todoList.push(inputValue);
      this.setInputValue('');
    }
  }

  delete(id: number): void {
    this.todoList = this.todoList.filter((item, index) => index !== id);
  }

  /**
   * set
   */
  setInputValue(value: string): void {
    this.inputValue = value;
  }

}
