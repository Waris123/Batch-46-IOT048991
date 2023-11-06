#!/usr/bin/env node
import inquirer from 'inquirer';

interface Todo {
  id: number;
  task: string;
  completed: boolean;
}

class TodoApp {
  private todos: Todo[] = [];
  private currentId: number = 1;

  private async displayMenu(): Promise<string> {
    const { option } = await inquirer.prompt([
      {
        type: 'list',
        name: 'option',
        message: 'Choose an option:',
        choices: ['Add Todo', 'View Todos', 'Mark Todo as Completed', 'Exit'],
      },
    ]);

    return option;
  }

  private async addTodo(): Promise<void> {
    const { task } = await inquirer.prompt([
      {
        type: 'input',
        name: 'task',
        message: 'Enter the task:',
      },
    ]);

    const newTodo: Todo = {
      id: this.currentId++,
      task,
      completed: false,
    };

    this.todos.push(newTodo);
    console.log('Todo added successfully!\n');
  }

  private viewTodos(): void {
    if (this.todos.length === 0) {
      console.log('No todos available.\n');
    } else {
      console.log('Todos:\n');
      this.todos.forEach(todo => {
        const status = todo.completed ? 'Completed' : 'Pending';
        console.log(`${todo.id}. [${status}] ${todo.task}`);
      });
      console.log('\n');
    }
  }

  private async markTodoAsCompleted(): Promise<void> {
    const { todoId } = await inquirer.prompt([
      {
        type: 'input',
        name: 'todoId',
        message: 'Enter the ID of the todo to mark as completed:',
      },
    ]);

    const id = parseInt(todoId);

    const todo = this.todos.find(t => t.id === id);

    if (todo) {
      todo.completed = true;
      console.log(`Todo ${id} marked as completed.\n`);
    } else {
      console.log(`Todo with ID ${id} not found.\n`);
    }
  }

  public async start(): Promise<void> {
    console.log('Welcome to the Todo App!\n');

    while (true) {
      const option = await this.displayMenu();

      switch (option) {
        case 'Add Todo':
          await this.addTodo();
          break;
        case 'View Todos':
          this.viewTodos();
          break;
        case 'Mark Todo as Completed':
          await this.markTodoAsCompleted();
          break;
        case 'Exit':
          console.log('Exiting Todo App. Goodbye!');
          process.exit(0);
          break;
        default:
          console.log('Invalid option. Please try again.\n');
          break;
      }
    }
  }
}

const todoApp = new TodoApp();
todoApp.start();
