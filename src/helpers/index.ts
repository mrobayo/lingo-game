
// Check if word matches
export const checkWordFound = (word:string, secret:string): boolean => {
    return word !== '' && secret.toUpperCase() == word.toUpperCase();
}

// Check contains the secret
export const checkContainsLetter = (letter:string, secret:string): boolean => {
    return false;
}
