//ASSIGNMENT ONE
// Using the constructor method, create an InstagramPost() constructor function that takes the properties below as arguments.
// Handle of author
// content, 
// An image link posted by the author of the post
// Number of views, 
// Number of likes, 

function instagramPost(handleOfAuthor, content, imageLink,numberOfViews, numberOfLikes) {
    this.instagramHandle = handleOfAuthor,
    this.instagramContent = content,
    this.instagramImageLink = imageLink,
    this.numberOfViews = numberOfViews,
    this.numberOfLikes = numberOfLikes
}

//ASSIGNMENT TWO
// Create 2 Instagram post objects from the constructor function you created above

let instagramPost1 = new instagramPost("@EdleyChris02", "Election Day 2023", "https://blog.hootsuite.com/understanding-image-copyright/", 200, "105k");
let instagramPost2 = new instagramPost("@RubyChris", "Happy birthday", "https://www.Lovebirthday.com/wp-content/uploads/happy-birthday.jpg", 120, 651);

//ASSIGNMENT THREE
//3(a)
function createPerson(name, age, location) {
    return {
        studentName: name,
        studentAge: age,
        studentLocation: location
    }
};

const Musa = createPerson("Musa", 19, "Lekki, Lagos State");

// 3(b)
function createJambScores(ENG, GOVT, LIT, CRK) {
    return {
        ENG: ENG,
        GOVT: GOVT,
        LIT: LIT,
        CRK: CRK
    }
};

const MusaJambScores = createJambScores(70, 85, 82, 94);

Musa.createJambScores = MusaJambScores;

// console.log(Musa);


//ASSIGNMENT FOUR
let inputOne = {Name: "edith", skill:"tech", age: 25}

let inputTwo = Object.assign({}, inputOne); //(a) - Object.assign() method

let inputThree = {...inputOne}; //(b) - Spread Syntax method

let inputFour = JSON.parse(JSON.stringify(inputOne)); //(c) - JSON.parse() method

inputOne.height = "4.8ft";

// console.log(inputFour);

//ASSIGNMENT FIVE
const presidentialCandidates = {
  AAC: "Omoyele Sowore",
  ACCORD: "Christopher Imumolen",
  APC: "Bola Ahmed Tinubu",
  LP: "Peter Obi",
  NNPP: "Rabiu Kwankwaso",
  PDP: "Atiku Abubakar",
};
  //for..in enumeration method

for (const candidates in presidentialCandidates) {
  let party = candidates;
  let candidate = presidentialCandidates[candidates];

  console.log(candidate + " is the presidential candidate of " + party);
}
//for..of enumeration method
for (const candidates of Object.keys(presidentialCandidates)) {
    console.log(presidentialCandidates[candidates] + " is the presidential candidate of " + candidates);
}