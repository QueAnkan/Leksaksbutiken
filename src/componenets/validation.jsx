
import { useRecoilState } from "recoil"
import { uNameAtom, uPassAtom } from "../data/usersAtom"


const users = [
	{'name': 'admin',
	'password': 'password',
}
]

// Funktion som kontrollerar om användarnamn uppfyller kraven

function useIsValidName(){
	const [uName] = useRecoilState(uNameAtom)
	

	 const allowedUserName =users.find(user => user.name === uName)
	
	
	if (!allowedUserName) {
		return [false, 'Vänligen skriv in ett giltigt användarnamn']
	}

	return [true, '']
}


// Funktion som kontrollerar om lösenord uppfyller kraven
function useIsValidPassword(){
	const [uPass] = useRecoilState(uPassAtom)

	 const allowedUserPass =users.find(user => user.password === uPass)
	
	
	if (!allowedUserPass) {
		return [false, 'Vänligen skriv in ett giltigt lösenord']
	}

	return [true, '']
}

// funktion som kontrollerar att namn och pass matchar lägg in felmeddelande+?!

function useIsMatching(){
	const [uName] = useRecoilState(uNameAtom)
	const  [uPass] = useRecoilState(uPassAtom)


	const match = users.find(user => user.name===uName && user.password === uPass)

	if (match !== undefined ){
	return true
} else {
	return false
}

}



export   {useIsValidName, useIsValidPassword, useIsMatching, isValidProductName, isValidProductPicture, isValidProductDescription, isValidProductPrice}




function isValidProductName (name) {
const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö1234567890,- '
const isCharAllowed = (char) => allowedChars.includes(char)

	const isCharValid = Array.from(name).every(isCharAllowed)
	
	if (!isCharValid || name.length < 3 ) {
		return [false, 'Vänligen använd minst 3 bokstäver.']
	}

	return [true, '']
}


function isValidProductPicture (picture) {
	const urlRegex = /^(ftp|http|https):\/\/[^ "]+\.(jpg|jpeg|png|gif)(\?[^ "]+)*$/i;

	if (!urlRegex.test(picture)){
		return [false, 'Vänligen kontrollera att du använder en giltig bildadress.']

	}
	return [true, '']
}

function isValidProductDescription (description) {

	const allowedChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÅÄÖabcdefghijklmnopqrstuvwxyzåäö1234567890,.- '
const isCharAllowed = (char) => allowedChars.includes(char)

	const isCharValid = Array.from(description).every(isCharAllowed)
	
	if (!isCharValid || description.length < 15 || description.length > 120 ) {
		return [false, 'Vänligen beskriv varan med minst 15 och max 120 ord.']
	}

	return [true, '']
}



function isValidProductPrice (price) {
	const allowedChars = '1234567890'
const isCharAllowed = (char) => allowedChars.includes(char)

	const isCharValid = Array.from(price).every(isCharAllowed)
	
	if (!isCharValid || price.length < 2 || price.length > 1000) {
		return [false, 'Vänligen använd minst 2 och max 4 siffror för att ange priset.']
	}

	return [true, '']
}

































/* import { useState } from 'react';
// import { users } from '../../data/Users'



const users = [
	{'name': 'admin',
	'password': 'password',
}
]

function isValidName(){

	// kolla om input value matchar name i users 
	const validUserName = users.find((user) => user.name === )
	console.log(validUserName);



// if(uppfyller inte följande krav)
return [false, 'felmeddelande']

	return [true, ""]
}

function isValidPassword(password) {
	// kolla om input value matchar password i users 
// if(uppfyller inte följande krav)
return [false, 'felmeddelande']

	return [true, ""]

}

function isMatching (name, password) {
	// kolla att name och password har samma index?
}

export default isValidName */