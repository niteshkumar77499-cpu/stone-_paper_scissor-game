function game(userChoice)
{  
   let randomNum = Math.random() * 3;
         let compChoice;
         if(randomNum > 0 && randomNum <= 1)
         {
            compChoice = 'Stone';
         }
         else if(randomNum > 1 && randomNum <= 2)
         {
            compChoice = 'Paper';
         }
         else
         {
            compChoice = 'Scissors';
         }


         let result;
         if(userChoice == compChoice)
         {
          result = 'It is a tie';
         }
         else if((userChoice == 'Stone' && compChoice == 'Paper') || (userChoice == 'Paper' && compChoice == 'Scissors') || (userChoice == 'Scissors' && compChoice == 'Stone'))
         {
          result = 'Computer wins';
         }
          else
          {
          result = 'You win';
          }

         alert(`you choose ${userChoice} and computer choose ${compChoice}. ${result}`);
}        