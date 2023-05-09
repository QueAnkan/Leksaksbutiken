import { atom } from "recoil";
// import { users } from "./Users";


const uNameAtom = atom ({
	key: 'userName',
	default: '',
});

const uPassAtom = atom ({
	key: 'userPass',
	default: '',
});



export {uNameAtom, uPassAtom}