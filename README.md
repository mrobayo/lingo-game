# Lingo 
 
 This is a typescript game app with REDUX, JEST & ENZYME.
 
 The game rules are:
   1. You start with a score 100.
   2. Each letter TRY discounts some points (5 constants, 10 vowels).
   3. Can only GUESS the word one time.
   4. Exercise: Add a HINT button that returns a 
      random letter and discounts 15 points.      
  
 ```
 LINGO
 ----------------------------
                 Score:  100
 ----------------------------
    __  __  __  __  __  __            
 ----------------------------
   Letter:              
   A B C D E F G H I J K L M
   N O P Q R S T U V X Y W Z
 ----------------------------
   Word:  ____________  
                   [ GUESS ]
 ----------------------------
      Attempt History
   A, L, Q, R, E
 ----------------------------
 ```


## Typescript & React

 Detailed guide:
 https://github.com/piotrwitek/react-redux-typescript-guide
 
 ---
 Good Typescript Reference:
 https://github.com/typescript-cheatsheets/react#reacttypescript-cheatsheets
 
 https://github.com/typescript-cheatsheets/react-typescript-cheatsheet
 https://egghead.io/courses/use-typescript-to-develop-react-applications
 https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935
  
 
## Init Enzyme

 trying this: 
 https://medium.com/@feralamillo/create-react-app-typescript-testing-with-jest-and-enzyme-869fdba1bd3
 
 ```
    > yarn add --dev enzyme jest-enzyme enzyme-adapter-react-16
 ```

    

 Add setupTest.ts
 // TODO
 
 

## data-test attribute to test rendering
 ```	
 	$ yarn add --dev babel-plugin-react-remove-properties
 	$ yarn run eject
 
 ```


## Config lints 
  This configuration works:
  https://www.robertcooper.me/using-eslint-and-prettier-in-a-typescript-project


## Jest
  https://www.npmjs.com/package/ts-jest
  https://basarat.gitbook.io/typescript/intro-1/jest

 ```
  $ yarn add --dev ts-jest @types/jest
  $ yarn add --dev enzyme jest-enzyme @types/enzyme enzyme-adapter-react-16
  $ yarn add --dev @types/enzyme-adapter-react-16  
 ```


# Redux

  yarn add redux redux-thunk react-redux @types/react-redux
