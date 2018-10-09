import shuffle from 'n-shuffle';
import { wordHerHis } from './helpers/english';

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
    { name: 'baby bottle', img: '🍼' },
  ]);

  const animals = shuffle([
    { name: 'poultry leg', img: '🍗' },
    { name: 'broccoli', img: '🥦' },
    { name: 'pretzel', img: '🥨' },
    { name: 'taco', img: '🌮' },
    { name: 'hamburger', img: '🍔' },
    { name: 'bento box', img: '🍱' },
    { name: 'baby bottle', img: '🍼' },
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
          text: _s => `A ${food.name}`,
          img: _s => food.img,
          state: s => ({
            food,
            story: [...s.story, `One day, ${wordHerHis(s.hero.gender)} mother says: "Take this ${food.name} to your grandmother. She is ill and weak."`]
          })
        }))
    },
    {
      text: s => `The ${s.hero.name} set out immediately to go to her grandmother, who lived in another village.`
    },
    {
      text: s => `As she was going through the wood, she met with the...`
    }
  ];
};
