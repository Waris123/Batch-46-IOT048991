#!/usr/bin/env node
import inquirer from 'inquirer';
class CountdownTimer {
    constructor() {
        this.hours = 0;
        this.minutes = 0;
        this.seconds = 0;
    }
    async getUserInput() {
        const answers = await inquirer.prompt([
            {
                type: 'number',
                name: 'hours',
                message: 'Enter the number of hours:',
                validate: (value) => value >= 0,
            },
            {
                type: 'number',
                name: 'minutes',
                message: 'Enter the number of minutes:',
                validate: (value) => value >= 0 && value < 60,
            },
            {
                type: 'number',
                name: 'seconds',
                message: 'Enter the number of seconds:',
                validate: (value) => value >= 0 && value < 60,
            },
        ]);
        this.hours = answers.hours;
        this.minutes = answers.minutes;
        this.seconds = answers.seconds;
    }
    startTimer() {
        let totalSeconds = this.hours * 3600 + this.minutes * 60 + this.seconds;
        const timer = setInterval(() => {
            const hours = Math.floor(totalSeconds / 3600);
            const minutes = Math.floor((totalSeconds % 3600) / 60);
            const seconds = totalSeconds % 60;
            console.clear();
            console.log(`Time Remaining: ${hours}h ${minutes}m ${seconds}s`);
            if (totalSeconds <= 0) {
                clearInterval(timer);
                console.log('Timer has ended!\n');
            }
            else {
                totalSeconds--;
            }
        }, 1000);
    }
    async start() {
        await this.getUserInput();
        console.log('\nStarting Countdown Timer...\n');
        this.startTimer();
    }
}
const countdownTimer = new CountdownTimer();
countdownTimer.start();
