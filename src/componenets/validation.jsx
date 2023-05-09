// Funktion som kontrollerar om användarnamn uppfyller kraven
import { useRecoilState } from "recoil"
import { uNameAtom, uPassAtom } from "../data/usersAtom"


const users = [
	{'name': 'admin',
	'password': 'password',
}
]

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

function useIsMatching(){
	const [uName] = useRecoilState(uNameAtom)
	const  [uPass] = useRecoilState(uPassAtom)


	const match = users.find(user => user.name===uName && user.password === uPass)
console.log(match);
console.log("uName:", uName);
console.log("uPass:", uPass);
console.log("users:", users);
	if (match !== undefined ){
	return true
} else {
	return false
}

}



export   {useIsValidName, useIsValidPassword, useIsMatching}













































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