//STEP 1
// function sortString(stringInput){
//     //split string into array of chars
//     stringArr = stringInput.split('')
//     //sort array of chars, join back together into string, then return
//     return stringArr.sort().join("")
// }
// let output = prompt("Input a series of letters and I will sort them: ")
// window.alert("Sorted: "+sortString(output))

//STEP 2
// function capitalizeFirst(stringInput2){
//     // split string into array of substring (words)
//     let splitString = stringInput2.split(' ')
//     console.log("string split: "+splitString)
//     // capitalize first index of each substring and add to a new string
//     let newArray = new String
//     splitString.forEach((elem)=>{
//         console.log("first letter: "+elem[0]);
//         console.log("first letter cap: "+ elem[0].toUpperCase())
//         let newStr = elem.replace(elem[0],elem[0].toUpperCase())
//         console.log("New string: "+newStr)
//         newArray += (newStr+" ")
        
//     })
//     // return fully constructed string
//     return newArray
// }
// let userInp = prompt("Input a series of words and I will capitalize the first letter of each word: ")
// window.alert("Capitalized: "+capitalizeFirst(userInp))

//STEP 3
// function vowelCounter(uI){
//     // regexp to return any matching vowel globally
//     vowelCount = uI.match(/(a|e|i|o|u)/g)
//     // display vowels in console
//     console.log("vowels: "+vowelCount)
//     // return number of vowels
//     return vowelCount.length
// }
// let userInp3 = prompt("Input a series of words and I will count the total number of vowels.")
// window.alert("Vowels: "+vowelCounter(userInp3))

//STEP 4
// function randStringGen(uI2){
//     //generate new string to return
//     let stringReturn = new String
//     // run times equal to number user inputs
//     for (let i = 0; i < uI2; i++){
//         // get random char code. Equally weighted for all numbers and upper/lowercase characters
//         let charCode = charCodeFetch()
//         console.log("random character: "+charCode)
//         // add randomly generated character to return string
//         stringReturn += String.fromCharCode(charCode)
//     }
//     return stringReturn
// }
// function charCodeFetch(){
//     //random number 0-62 to account for every number and upper/lowercase character (evenly weighted)
//     let randNum = Math.ceil(Math.random()*62)
//     console.log("Random char code value: "+randNum)
//     let randChar
//     // depending on result move to correct starting char code and select randomly from there
//     if (randNum <= 10){
//         randChar = Math.floor(Math.random()*10)
//         return (48+randChar)
//     } else if (randNum <= 36){
//         randChar = Math.floor(Math.random()*26)
//         return (65+randChar)
//     } else {
//         randChar = Math.floor(Math.random()*26)
//         return (97+randChar)
//     }
// }
// let userInp4 = prompt("Input a number and I will generate a random string of that length.")
// window.alert("Random string: "+randStringGen(parseInt(userInp4)))


//STEP 5
// function getCountries(lang = 'en') {
//     // function will return an array with list of every country name
//     const A = 65
//     const Z = 90
//     let k = 0
//     //intl.displaynames are objects with country information including name
//     const countryName = new Intl.DisplayNames([lang], { type: 'region' });
//     const countries = []
//     //double for loop to loop from AA to ZZ (country codes) and check if each one has a valid country name
//     for(let i=A; i<=Z; ++i) {
//         for(let j=A; j<=Z; ++j) {
//             let code = String.fromCharCode(i) + String.fromCharCode(j)
//             let name = countryName.of(code)
//             if (code !== name) {
//                 countries[k] = name
//                 k++
//             }
//         }
//     }
//     return countries
// }
// function verifyCountry(myList, fullList){
//     console.log("running verify country")
//     for(each of myList){
//         let signal = false
//         for(every of fullList) {
//             if (every === each){
//                 //console.log(every+" is equal to "+each)
//                 signal = true
//             }
//             else {continue}
//         }
//         if(signal === false){
//             console.log("Could not find match for "+each)
//             return false
//         }
//     }
//     return true
// }
// function compareLength(countryArray){
//     console.log("running length compare")
//     let returnValue = 0
//     let i = 0
//     for(country of countryArray){
//         console.log("Currenty country: "+country)
//         if(country.length >= countryArray[returnValue].length){
//             returnValue = i
//         }
//         i++
//         console.log("Current longest: "+countryArray[returnValue])
//     }
//     return countryArray[returnValue]
// }
// const countryArrayConst = getCountries()
// console.log(countryArrayConst)
// let userInp5 = prompt("Input a set of comma delimited Countries and I will return the longest one")
// let userInpSplit = userInp5.split(",")
// console.log(userInpSplit)
// while(!verifyCountry(userInpSplit,countryArrayConst)){
//     userInp5 = prompt("I didn't recognize one or more of those countries.\nPlease capitalize each name, no special characters, and try again")
//     userInpSplit = userInp5.split(",")
// }
// window.alert("Longest Country: "+compareLength(userInpSplit))