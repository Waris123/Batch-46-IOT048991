#!/usr/bin/env node
import  inquirer from 'inquirer';

interface Question {
  question: string;
  choices: string[];
  correctAnswerIndex: number;
}

class QuizApp {
  private questions: Question[] = [
    {
      question: 'What is the capital of France?',
      choices: ['Berlin', 'Madrid', 'Paris', 'Rome'],
      correctAnswerIndex: 2,
    },
    {
      question: 'Which planet is known as the Red Planet?',
      choices: ['Earth', 'Mars', 'Jupiter', 'Venus'],
      correctAnswerIndex: 1,
    },
    {
      question: 'What is the largest mammal?',
      choices: ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
      correctAnswerIndex: 1,
    },
  ];

  private userAnswers: number[] = [];

  private async presentQuestion(question: Question): Promise<void> {
    const answer = await inquirer.prompt([
      {
        type: 'list',
        name: 'selectedChoice',
        message: question.question,
        choices: question.choices,
      },
    ]);

    const userChoiceIndex = question.choices.indexOf(answer.selectedChoice);
    this.userAnswers.push(userChoiceIndex);
  }

  private calculateScore(): number {
    let score = 0;
    this.questions.forEach((question, index) => {
      if (question.correctAnswerIndex === this.userAnswers[index]) {
        score++;
      }
    });
    return score;
  }

  private async presentQuiz(): Promise<void> {
    console.log('Welcome to the Quiz!\n');

    for (const question of this.questions) {
      await this.presentQuestion(question);
    }

    console.log('\nQuiz completed! Let\'s see how you did.\n');

    const score = this.calculateScore();
    console.log(`Your score: ${score} out of ${this.questions.length}`);

    const percentage = (score / this.questions.length) * 100;
    console.log(`Percentage: ${percentage.toFixed(2)}%\n`);
  }

  public async start(): Promise<void> {
    await this.presentQuiz();
  }
}

const quizApp = new QuizApp();
quizApp.start();
