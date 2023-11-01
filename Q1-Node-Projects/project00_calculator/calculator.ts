#!/usr/bin/env node
import { Sum } from "./add.js";
import { Sub } from "./sub.js";
import { Mul } from "./mul.js";
import { Div } from "./div.js";
import inquirer from "inquirer"


async function calculateAgain() {
    const get_input = await inquirer.prompt({
        message : "Select Operation to perform \n 1- Add \n 2- Substract \n 3- Multiplication \n 4- Division \n ------- \n", 
        type: "number",
        name: "get_operation"
    })

    let operation = get_input.get_operation

    // if wrong selection
    /*if(operation != 1 && operation != 2 && operation != 3 && operation != 4){
        console.log(`You did not select any number from 1 to 4 `);
        const play_again = await inquirer.prompt({
            message : "Would you like calculate again ?? Select Number 1 or 2 \n 1- Yes \n 2- No \n", 
            type: "number",
            name: "get_input"
        })
        if(play_again.get_input == 1){
            
            calculateAgain();  
       
        }else{
            console.log(`Will Meet Soon !!!, Happy Coding :-D Good Bye.`);
            return;
    
        }
    }*/
    
    
    
    const num1 = await inquirer.prompt({
        message : "Enter your first number ", 
        type: "number",
        name: "firstName"
    })
    
    
    const num2 = await inquirer.prompt({
        message : "Enter your 2nd number ", 
        type: "number",
        name: "secondName"
    })


    
    if(operation == 1){

        let sum = Sum(num1.firstName, num2.secondName);
        console.log(`Cool Buddy! The Addition of `+num1.firstName+` and `+num2.secondName+` is `+sum);
        console.log(num1.firstName + `+` + num2.secondName + ` = ` + sum);
        
    }else if(operation == 2){

        let sub = Sub(num1.firstName, num2.secondName);
        console.log(`Amazing! The Substraction of `+num1.firstName+` and `+num2.secondName+` is `+sub);
        console.log(num1.firstName + `-` + num2.secondName + ` = ` + sub);
        
    }else if(operation == 3){

        let mul = Mul(num1.firstName, num2.secondName);
        console.log(`Superb! The Multiplication of `+num1.firstName+` and `+num2.secondName+` is `+mul);
        console.log(num1.firstName + `X` + num2.secondName + ` = ` + mul);
        
    }else if(operation == 4){

        let div = Div(num1.firstName, num2.secondName);
        console.log(`Great Job! The Division of `+num1.firstName+` and `+num2.secondName+` is `+div);
        console.log(num1.firstName + `/` + num2.secondName + ` = ` + div);

    }

    const play_again = await inquirer.prompt({
        message : "Would you like calculate again ?? Select Number 1 or 2 \n 1- Yes \n 2- No \n", 
        type: "number",
        name: "get_input"
    })
    if(play_again.get_input == 1){
        
        calculateAgain();  
   
    }else{
        console.log(`Will Meet Soon !!!, Happy Coding :-D Good Bye.`);
        return;

    }

}

 calculateAgain();



