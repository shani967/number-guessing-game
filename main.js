import inquirer from 'inquirer';
const rn = Math.floor(Math.random() * 10);
const answers = await inquirer.prompt([
    {
        input: "number",
        name: "answer",
        message: "lets try your luck 😉\n choose a number between 1 to 10 "
    }
]);
if (answers.answer == rn) {
    console.log("you win 😁👍,the correct answer is ", rn);
}
else {
    console.log('oops, the answer is incorrect😥');
    console.log("better luck next time 👀");
    console.log('the correct answer was', rn);
}
