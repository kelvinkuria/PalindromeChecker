function isPalindrome(){
    let word = prompt("Enter a word: ").toLowerCase();
    let reversedWord = word.split('').reverse().join('');

    if (word === reversedWord ){
        console.log(`${word} is a palindrome`)

    }else {
        console.log(`${word} is not a palindrome`);
    }
}
isPalindrome();