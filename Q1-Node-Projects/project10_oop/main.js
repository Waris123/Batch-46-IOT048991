#!/usr/bin/env node
import inquirer from 'inquirer';
// Base Shape class
class Shape {
    constructor(color) {
        this.color = color;
    }
    displayInfo() {
        console.log(`Shape - Color: ${this.color}`);
    }
    // A method to be overridden by derived classes
    calculateArea() {
        return 0;
    }
}
// Derived Circle class
class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Circle - Radius: ${this.radius}`);
    }
    calculateArea() {
        return Math.PI * this.radius ** 2;
    }
}
// Derived Rectangle class
class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    displayInfo() {
        super.displayInfo();
        console.log(`Rectangle - Width: ${this.width}, Height: ${this.height}`);
    }
    calculateArea() {
        return this.width * this.height;
    }
}
// Main application class
class OOPIntroductionApp {
    async createShape() {
        const shapeType = await inquirer.prompt({
            type: 'list',
            name: 'type',
            message: 'Select a shape:',
            choices: ['Circle', 'Rectangle'],
        });
        const color = await inquirer.prompt({
            type: 'input',
            name: 'color',
            message: 'Enter the color of the shape:',
        });
        switch (shapeType.type) {
            case 'Circle':
                const radius = await inquirer.prompt({
                    type: 'number',
                    name: 'radius',
                    message: 'Enter the radius of the circle:',
                });
                return new Circle(color.color, radius.radius);
            case 'Rectangle':
                const width = await inquirer.prompt({
                    type: 'number',
                    name: 'width',
                    message: 'Enter the width of the rectangle:',
                });
                const height = await inquirer.prompt({
                    type: 'number',
                    name: 'height',
                    message: 'Enter the height of the rectangle:',
                });
                return new Rectangle(color.color, width.width, height.height);
            default:
                throw new Error('Invalid shape type');
        }
    }
    async start() {
        console.log('Welcome to the OOP Introduction App!\n');
        const shape = await this.createShape();
        console.log('\nShape Information:');
        shape.displayInfo();
        console.log(`Area: ${shape.calculateArea()}\n`);
    }
}
const oopApp = new OOPIntroductionApp();
oopApp.start();
