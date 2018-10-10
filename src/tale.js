import shuffle from 'n-shuffle';
import { wordHerHis, wordSheHe } from './helpers/english';

export default () => {
  const heroes = shuffle([
    { name: 'ghost', gender: 'm', img: '👻' },
    { name: 'clown', gender: 'm', img: '🤡' },
    { name: 'robot', gender: 'm', img: '🤖' },
    { name: 'martian', gender: 'm', img: '👽' },
    { name: 'farmer', gender: 'f', img: '👩‍🌾' },
    { name: 'princess', gender: 'f', img: '👸' }
  ]);

  const foods = shuffle([
    { name: 'poultry leg', img: '🍗' },
    { name: 'broccoli', img: '🥦' },
    { name: 'pretzel', img: '🥨' },
    { name: 'taco', img: '🌮' },
    { name: 'hamburger', img: '🍔' },
    { name: 'bento box', img: '🍱' },
    { name: 'baby bottle', img: '🍼' }
  ]);

  const animals = shuffle([
    { name: 'gorilla', img: '🦍' },
    { name: 'wolf', img: '🐺' },
    { name: 'dragon', img: '🐉' },
    { name: 'snail', img: '🐌' },
    { name: 'T-Rex', img: '🦖' },
    { name: 'rooster', img: '🐓' }
  ]);

  const locations = shuffle([
    { name: 'through the forest', img: '🌲' },
    { name: 'in the meadow', img: '☘️' },
    { name: 'near the rainbow', img: '🌈' },
    { name: 'by the sea', img: '🌊' },
    { name: 'in the fields', img: '🌾' },
    { name: 'under the volcano', img: '🌋' },
    { name: 'on the other side of the mountain', img: '🏔' }
  ]);

  return [
    {
      text: _s => 'One upon a time, there was...',
      choices: _s =>
        [heroes[0], heroes[1]].map(hero => ({
          text: _s => `A ${hero.name}`,
          img: _s => hero.img,
          state: s => ({
            hero,
            story: [...s.story, `Once upon a time, there was a ${hero.name}.`]
          })
        }))
    },
    {
      text: s =>
        `The ${s.hero.name} lived with ${wordHerHis(s.hero.gender)} mother.`
    },
    {
      text: s =>
        `One day, ${wordHerHis(s.hero.gender)} mother says: "Take this..."`,
      choices: _s =>
        [foods[0], foods[1]].map(food => ({
          text: _s => food.name,
          img: _s => food.img,
          state: s => ({
            food,
            story: [
              ...s.story,
              `One day, ${wordHerHis(s.hero.gender)} mother says: ` +
                `"Take this ${food.name} to your grandmother. ` +
                `She is ill and weak."`
            ]
          })
        }))
    },
    {
      text: s =>
        `The ${s.hero.name} set out immediately to go to ` +
        `${wordHerHis(s.hero.gender)} grandmother, ` +
        `who lived...`,
        choices: _s =>
        [locations[0], locations[1]].map(location => ({
          text: _s => location.name,
          img: _s => location.img,
          state: s => ({
            location,
            story: [
              ...s.story,
              `The ${s.hero.name} set out immediately to go to ` +
                `${wordHerHis(s.hero.gender)} grandmother, ` +
                `who lived ${location.name}`
            ]
          })
        }))
    },
    {
      text: s =>
        `As ${wordSheHe(s.hero.gender)} was going through the wood, ` +
        `${wordSheHe(s.hero.gender)} met with the...`,
      choices: _s =>
        [animals[0], animals[1]].map(animal => ({
          text: _s => animal.name,
          img: _s => animal.img,
          state: s => ({
            animal,
            story: [
              ...s.story,
              `As ${wordSheHe(s.hero.gender)} was going through the wood, ` +
                `${wordSheHe(s.hero.gender)} met with the ${animal.name}!`
            ]
          })
        }))
    },
    {
      text: s => `The ${s.animal.name} says: ` +
      `"What are you doing out here, little ${s.hero.name}?"`
    },
    {
      text: s => `The ${s.hero.name} answered: ` +
      `"I'm on my way to see my Grandma who lives ${s.location.name}"`
    }
    /*
It was not long before the wolf arrived at the old woman’s house. He knocked at the door.
    */
  ];
};
