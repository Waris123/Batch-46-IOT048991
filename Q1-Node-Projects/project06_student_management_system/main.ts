#!/usr/bin/env node
import inquirer from 'inquirer';

class Student {
  static uniqueIdCounter: number = 10000;

  constructor(
    public name: string,
    public courses: string[] = [],
    public balance: number = 0,
    public studentId: number = Student.generateUniqueId()
  ) {}

  private static generateUniqueId(): number {
    return ++Student.uniqueIdCounter;
  }

  public enroll(course: string): void {
    this.courses.push(course);
    console.log(`${this.name} enrolled in ${course}`);
  }

  public viewBalance(): void {
    console.log(`${this.name}'s balance: $${this.balance}`);
  }

  public payTuition(amount: number): void {
    if (amount <= 0) {
      console.log('Invalid amount. Please enter a positive number.');
      return;
    }

    this.balance -= amount;
    console.log(`${this.name} paid $${amount}. Remaining balance: $${this.balance}`);
  }

  public showStatus(): void {
    console.log(`Student Name: ${this.name}`);
    console.log(`Student ID: ${this.studentId}`);
    console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
    console.log(`Balance: $${this.balance}`);
  }
}

class StudentManagementSystem {
  private students: Student[] = [];

  private async getUserInput(message: string): Promise<string> {
    const { userInput } = await inquirer.prompt([
      {
        type: 'input',
        name: 'userInput',
        message,
      },
    ]);

    return userInput;
  }

  private async getNumericInput(message: string): Promise<number> {
    const { numericInput } = await inquirer.prompt([
      {
        type: 'number',
        name: 'numericInput',
        message,
      },
    ]);

    return numericInput;
  }

  private findStudentById(studentId: number): Student | undefined {
    return this.students.find(student => student.studentId === studentId);
  }

  private async addNewStudent(): Promise<void> {
    const name = await this.getUserInput('Enter the student name:');
    const newStudent = new Student(name);
    this.students.push(newStudent);
    console.log(`${name} added to the system with ID: ${newStudent.studentId}\n`);
  }

  private async enrollStudentInCourse(): Promise<void> {
    const studentId = await this.getNumericInput('Enter the student ID:');
    const course = await this.getUserInput('Enter the course to enroll in:');

    const student = this.findStudentById(studentId);

    if (student) {
      student.enroll(course);
    } else {
      console.log(`Student with ID ${studentId} not found.\n`);
    }
  }

  private async viewStudentBalance(): Promise<void> {
    const studentId = await this.getNumericInput('Enter the student ID:');

    const student = this.findStudentById(studentId);

    if (student) {
      student.viewBalance();
    } else {
      console.log(`Student with ID ${studentId} not found.\n`);
    }
  }

  private async payTuitionFees(): Promise<void> {
    const studentId = await this.getNumericInput('Enter the student ID:');
    const amount = await this.getNumericInput('Enter the amount to pay:');

    const student = this.findStudentById(studentId);

    if (student) {
      student.payTuition(amount);
    } else {
      console.log(`Student with ID ${studentId} not found.\n`);
    }
  }

  private async showStudentStatus(): Promise<void> {
    const studentId = await this.getNumericInput('Enter the student ID:');

    const student = this.findStudentById(studentId);

    if (student) {
      student.showStatus();
    } else {
      console.log(`Student with ID ${studentId} not found.\n`);
    }
  }

  public async start(): Promise<void> {
    console.log('Welcome to the Student Management System!\n');

    while (true) {
      const option = await this.getUserInput(
        'Choose an option:\n1. Add New Student\n2. Enroll Student in Course\n3. View Student Balance\n4. Pay Tuition Fees\n5. Show Student Status\n6. Exit'
      );

      switch (option) {
        case '1':
          await this.addNewStudent();
          break;
        case '2':
          await this.enrollStudentInCourse();
          break;
        case '3':
          await this.viewStudentBalance();
          break;
        case '4':
          await this.payTuitionFees();
          break;
        case '5':
          await this.showStudentStatus();
          break;
        case '6':
          console.log('Exiting Student Management System. Goodbye!');
          process.exit(0);
        default:
          console.log('Invalid option. Please try again.\n');
          break;
      }
    }
  }
}

const studentSystem = new StudentManagementSystem();
studentSystem.start();
