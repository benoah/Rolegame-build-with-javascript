Challenge: 
-----------
1. Take the hard-coded HTML for the Wizard card, bring it 
   into index.js and then inject it back into its div with 
   JavaScript.
2. Do the same for Orc card. 

----------------------------------------------------------------------------------


CHALLENGE
-----------
1. Strip out the hero and monster data (element id, name, avatar, 
health and dice score) and store them in variables

2. Write a renderCharacter() function that accepts the 5 new variables 
as paramaters and renders out a character with this data

3. Call renderCharacter() twice. Once with the hero variables and 
once with the monster variables to that both are rendered
----------------------------------------------------------------------------------

CHALLENGE
-----------
1. Convert our consts into two objects called 
"monster" and "hero".

2. Update the renderCharacter() function so that it accepts 
a single object "data" as its parameter instead of five string/numbers, 
reducing the number of arguments to pass in from five to one.

3. Update the template now each variable is coming from "data".

4. Update the function call.
----------------------------------------------------------------------------------

CHALLENGE
-----------
1. Deconstruct the data object 

2. Update the template string as necessary
----------------------------------------------------------------------------------

CHALLENGE
-----------
1. Instead of the for loop, map over the diceRoll array
and save the new array to diceHTML.

2. Remember to deal with the commas between dice.

3. What keyword should be used to declare diceHTML? 

----------------------------------------------------------------------------------
Challenge
-----------
1. Create a function called getDiceRollArray that uses a 
   for loop to return an array of random numbers between 1-6. 

2.  The function should have diceCount as a parameter and the 
   array it returns should be diceCount length.

3.  For testing purposes, call the function with a diceCount of 3 and log out the result. 
----------------------------------------------------------------------------------
Challenge 
-----------
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
----------------------------------------------------------------------------------

Challenge: 
-----------
1. Replace the for loop in getDiceRollArray with a new Array() and fill it 
with 0s as its initial state. The new array should be diceRoll length.

2. Use .map() directly on the array rather than declaring any new variables 
and return a random number from 1-6 in each element of the array.

3. Make sure you delete anything from that function that we no longer need.

Challenge 
-----------
1. Create a new constructor function called Character which
   takes our data as a paramenter.

2. Set up "this" for each of the 5 properties in our objects
   (eg: this.health = data.health).
----------------------------------------------------------------------------------


Challenge
-----------
1. Create a method called getCharacterHtml that performs the 
   same tasks as our current renderCharacter function.

2. Create two new instances of Character. One for a hero, 
   called "wizard", and one for a monster, called "orc". 
   Render both of them on the page.

3. Delete both the old renderCharacter function and the two 
   lines of code at the bottom of the page which invoke that 
   function.

CHALLENGE 
----------- 
 1. Add this function as a method of our character constructor

 2. Make a small change to getCharacterHtml to make the app work again

CHALLENGE
-----------
- Make the wizard and orc render

- check hint.md if you need a hand 
----------------------------------------------------------------------------------

MINI CHALLENGE
-----------
1 Create one render() function that calls both wizard and orc 
  so we can control when they render. 

2 call the function.

----------------------------------------------------------------------------------

CHALLENGE
-----------
-Create a new const called characterData and set it equals to an 
object which holds both our hero and monster objects. 

-Think about how we access the data from our new object
when we set up new characters down at the very bottom of the app. 

-See if you can work out what needs to change there to keep the 
app working.

----------------------------------------------------------------------------------


CHALLENGE:
-------------
1. Create a new function called getDicePlaceholderHtml.
2. Make getDicePlaceholderHtml return a new array of diceCount 
length.

3. Each element of the array should include this
line of HTML: `<div class="placeholder-dice"></div>`

4. Remember to deal with the commas!

5. Think: Where should this function live??

----------------------------------------------------------------------------------



CHALLENGE
-----------
1. In the Character constructor, create a new 
property called "diceArray".
©
2. Set diceArray equal to whatever is returned
by the getDicePlaceholderHtml function (think 
what two things you need to do to make this work!!).

3. Instead of rendering diceHtml in the getCharacterHtml 
method, render diceArray.

4. Delete any unnecessary code.
---------------------------------------------------------------------------------------

Challenge
-----------

1. Add a new property called currentDiceScore to each character's 
 data and initialise it to an empty array.
2. Rewrite the getDiceHtml method so it updates currentDiceScore 
 with the values returned by getDiceRollArray.
---------------------------------------------------------------------------------      

Challenge
-----------------------
1. In the getDiceHtml method, map over currentDiceScore 
to return this string of html template for each element:
<div class="dice">${num}</div>`. Save this new array
to diceArray.

2. Modify the attack() function in index.js to get our 
app working again.
-----------------------------------------------------------------------------------

CHALLENGE
-----------
1. Think what data we need to pass to our new
takeDamage method.
2. Add that data as an argument each time we call  
takeDamage below.
3. In the takeDamage method, take in the data as a 
parameter called 'attackScoreArray' and log it out.
**hint.md for help!** 
-------------------------------------------------------------------------------------
CHALLENGE
________________
1. In the takeDamage method, use what you have just learned
to reduce attackScoreArray to a single number.

2. Store that number in a const called totalAttackScore

3. Decrement the health score by totalAttackScore
-----------------------------------------------------------------------------------

/*
CHALLENGE
---------------
1. Add code to takeDamage so that when he character reaches 
zero heath, they stay at zero health and don't drop below 
zero.
----------------------------------------------------------------------------------


CHALLENGE
------------------------------------------------------------------------------------

1. Add a line of code inside the body of the if statement
in the takeDamage method which will give the character a 
new boolean "dead" when health reaches zero. It can be initialised with "true".

2. For now, log out that boolean when the character's 
health reaches zero.
--------------------------------------------------------------------------------------
/*
CHALLENGE
1. Inside attack(), check if either character is dead.
If they are, call a new function called endGame().
2. Set up the new function endGame() and have it 
log out "the game is over".
*/
/*CHALLENGE
-----------------------------------------------------------
1. Inside endGame(), create a const called endMessage. 
2. Figure out how to set endMessage to say either "The 
Wizard Wins", "The Orc is Victorious", or "No victors - 
all creatures are dead", depending on the health scores 
of the characters.
3. Log out endMessage
-------------------------------------------------------------

CHALLENGE
--------------------
1. Create a second const in endGame called endEmoji.
2. Figure out how to set it to hold the emoji "🔮" if the 
wizard wins, and "☠️" if the orc wins. If both characters 
are dead use "☠️".
3. Finally, take the html template string below render it 
to the screen so it replaces everything else when the game 
is over.
`<div class="end-game">
        <h2>Game Over</h2>
        <h3>${endMessage}/h3>
        <p class="end-emoji">${endEmoji}</p>
    </div>` 
-----------------------------------------------