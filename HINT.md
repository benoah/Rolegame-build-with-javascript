Challenge: 
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 


CHALLENGE
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered

CHALLENGE
1. Convert our consts into two objects called 
"monster" and "hero".

2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.

3. Update the template now each variable is coming from "data".

4. Update the function call.

CHALLENGE
1. Deconstruct the data object 
2. Update the template string as necessary

CHALLENGE
1. Instead of the for loop, map over the diceRoll array
and save the new array to diceHTML.
2. Remember to deal with the commas between dice.
3. What keyword should be used to declare diceHTML? 

Challenge
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 

2.  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length.
3.  For testing purposes, call the function with a diceCount of 3 and log out the result. 

Challenge 
1. Create a function called getDiceHtml. 
2. getDiceHtml should map over the array of dice rolls 
   returned from getDiceRollArray to generate the html 
   we need to render our dice with random values. This is 
   the HTML: `<div class="dice">DICE VALUE HERE</div>`
3. Think about the parameters and arguments!
4. Down in renderCharacter(), set diceHtml equals to our 
   new getDiceHtml function. Remember to give it the argument
   it needs. 
5. Delete any code we no longer need.
**hint.md for help**



 Challenge: 
1. Replace the for loop in getDiceRollArray with a new Array() and fill it 
with 0s as its initial state. The new array should be diceRoll length.
2. Use .map() directly on the array rather than declaring any new variables 
and return a random number from 1-6 in each element of the array.
3. Make sure you delete anything from that function that we no longer need.
