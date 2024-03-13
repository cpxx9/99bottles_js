// import { downTo } from './helpers';

class Bottles {
  constructor(name) {
    this.name = name;
  }
}

const beer = {
  verse(number) {
    console.log(`Will play Beer verse: ${number}`);
  },
  verses(start, end) {
    console.log(`Will play Beer verse: ${start} to verse: ${start}`);
  },
  song() {
    console.log(`Will play entire Beer song`);
  }
};

Object.assign(Bottles.prototype, beer);