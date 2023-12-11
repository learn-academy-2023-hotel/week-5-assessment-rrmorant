// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

const secretCodeWord1 = "Lackadaisical";
// Expected output: "L4ck4d41s1c4l"
const secretCodeWord2 = "Gobbledygook";
// Expected output: "G0bbl3dyg00k"
const secretCodeWord3 = "Eccentric";
// Expected output: "3cc3ntr1c"

describe("passCode", () => {
  // passCode is the string argument for the describe statement
  it("takes in a string and returns a string with a coded message", () => {
    // the it statement says it takes in a string and returns a string with a coded message
    expect(passCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l");
    expect(passCode(secretCodeWord2)).toEqual("G0bbl3dyg00k");
    expect(passCode(secretCodeWord3)).toEqual("3cc3ntr1c");
    // three expect statements that call the function and the matchers that compare the output to the test output
  });
}); // FAIL: ReferenceError: passCode is not defined

// b) Create the function that makes the test pass.

const passCode = (pass) => {
  // variable passCode function that uses pass as a parameter
  const splitCode = pass.split("");
  // splitCode splits the strings to an array with each character seperated into elements
  // [ 'L', 'a', 'c', 'k', 'a', 'd', 'a', 'i', 's', 'i', 'c', 'a', 'l' ]
  for (let i = 0; i < splitCode.length; i++) {
    // for loop to iterate the length of the array starting at index 0
    if (splitCode[i] === "a") {
      splitCode[i] = "4";
    } else if (splitCode[i] === "e") {
      splitCode[i] = "3";
    } else if (splitCode[i] === "i") {
      splitCode[i] = "1";
    } else if (splitCode[i] === "o") {
      splitCode[i] = "0";
    } else if (splitCode[i] === "E") splitCode[i] = "3";
  }
  // conditional statement to replace the characters within the array
  return splitCode.join("");
  // after all conditions are met, splitCode is joined turning the array into a string with characters changed
}; // PASS: passCode ✓ takes in a string and returns a string with a coded message (1 ms)

// Pseudo code: Embedded within function code

// --------------------2) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

const hand1 = [5, 5, 5, 3, 3];
// Expected output: true
const hand2 = [5, 5, 3, 3, 4];
// Expected output: false
const hand3 = [5, 5, 5, 5, 4];
// Expected output: false
const hand4 = [7, 2, 7, 2, 7];
// Expected output: true

describe("fullHouse", () => {
  // fullHouse is the string arguement for the describe statement
  it('takes in an array of 5 numbers and determines whether or not the array is a "full house"', 
  // it statement says it takes in an array of 5 numbers and determines whether or not the array is a "full house"
  () => {
    expect(fullHouse(hand1)).toEqual(true);
    expect(fullHouse(hand2)).toEqual(false);
    expect(fullHouse(hand3)).toEqual(false);
    expect(fullHouse(hand4)).toEqual(true);
    // four expect statements that call the function and the matchers that compare the output to the test output 
  });
}); // FAIL: ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.

const fullHouse = (cards) => {
  // variable fullHouse that uses cards as a parameter
  const checkHand = cards.sort();
  // checkHand sorts arrays in numerical order
  // [ 3, 3, 5, 5, 5 ]
  // [ 3, 3, 4, 5, 5 ]
  // [ 4, 5, 5, 5, 5 ]
  // [ 2, 2, 7, 7, 7 ]
  for (let i = 0; i < checkHand.length; i++) {
    // for loop to iterate the length of the array starting at index 0
    
    // if (checkHand[0] === checkHand[1] && checkHand[2] === checkHand[4]) {
    //   return true;
    // } else return false;
    
    if (
      (checkHand[0] === checkHand[1] && checkHand[2] === checkHand[4]) ||
      (checkHand[0] === checkHand[2] && checkHand[3] === checkHand[4])
    ) {
      return true;
    } else return false;
    // conditional statement that compares values of i 0, 1 and i 2, 4 or values of i 0, 2 and 3, 4. this is to ensure that if a full house has 3 values matching and is lower than the matching two value, it will catch them to make the statement still true
  }
}; // PASS: fullHouse ✓ takes in an array of 5 numbers and determines whether or not the array is a "full house"

// Pseudo code: original for loop coded passed but only accounted if i 0, 1 and i 2, 4 were the same after .sort(), but if i 0, 1, 2 were the same and i 3, 4 were were the same, it would've came out false. the 2nd code reflects if there was another hand added
  // [ 3, 3, 5, 5, 5 ] - true
  // [ 3, 3, 4, 5, 5 ] - false
  // [ 4, 5, 5, 5, 5 ] - false
  // [ 2, 2, 7, 7, 7 ] - true
  // [ 4, 4, 4, 5, 5 ] - true
