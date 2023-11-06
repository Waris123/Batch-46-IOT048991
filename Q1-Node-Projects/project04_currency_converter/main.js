#!/usr/bin/env node
import inquirer from 'inquirer';
class CurrencyConverter {
    constructor() {
        this.exchangeRates = [
            { fromCurrency: 'USD', toCurrency: 'EUR', rate: 0.85 },
            { fromCurrency: 'USD', toCurrency: 'GBP', rate: 0.73 },
            { fromCurrency: 'EUR', toCurrency: 'USD', rate: 1.18 },
            { fromCurrency: 'EUR', toCurrency: 'GBP', rate: 0.85 },
            { fromCurrency: 'GBP', toCurrency: 'USD', rate: 1.37 },
            { fromCurrency: 'GBP', toCurrency: 'EUR', rate: 1.18 },
        ];
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
    async getCurrencyAmount() {
        const { amountStr } = await inquirer.prompt([
            {
                type: 'input',
                name: 'amountStr',
                message: 'Enter the amount of money:',
            },
        ]);
        const amount = parseFloat(amountStr);
        if (isNaN(amount) || amount <= 0) {
            console.log('Invalid amount. Please enter a valid positive number.');
            return await this.getCurrencyAmount();
        }
        return amount;
    }
    async getCurrencyChoice(message) {
        const { currency } = await inquirer.prompt([
            {
                type: 'list',
                name: 'currency',
                message,
                choices: ['USD', 'EUR', 'GBP'],
            },
        ]);
        return currency;
    }
    getExchangeRate(fromCurrency, toCurrency) {
        return this.exchangeRates.find(rate => rate.fromCurrency === fromCurrency && rate.toCurrency === toCurrency);
    }
    async convertCurrency() {
        const fromCurrency = await this.getCurrencyChoice('Select the source currency:');
        const toCurrency = await this.getCurrencyChoice('Select the target currency:');
        const amount = await this.getCurrencyAmount();
        const exchangeRate = this.getExchangeRate(fromCurrency, toCurrency);
        if (!exchangeRate) {
            console.log('Invalid currency conversion. Exiting.');
            return;
        }
        const convertedAmount = amount * exchangeRate.rate;
        console.log(`${amount} ${fromCurrency} is equal to ${convertedAmount.toFixed(2)} ${toCurrency}\n`);
    }
    async start() {
        console.log('Welcome to the Currency Converter!\n');
        while (true) {
            const option = await this.getUserInput('Press Enter to convert currencies or type "exit" to exit:');
            if (option.toLowerCase() === 'exit') {
                console.log('Exiting Currency Converter. Goodbye!');
                process.exit(0);
            }
            await this.convertCurrency();
        }
    }
}
const currencyConverter = new CurrencyConverter();
currencyConverter.start();
