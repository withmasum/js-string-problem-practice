const lyrics = 'Tumi bondhu kala pakhi ami jeno ki. bosonto kale tonai bolte pari ni. kala kala sada sada';


const searchString = 'Pakhi';
// const doesExist = lyrics.includes('Pakhi');
const searchStringLower = searchString.toLowerCase();
const lyricsLowerCase = lyrics.toLowerCase();
// const doesExist = lyrics.includes('pakhi');
const doesExist = lyrics.includes('searchString');
const doesExistOneLine = lyricsLowerCase.includes(searchString);
console.log(doesExist);
console.log(doesExistOneLine);


console.log(lyrics.indexOf('kailla'));
console.log(lyrics.indexOf('Tumi'));



if (lyrics.indexOf('sada') !== -1) {
    console.log('exists inside the string')

}

else {

    console.log('cannot find it');
}



//Startswitch


console.log(lyrics.startsWith('2mi'
));


//endwith

const fileName = 'mybiodata.pdf';
const otherFile = 'mypic.png';
fileName.endsWith = ('.pdf');



