let button = document.getElementById("submit")
let password = document.getElementById("password") 
let length = document.getElementById("length").getElementsByTagName("input")[0]


let basic_characters="abcdefghijklmnopqrstuvwxyz"
let special="!@#$%^&*"
let numbers="1234567890"


function generatePassword(){
    let alphabet = basic_characters

    let checkbox_special = document.getElementById("special-characters").getElementsByTagName("input")[0]
    let checkbox_numbers = document.getElementById("numbers").getElementsByTagName("input")[0]
    let upper = document.getElementById("upper").getElementsByTagName("input")[0]

    if(checkbox_special.checked){
        alphabet += special
    }
    if(checkbox_numbers.checked){
        alphabet += numbers
    }

    let password = ""
    let password_length = Number(length.value)
    if(password_length > length.max){
        password_length=length.max
    }
    else if(password_length < length.min){
        password_length=length.min
    }

    length.value = password_length

    for(let i = 0; i < password_length; i++){
        let rand = Math.floor(Math.random() * alphabet.length)
        let char = alphabet.charAt(rand)

        if(rand < 26){
           if(upper.checked){
            let is_upper =  Math.floor(Math.random() * 2)
            if(is_upper){
                char = char.toUpperCase()
            }
           }
        }
        password += char
    }
    return password
}

button.addEventListener('click',()=>{
    password.innerText = generatePassword()
})