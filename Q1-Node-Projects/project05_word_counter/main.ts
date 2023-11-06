#!/usr/bin/env node
import inquirer from 'inquirer';

class TextAnalyzer {
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

  private countCharacters(text: string): number {
    // Remove whitespaces and count characters
    const textWithoutWhitespaces = text.replace(/\s/g, '');
    return textWithoutWhitespaces.length;
  }

  private countWords(text: string): number {
    // Remove whitespaces and count words
    const wordsArray = text.split(/\s+/).filter(word => word.length > 0);
    return wordsArray.length;
  }

  public async start(): Promise<void> {
    console.log('Welcome to the Text Analyzer!\n');

    const paragraph = await this.getUserInput('Enter an English paragraph:');

    const characterCount = this.countCharacters(paragraph);
    const wordCount = this.countWords(paragraph);

    console.log(`\nCharacter count (excluding whitespaces): ${characterCount}`);
    console.log(`Word count (excluding whitespaces): ${wordCount}\n`);
  }
}

const textAnalyzer = new TextAnalyzer();
textAnalyzer.start();
