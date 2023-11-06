#!/usr/bin/env node
import inquirer from 'inquirer';

class Account {
  private balance: number = 0;

  constructor(private accountHolder: string) {}

  public getBalance(): number {
    return this.balance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    } else {
      console.log('Invalid deposit amount. Please enter a positive number.');
    }
  }

  public withdraw(amount: number): void {
    if (amount > 0 && amount <= this.balance) {
      this.balance -= amount;
      console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
    } else if (amount <= 0) {
      console.log('Invalid withdrawal amount. Please enter a positive number.');
    } else {
      console.log('Insufficient funds. Unable to withdraw.');
    }
  }
}

class Bank {
  private accounts: Record<string, Account> = {};

  public createAccount(accountHolder: string): Account {
    const newAccount = new Account(accountHolder);
    this.accounts[accountHolder] = newAccount;
    console.log(`Account created for ${accountHolder}`);
    return newAccount;
  }

  public getAccount(accountHolder: string): Account | undefined {
    return this.accounts[accountHolder];
  }
}

class MyBankApp {
  private bank: Bank = new Bank();

  private async mainMenu(): Promise<void> {
    const { option } = await inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Choose an option:',
      choices: ['Create Account', 'Access Account', 'Exit'],
    });

    switch (option) {
      case 'Create Account':
        await this.createAccountMenu();
        break;
      case 'Access Account':
        await this.accessAccountMenu();
        break;
      case 'Exit':
        console.log('Exiting MyBank. Goodbye!');
        process.exit(0);
    }

    await this.mainMenu();
  }

  private async createAccountMenu(): Promise<void> {
    const { accountHolder } = await inquirer.prompt({
      type: 'input',
      name: 'accountHolder',
      message: 'Enter account holder name:',
    });

    this.bank.createAccount(accountHolder);
  }

  private async accessAccountMenu(): Promise<void> {
    const { accountHolder } = await inquirer.prompt({
      type: 'input',
      name: 'accountHolder',
      message: 'Enter account holder name:',
    });

    const account = this.bank.getAccount(accountHolder);

    if (account) {
      await this.accountMenu(account);
    } else {
      console.log('Account not found. Please create an account first.');
    }
  }

  private async accountMenu(account: Account): Promise<void> {
    const { option } = await inquirer.prompt({
      type: 'list',
      name: 'option',
      message: 'Choose an option:',
      choices: ['Check Balance', 'Deposit', 'Withdraw', 'Go Back'],
    });

    switch (option) {
      case 'Check Balance':
        console.log(`Current Balance: $${account.getBalance()}`);
        break;
      case 'Deposit':
        await this.depositMenu(account);
        break;
      case 'Withdraw':
        await this.withdrawMenu(account);
        break;
      case 'Go Back':
        return;
    }

    await this.accountMenu(account);
  }

  private async depositMenu(account: Account): Promise<void> {
    const { amount } = await inquirer.prompt({
      type: 'number',
      name: 'amount',
      message: 'Enter the amount to deposit:',
    });

    account.deposit(amount);
  }

  private async withdrawMenu(account: Account): Promise<void> {
    const { amount } = await inquirer.prompt({
      type: 'number',
      name: 'amount',
      message: 'Enter the amount to withdraw:',
    });

    account.withdraw(amount);
  }

  public async start(): Promise<void> {
    console.log('Welcome to MyBank Console App!\n');

    await this.mainMenu();
  }
}

const myBankApp = new MyBankApp();
myBankApp.start();
