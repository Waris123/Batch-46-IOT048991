#!/usr/bin/env node
import inquirer from 'inquirer';

class Player {
  constructor(public name: string, public health: number = 100) {}

  public takeDamage(amount: number): void {
    this.health -= amount;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  public isAlive(): boolean {
    return this.health > 0;
  }
}

class TextAdventureGame {
  private player: Player | null = null;

  constructor() {
    console.log('Welcome to the Text Adventure Game!\n');
  }

  private async getPlayerName(): Promise<string> {
    const { playerName } = await inquirer.prompt([
      {
        type: 'input',
        name: 'playerName',
        message: 'Enter your name:',
      },
    ]);

    return playerName;
  }

  private async makeChoice(choices: string[]): Promise<string> {
    const { chosenOption } = await inquirer.prompt([
      {
        type: 'list',
        name: 'chosenOption',
        message: 'Choose your option:',
        choices,
      },
    ]);

    return chosenOption;
  }

  private async explore(): Promise<void> {
    console.log('You come across a mysterious cave.');
    const choice = await this.makeChoice(['Enter the cave', 'Continue exploring']);

    switch (choice) {
      case 'Enter the cave':
        console.log('Inside the cave, you find a treasure chest.');
        const lootChoice = await this.makeChoice(['Open the chest', 'Leave the chest']);

        if (lootChoice === 'Open the chest') {
          console.log('Congratulations! You found a valuable treasure!');
        } else {
          console.log('You leave the chest untouched and continue your journey.');
        }
        break;
      case 'Continue exploring':
        console.log('You keep wandering through the forest.');
        this.player?.takeDamage(10);
        console.log(`You took some damage. Current health: ${this.player?.health}`);
        break;
    }
  }

  private async rest(): Promise<void> {
    console.log('You decide to take a rest and regain some health.');
    this.player?.takeDamage(-20); // Corrected this line to add health
    console.log(`You feel refreshed. Current health: ${this.player?.health}`);
  }

  private quitGame(): void {
    console.log('Quitting the game. See you next time!');
    process.exit(0);
  }

  private async play(): Promise<void> {
    const playerName = await this.getPlayerName();
    this.player = new Player(playerName);

    console.log('You find yourself in a dark forest.');

    while (this.player.isAlive()) {
      const choice = await this.makeChoice(['Explore', 'Rest', 'Quit']);

      switch (choice) {
        case 'Explore':
          await this.explore();
          break;
        case 'Rest':
          await this.rest();
          break;
        case 'Quit':
          this.quitGame();
          break;
      }
    }

    console.log('Game Over. Thanks for playing!');
  }

  public async start(): Promise<void> {
    await this.play();
  }
}

const game = new TextAdventureGame();
game.start();
