const storyText = `It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.`;


let subArray = storyText.split(':');

console.log(subArray);

console.log(subArray.length);

let x = subArray.replace(subArray[2], 'PAPA');

console.log(x)




