#!/usr/bin/env node
import inquirer from 'inquirer';
class Account {
    constructor(accountHolder) {
        this.accountHolder = accountHolder;
        this.balance = 0;
    }
    getBalance() {
        return this.balance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`Deposited $${amount}. New balance: $${this.balance}`);
        }
        else {
            console.log('Invalid deposit amount. Please enter a positive number.');
        }
    }
    withdraw(amount) {
        if (amount > 0 && amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn $${amount}. New balance: $${this.balance}`);
        }
        else if (amount <= 0) {
            console.log('Invalid withdrawal amount. Please enter a positive number.');
        }
        else {
            console.log('Insufficient funds. Unable to withdraw.');
        }
    }
}
class Bank {
    constructor() {
        this.accounts = {};
    }
    createAccount(accountHolder) {
        const newAccount = new Account(accountHolder);
        this.accounts[accountHolder] = newAccount;
        console.log(`Account created for ${accountHolder}`);
        return newAccount;
    }
    getAccount(accountHolder) {
        return this.accounts[accountHolder];
    }
}
class MyBankApp {
    constructor() {
        this.bank = new Bank();
    }
    async mainMenu() {
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
    async createAccountMenu() {
        const { accountHolder } = await inquirer.prompt({
            type: 'input',
            name: 'accountHolder',
            message: 'Enter account holder name:',
        });
        this.bank.createAccount(accountHolder);
    }
    async accessAccountMenu() {
        const { accountHolder } = await inquirer.prompt({
            type: 'input',
            name: 'accountHolder',
            message: 'Enter account holder name:',
        });
        const account = this.bank.getAccount(accountHolder);
        if (account) {
            await this.accountMenu(account);
        }
        else {
            console.log('Account not found. Please create an account first.');
        }
    }
    async accountMenu(account) {
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
    async depositMenu(account) {
        const { amount } = await inquirer.prompt({
            type: 'number',
            name: 'amount',
            message: 'Enter the amount to deposit:',
        });
        account.deposit(amount);
    }
    async withdrawMenu(account) {
        const { amount } = await inquirer.prompt({
            type: 'number',
            name: 'amount',
            message: 'Enter the amount to withdraw:',
        });
        account.withdraw(amount);
    }
    async start() {
        console.log('Welcome to MyBank Console App!\n');
        await this.mainMenu();
    }
}
const myBankApp = new MyBankApp();
myBankApp.start();
