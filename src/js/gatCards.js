const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  };
  
  export default function getRandomImages(allImages, gameCardsNum) {
    let len = allImages.length,
      taken = [];
    let tempArr = [];
    let random;
  
    while (gameCardsNum--) {
      do {
        random = getRandomInt(0, len - 1);
      } while (tempArr.includes(random));
      taken.push(allImages[random]);
      tempArr.push(random);
    }
    return taken;
  }