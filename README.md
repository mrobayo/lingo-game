# Lingo 
 
 This is a typescript game app with REDUX, JEST & ENZYME.
 
 The game rules are:
   1. You start with a score 100.
   2. Each letter TRY discounts some points (5 constants, 10 vowels).
   3. Can only GUESS the word one time.
   4. Exercise: Add a HINT button that returns a 
      random letter and discounts 15 points.      
  
 ```
 ----------------------------
                 Score:  100
 ----------------------------
    __  __  __  __  __  __            
 ----------------------------
   Letter:  ______  [ TRY ]
   Word:    ______  [GUESS]
 ----------------------------
      Attempts History
   A, L, Q, R, E
 ----------------------------
 ```
 
 
## Init Enzyme
 ```
    > yarn add --dev enzyme jest-enzyme enzyme-adapter-react-16
 ```

## data-test attribute to test rendering
 ```	
 	$ yarn add --dev babel-plugin-react-remove-properties
 	$ yarn run eject
 
 ```
