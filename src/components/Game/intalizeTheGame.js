const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
};

const getSecondIndex = (arr, min, max) => {
  let randomIndex;

  do {
    randomIndex = getRandomInt(min, max);
  } while (arr[randomIndex]);
  return randomIndex;
};
const fillGameArray = (arrLength) => {
  let val = 0,
    randomInt;
  const numberOfImages = 39;
  let arr = [...Array(arrLength)].map((x) => val);
  let pickedImages = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i]) continue;
    do {
      randomInt = getRandomInt(1, numberOfImages);
    } while (pickedImages.includes(randomInt));
    pickedImages.push(randomInt);
    let secondIndex = getSecondIndex(arr, i + 1, arrLength - 1);
    arr[i] = randomInt;
    arr[secondIndex] = randomInt;
  }
  return arr;
};

export default fillGameArray;
