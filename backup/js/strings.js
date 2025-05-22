let stringVisBtn = document.querySelector("#stringBtnSelect")
stringVisBtn.addEventListener('click' , (e) => {
    console.log("running string button shower")
    let visGroup = document.querySelector(".stringButtons")
    visGroup.classList.add("visBtn")
    let invisGroup2 = document.querySelector(".dateButtons")
    invisGroup2.classList.remove("visBtn")
    let invisGroup3 = document.querySelector(".mathButtons")
    invisGroup3.classList.remove("visBtn")
    let invisGroup4 = document.querySelector(".deathButtons")
    invisGroup4.classList.remove("visBtn")
    initStringButtons()
})
function initStringButtons() {

}
//STEP 1
//prompt for name, find length of characters. Alert method to display
let userName = prompt("Please enter your name: ")
getUserName(userName)
function getUserName(text){
    window.alert("your name is "+text.length+" characters long")
}
//STEP 2
//prompt for name, prompt for numeric value
//find letter in the string based on number specified
let userName2 = prompt("Please enter your name: ")
let charNumber = prompt("Please enter the number of the character you want to retrieve from your name: ")
while (true){
    if(charNumber<0 || charNumber>userName2.length){
        charNumber = prompt("Please try again. Number must be greater than 0 or less than the length of your name.")
    }
    else{
        break;
    }
}
window.alert("Character at space "+charNumber+": "+userName2.charAt(charNumber-1))
//STEP 3
//prompt for first name
//prompt for last name
//alert with concatenated result
let firstName = prompt("Please input your first name: ")
let lastName = prompt("Please input your last name: ")
window.alert("Your name is: "+firstName.concat(lastName))
//STEP 4
//Store text, find and display within an alert index of: "fox"
let text1,text2,text3,text4,text5 = "The quick brown fox jumped over the lazy dog"
//STEP 5
//store text, find and display within alert index of last instance of: "fox"

//STEP 6
//store text, prompt user for full name, replace lazy dog with name. alert to display result

//STEP 7

//STEP 8

//STEP 9

//STEP 10
