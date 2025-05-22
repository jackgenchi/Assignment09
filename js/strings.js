let foxString = "The quick brown fox jumps over the lazy dog"

//STEP 1
//prompt for name, find length of characters. Alert method to display
// function string01 (){
//     let userName = prompt("Please enter your name: ")
//     getUserName(userName)
//     function getUserName(text){
//         window.alert("your name is "+text.length+" characters long")
//     }
// }
// string01()

//STEP 2
//prompt for name, prompt for numeric value
//find letter in the string based on number specified
// function string02() {
//     let userName2 = prompt("Please enter your name: ")
//     let charNumber = prompt("Please enter the number of the character you want to retrieve from your name: ")
//     while (true){
//         if(charNumber<0 || charNumber>userName2.length){
//             charNumber = prompt("Please try again. Number must be greater than 0 or less than the length of your name.")
//         }
//         else{
//             break;
//         }
//     }
//     window.alert("Character at space "+charNumber+": "+userName2.charAt(charNumber-1))
// }
// string02()


//STEP 3
//prompt for first name
//prompt for last name
//alert with concatenated result
// function string03(){
//     let firstName = prompt("Please input your first name: ")
//     let lastName = prompt("Please input your last name: ")
//     window.alert("Your name is: "+firstName.concat(lastName))
// }
// string03()

//STEP 4
//VARIABLE IS STORED AT THE TOP AS "foxString" SO IT CAN BE REUSED IN NEEDED STEPS 
//Store text, find and display within an alert index of: "fox"
// function string04(stringToFind){
//     window.alert("sentence: "+foxString+"\nIndex of \""+stringToFind+"\" :\n" +foxString.indexOf(stringToFind))
// }
// string04("fox")
//STEP 5
//store text, find and display within alert index of last instance of: "fox"
// let foxString2 = "The quick brown fox jumps over the lazy fox"
// function string05(stringToFind){
//     window.alert("sentence: "+foxString2+"\nLast index of \""+stringToFind+"\" :\n" +foxString2.lastIndexOf(stringToFind))
// }
// string05("fox")

//STEP 6
//store text, prompt user for full name, replace lazy dog with name. alert to display result
// function string06(replacement) {
//     let userFullName = prompt("Please enter your full name: ")
//     window.alert("Original Sentence: "+foxString+"\nNew Sentence: "+foxString.replace(replacement,userFullName))
// }
// string06("the lazy dog")

//STEP 7
// function string07 (userInputToFind) {
//     let indexOfInput = foxString.search(userInputToFind)
//     let returnArray = [];
//     if (indexOfInput===-1) {
//         while (indexOfInput===-1){
//             tryAgain = prompt("I did not find that word, please try again.\nSentence to search: "+foxString+"\nPlease input a word to search within: ")
//             indexOfInput = foxString.search(tryAgain)
//          }
//          returnArray[0] = tryAgain
//          returnArray[1] = indexOfInput
//          console.log("Returning returnArray[0] = "+returnArray[0]+ "and returnArray[1]: "+ returnArray[1])
//          return returnArray
//     }
//     returnArray[0] = userInputToFind
//     returnArray[1] = indexOfInput
//     console.log("Returning returnArray[0] = "+returnArray[0]+ "and returnArray[1]: "+ returnArray[1])
//     return returnArray
// }
// let userInput = prompt("Sentence to search: "+foxString+"\nPlease input a word to search within: ")
// let returns = string07(userInput)
// window.alert("Sentence: "+foxString+"\nValue Searched for: "+returns[0]+"\nIndex of search: "+returns[1])

//STEP 8
// let old_string = foxString 
// function string08(stringToSlice, slicingValue){
//     let startPoint = stringToSlice.indexOf(slicingValue)
//     let endPoint = startPoint+slicingValue.length
//     console.log("index of sliced: "+startPoint+"\nlength of slice value: "+slicingValue.length+"\nStopping point: "+endPoint)
//     let final= stringToSlice.slice(startPoint,endPoint)
//     console.log("returning sliced value: "+final)
//     return final 
// }
// new_string = string08(old_string,"the lazy dog")
// window.alert("Old string: "+old_string+"\nSliced string: the lazy dog\nReturned string capitalized: "+new_string.toUpperCase())

//STEP 9
// let foxString3 = " THE QUICK BROWN FOX JUMPS OVER THE LAZY DOG         "
// let foxString4 = foxString3.trim().toLowerCase()
// window.alert("Original: "+foxString3+"\nAltered: "+foxString4)

//STEP 10
// let foxStringLower = "the quick brown fox jumps over the lazy dog"
// function string10 (sentenceToCap){
//     newString= sentenceToCap
//     console.log("newString[0]: "+newString[0]+"\nnewString[0].toUpperCase(): "+newString[0].toUpperCase())
//     let newS = newString.replace(newString[0],newString[0].toUpperCase())
//     window.alert("Original Sentence: "+sentenceToCap+"\nNew Sentence: "+newS)
// }
// string10(foxStringLower)