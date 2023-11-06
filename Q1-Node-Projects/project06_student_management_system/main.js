#!/usr/bin/env node
import inquirer from 'inquirer';
class Student {
    constructor(name, courses = [], balance = 0, studentId = Student.generateUniqueId()) {
        this.name = name;
        this.courses = courses;
        this.balance = balance;
        this.studentId = studentId;
    }
    static generateUniqueId() {
        return ++Student.uniqueIdCounter;
    }
    enroll(course) {
        this.courses.push(course);
        console.log(`${this.name} enrolled in ${course}`);
    }
    viewBalance() {
        console.log(`${this.name}'s balance: $${this.balance}`);
    }
    payTuition(amount) {
        if (amount <= 0) {
            console.log('Invalid amount. Please enter a positive number.');
            return;
        }
        this.balance -= amount;
        console.log(`${this.name} paid $${amount}. Remaining balance: $${this.balance}`);
    }
    showStatus() {
        console.log(`Student Name: ${this.name}`);
        console.log(`Student ID: ${this.studentId}`);
        console.log(`Courses Enrolled: ${this.courses.join(', ')}`);
        console.log(`Balance: $${this.balance}`);
    }
}
Student.uniqueIdCounter = 10000;
class StudentManagementSystem {
    constructor() {
        this.students = [];
    }
    async getUserInput(message) {
        const { userInput } = await inquirer.prompt([
            {
                type: 'input',
                name: 'userInput',
                message,
            },
        ]);
        return userInput;
    }
    async getNumericInput(message) {
        const { numericInput } = await inquirer.prompt([
            {
                type: 'number',
                name: 'numericInput',
                message,
            },
        ]);
        return numericInput;
    }
    findStudentById(studentId) {
        return this.students.find(student => student.studentId === studentId);
    }
    async addNewStudent() {
        const name = await this.getUserInput('Enter the student name:');
        const newStudent = new Student(name);
        this.students.push(newStudent);
        console.log(`${name} added to the system with ID: ${newStudent.studentId}\n`);
    }
    async enrollStudentInCourse() {
        const studentId = await this.getNumericInput('Enter the student ID:');
        const course = await this.getUserInput('Enter the course to enroll in:');
        const student = this.findStudentById(studentId);
        if (student) {
            student.enroll(course);
        }
        else {
            console.log(`Student with ID ${studentId} not found.\n`);
        }
    }
    async viewStudentBalance() {
        const studentId = await this.getNumericInput('Enter the student ID:');
        const student = this.findStudentById(studentId);
        if (student) {
            student.viewBalance();
        }
        else {
            console.log(`Student with ID ${studentId} not found.\n`);
        }
    }
    async payTuitionFees() {
        const studentId = await this.getNumericInput('Enter the student ID:');
        const amount = await this.getNumericInput('Enter the amount to pay:');
        const student = this.findStudentById(studentId);
        if (student) {
            student.payTuition(amount);
        }
        else {
            console.log(`Student with ID ${studentId} not found.\n`);
        }
    }
    async showStudentStatus() {
        const studentId = await this.getNumericInput('Enter the student ID:');
        const student = this.findStudentById(studentId);
        if (student) {
            student.showStatus();
        }
        else {
            console.log(`Student with ID ${studentId} not found.\n`);
        }
    }
    async start() {
        console.log('Welcome to the Student Management System!\n');
        while (true) {
            const option = await this.getUserInput('Choose an option:\n1. Add New Student\n2. Enroll Student in Course\n3. View Student Balance\n4. Pay Tuition Fees\n5. Show Student Status\n6. Exit');
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
