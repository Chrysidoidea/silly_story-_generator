"use sctrict";

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = `It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.`

let newStory = storyText;

const insertX = ['Willy the Goblin',
                 'Big Daddy',
                 'Father Christmas'];


const insertY = ['the soup kitchen',
                 'Disneyland',
                 'the White House',];

const insertZ = ['spontaneously combusted',
                 'melted into a puddle on the sidewalk',
                 'turned into a slug and crawled away',];


let xItem;
let yItem;
let zItem;


randomize.addEventListener('click', result);

function result() {

  if(customName.value !== '') {
    const name = customName.value;

    newStory = newStory.replace('Bob', name);
  }

//   if(document.getElementById("uk").checked) {
//     const weight = Math.round(300);
//     const temperature =  Math.round(94);

//   }
   xItem = randomValueFromArray(insertX);
   yItem = randomValueFromArray(insertY);
   zItem = randomValueFromArray(insertZ);
  newStory = newStory.replace(':insertX:', xItem);
  newStory = newStory.replace(':insertX:', xItem);
  newStory = newStory.replace(':insertY:', yItem);
  newStory = newStory.replace(':insertZ:', zItem);


  story.textContent = newStory;
  story.style.visibility = 'visible';
  // randomValueFromArray(insertX);
  // randomValueFromArray(insertY);
  // randomValueFromArray(insertZ);
  return newStory = storyText;
}