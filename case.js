const userName = 'blackPink';
const UserInput = 'blackPinK';
console.log(userName.toLowerCase())
console.log(UserInput.toUpperCase())

if (userName === UserInput.toLocaleLowerCase()) {


    console.log('valied user');
}

else {

    console.log('invalid user');
}