//STEP 1
// let monthChoice =[]
// monthChoice[0] = prompt("Please input a month (1 for January, 12 for December")
// while (monthChoice[0] <=-1 || monthChoice[0] >=13){
//     monthChoice[0] = prompt("Please try again. Must be greater than 0 and less than 13 (1 for January, 12 for December")
// }
// monthChoice[1] = prompt("Please input a year")
// while (monthChoice[1] <=-1){
//     monthChoice[1] = prompt("Please try again. Year be greater than 0")
// }
// function calcDays (month, year) {
//     return new Date(parseInt(year), parseInt(month), 0).getDate();
// }
// let days = calcDays(monthChoice[0],monthChoice[1])
// console.log("Month "+monthChoice[0]+" of year "+monthChoice[1]+" has "+days+" days in it")

//STEP 2
// do{
//     let userDate = prompt("Please input a date in format DD/MM/YYYY") 
//     if(dateChecker(userDate)){
//         console.log("User input: "+userDate)
//         month = userDate.slice(3,5)
//         console.log("Month num: "+month)
//         monthN = monthName(parseInt(month))
//         console.log("Month name: "+monthN)
//         window.alert("Month from input: "+userDate+" : "+monthN)
//         break 
//     } 
// }while(true)


// function monthName(monthNum){
//     console.log("running month converter.input value: "+monthNum)
//     switch(monthNum) {
//         case 1:
//             return "January"
//         case 2:
//             return "February"
//         case 3:
//             return "March"
//             break
//         case 4:
//             return "April"
//             break
//         case 5:
//             return "May"
//             break
//         case 6:
//             return "June"
//             break
//         case 7:
//             return "July"
//             break
//         case 8:
//             return "August"
//             break
//         case 9:
//             return "September"
//             break
//         case 10:
//             return "October"
//             break
//         case 11:
//             return "November"
//             break
//         case 12:
//             return "December"
//             break
//         default: 
//             return "unknown"
//             break
//     }
// }
// function dateChecker(dateInput){
//     //content check
//     if (dateInput.length === 0) {
//         window.alert("Input is empty. Please enter a date")
//         return false
//     }

//     //slash check
//     if (dateInput.indexOf('/') === -1) {
//         window.alert("Please check date format. (Ex: DD/MM/YYYY).")
//         return false
//     }

//     // get year and check for 4 digits
//     year = dateInput.substring(dateInput.length - 4)
//     if (isNaN(year)) {
//         window.alert('Please check year and make sure it is 4 digits. (Ex: DD/MM/YYYY).')
//         return false
//     }

        // check that date is valid
//     date = new Date(dateInput)
//     if (date.toString() === 'Invalid Date') {
//         window.alert('Your date is invalid. Please try again (Ex: DD/MM/YYYY).')
//         return false
//     }
//     return true
// }

//STEP 3
// // while loop to prompt till valid date
// do{
//     let userDate = prompt("Please input a date in format DD/MM/YYYY") 
//     //send to validator
//     if(dateChecker(userDate)){
//         console.log("User input: "+userDate)
//         // slice the day values from the input string
//         days = userDate.slice(0,2)
//         console.log("Date num: "+days)
//         // parse the int for the days and send to weekend check function
//         isWeekend = ladiesAndGentleman(parseInt(days))
//         //display result
//         window.alert("Your input is "+userDate+" which means it's "+isWeekend)
//         break 
//     } 
// }while(true)


// function ladiesAndGentleman(monthNum){
//     switch(monthNum) {
//         case 0:
//             return "Sunday. ITS THE WEEKEND"
//         case 1:
//             return "Monday. Not the weekend :("
//         case 2:
//             return "Tuesday. Not the weekend :("
//         case 3:
//             return "Wednesday. Not the weekend :("
//         case 4:
//             return "Thursday. Not the weekend :("
//         case 5:
//             return "Friday. Almost the weekend!"
//         case 6:
//             return "Saturday. ITS THE WEEKEND (but Monday looms close)"
//     }
// }
// function dateChecker(dateInput){
//     //content check
//     if (dateInput.length === 0) {
//         window.alert("Input is empty. Please enter a date")
//         return false
//     }

//     //slash check
//     if (dateInput.indexOf('/') === -1) {
//         window.alert("Please check date format. (Ex: DD/MM/YYYY).")
//         return false
//     }

//     // get year and check for 4 digits
//     year = dateInput.substring(dateInput.length - 4)
//     if (isNaN(year)) {
//         window.alert('Please check year and make sure it is 4 digits. (Ex: DD/MM/YYYY).')
//         return false
//     }

//     // convert received date to string and test validity
//     date = new Date(dateInput)
//     if (date.toString() === 'Invalid Date') {
//         window.alert('Your date is invalid. Please try again (Ex: DD/MM/YYYY).')
//         return false
//     }
//     return true
// }
 
//STEP 4
// let d = new Date()
// let yesterday = ladiesAndGentleman(d.getDay()-1)
// console.log("Today is: "+ladiesAndGentleman(d.getDay())+"\nYesterday was: "+yesterday)
// function ladiesAndGentleman(dayNum){
//     switch(dayNum) {
//         case 0:
//             return "Sunday"
//         case 1:
//             return "Monday"
//         case 2:
//             return "Tuesday"
//         case 3:
//             return "Wednesday"
//         case 4:
//             return "Thursday"
//         case 5:
//             return "Friday"
//         case 6:
//             return "Saturday"
//     }
// }

//STEP 5
// let d = new Date()
// console.log("First letter of today is: " +d.toDateString().slice(0,1))
