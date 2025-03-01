// Name : Manav Patel
// Id: 1002155843
// Due Date: 02/25/2025


 //1) Creating an array named inputtable having values from 1 to 10 as it's element
 const generateArray = (start, end) => 
    Array.from({ length: end - start + 1 }, (_, i) => start + i);

// Generate numbers from 1 to 100 using the function
const inputtable = generateArray(1, 10);
 console.log("");

 console.log(" 1. Printing the created inputtable array");
 console.log(inputtable);


// 2A) Set of multiples of 5 between 1 and 51. Name it fiveTable, print the contents to the console
console.log(" 2a) Set of multiples of 5 between 1 and 51: fiveTable")
//Creating a function nammed fiveTable to perform multiplication of elements in array.
const fiveTable = () => inputtable.map(num => num * 5);
console.log(fiveTable());  // Calling the function to get the result
console.log("");

// 2B) Set of multiples of 13 between 1 and 131. Name it thirteenTable, print the contents to the console
console.log(" 2b) Set of multiple of 13 between 1 and 131: thirteenTable");
const thirteenTable = () => inputtable.map(num => num * 13);
console.log(thirteenTable());  // Calling the function to get the result
console.log("");

// 2C) Set of squares of the numbers in inputtable. Name it squaresTable, print the contents to the console
console.log(" 2c) Set of squares : squaresTable");
const squaresTable = () => inputtable.map(num => num * num);
console.log(squaresTable());  // Calling the function to get the result
console.log("");

// 3) Get (and then print) the odd multiples of 5 between 1 and 100
console.log(" 3) Odd multiples of 5 between 1 and 100 : ");
const array3 = generateArray(1,20)
const oddMultiplesOfFive = () => 
    array3
    .map(num => num * 5)      // Calculates multiples of 5
    .filter(num => num % 2 !== 0); // Filters only odd numbers
console.log(oddMultiplesOfFive());  // Calling the function to get the result
console.log("");

// 4) Get (and then print) the sum of even multiples of 7 between 1 and 100
console.log(" 4) Sum of even multiples of 7 between 1 and 100 : ");
const array4 = generateArray(1,15)
const sumOfEvenMultiplesOfSeven = () => 
    array4
    .map(num => num * 7) // Converts to multiples of 7 (7, 14, 21, ..., 98)
    .filter(num => num % 2 === 0) // Filters only even numbers
    .reduce((sum, num) => sum + num, 0); // Calculating sum
console.log(sumOfEvenMultiplesOfSeven());  // Prints even multiples of 7 and their sum
console.log("");

// 5) Use currying to rewrite the function 
console.log(" 5) Currying Function : ");
function cylinderVolume( radius) {                                  // Declaring the curing function
	return function( height) {
		return 3.14 * radius * radius * height;	
    }
} 
// 5a) Use r = 5 and h = 10 to call your curried function.
console.log(" 5a) Using r = 5 and h = 10 to call your curried function"); 
cylinderFunction = cylinderVolume(5); // Defining a variable curryingFunction and passing r = 5 to currying function
h = cylinderFunction(10); // Calling currying function with r=5 and h=10 to print the volume of cylinder
console.log(h);

// 5b) Reuse the function from part ‘a’ but use h = 17
console.log(" 5b) Reusing the function from part ‘a’ and using h = 17"); 
cylinderFunction = cylinderVolume(5); // Defining a variable curryingFunction and passing r = 5 to currying function
h = cylinderFunction(17); // Passing h = 17 to currying function
console.log(h);

// 5c) Reuse the function from part ‘a’ but use h = 11
console.log(" 5c) Reusing the function from part ‘a’ and using h = 11"); 
cylinderFunction = cylinderVolume(5); // Defining a variable curryingFunction and passing r = 5 to currying function
h = cylinderFunction(11); // Passing h = 17 to currying function
console.log(h);

// 6) Using closures to wrap content with HTML tags
console.log("6) Using closures to wrap content with HTML tags");
// Defining makeTag function
const makeTag = function(beginTag, endTag){ 
    return function(textcontent){ 
       return beginTag +textcontent +endTag; 
    } 
} 
// Creating tag functions using makeTag()
const table = makeTag("<table>\n", "\n</table>");
const tr = makeTag("<tr>\n", "\n</tr>");
const th = makeTag("<th>", "</th>");
const td = makeTag("<td>", "</td>");

// Generating table content
const headerRow = tr(th("Firstname") + th("Lastname") + th("Age"));
const row1 = tr(td("Manav") + td("Patel") + td("23"));
const row2 = tr(td("Ketan") + td("Budhe") + td("24"));

// Creating the final table
const htmlTable = table(headerRow + row1 + row2);

// Displaying the output
console.log(htmlTable);
console.log("");

// 7) Generic Version of Ques 3 and Ques 4
console.log("7) Generic Version of Ques 3 and Ques 4");
array7 = generateArray(1,100);
const genericfuntion = m => {
    array7
    const generic_array = array7.fill(null).map((_, i) => ++i); // Converts the array into a sequence of numbers from 1 to its length
    const generic_multiple = generic_array.filter(z => z % m === 0) // function to the multiples of value assigned to z by user

    return (comparision) => {
        if (comparision === 'even') {
            return generic_multiple.filter(x => x % 2 === 0)    // Getting the even multiples 

        }

        else if (comparision === 'odd') {
            return generic_multiple.filter(x => x % 2 === 1)    // Getting the odd multiples 
        }
        else {
            console.log("Error in Input")   // For error handling
        }
    }
}

const sumOfEvenMultiples = arr =>  			// Function to calculate sum of numbers
    arr.reduce((total, item) => total + item,0);    

// Passing the value to main generic function
console.log("Generic version of question 3")
const ques3 = genericfuntion(2) // Passing a number to find odd multiples of it
const filter_odd = ques3('odd') // Filtering Odd multipels of passed number
console.log(filter_odd)

// Passing other option as value to main generic function
console.log("Generic version of question 4")
const ques4 = genericfuntion(2) // Passing a number to find even multiples of it
const filter_even = ques4('even')   // Filtering Even multipels of passed number
console.log(sumOfEvenMultiples(filter_even))    // Calculating sum of even multiples by calling sumOfEvenMultiples function and passing filter_even as arrgument.

