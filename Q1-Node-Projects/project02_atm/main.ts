#!/usr/bin/env node

import inquirer from 'inquirer';

class User {
  constructor(public id: string, public pin: string, public balance: number) {}
}

class ATM {
  private users: User[] = [];

  constructor() {
    // Generate some random user data for demonstration
    for (let i = 1; i <= 5; i++) {
      const userId = `User${i}`;
      const pin = `${i}${i}${i}${i}`;
      const balance = Math.floor(Math.random() * 10000) + 1000;
      const user = new User(userId, pin, balance);
      this.users.push(user);
    }

    console.log(this.users);
  }

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

  private getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  private async authenticateUser(): Promise<User | undefined> {
    const userId = await this.getUserInput('Enter your user id: ');
    const user = this.getUserById(userId);

    if (!user) {
      console.log('Invalid user id. Exiting.');
      return undefined;
    }

    const pin = await this.getUserInput('Enter your pin: ');

    if (!this.validatePin(user, pin)) {
      console.log('Invalid pin. Exiting.');
      return undefined;
    }

    console.log(`Welcome, ${user.id}!\n`);
    return user;
  }

  private validatePin(user: User, pin: string): boolean {
    return user.pin === pin;
  }

  private async getWithdrawalAmount(): Promise<number> {
    const amountStr = await this.getUserInput('Enter the withdrawal amount: ');
    const amount = parseFloat(amountStr);

    if (isNaN(amount) || amount <= 0) {
      console.log('Invalid amount. Please enter a valid positive number.');
      return await this.getWithdrawalAmount();
    }

    return amount;
  }

  private async displayMenu(): Promise<string> {
    const { option } = await inquirer.prompt([
      {
        type: 'list',
        name: 'option',
        message: 'Choose an option:',
        choices: ['Check Balance', 'Withdraw Money', 'Exit'],
      },
    ]);

    return option;
  }

  private processOption(user: User, option: string): void {
    switch (option) {
      case 'Check Balance':
        console.log(`Your balance is $${user.balance}`);
        break;
      case 'Withdraw Money':
        this.withdrawMoney(user);
        break;
      case 'Exit':
        console.log('Exiting. Goodbye!');
        process.exit(0);
        break;
      default:
        console.log('Invalid option. Please try again.');
        break;
    }
  }

  private async withdrawMoney(user: User): Promise<void> {
    const withdrawalAmount = await this.getWithdrawalAmount();

    if (withdrawalAmount > user.balance) {
      console.log('Insufficient funds!');
    } else {
      user.balance -= withdrawalAmount;
      console.log(`Withdrawn $${withdrawalAmount}. Remaining balance: $${user.balance}`);
    }
  }

  public async start(): Promise<void> {
    console.log('Welcome to the ATM!');

    const user = await this.authenticateUser();

    if (!user) {
      return;
    }

    while (true) {
      const option = await this.displayMenu();
      this.processOption(user, option);
    }
  }
}

const atm = new ATM();
atm.start();
