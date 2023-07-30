import Character from './Character';

export default class Team {
  * [Symbol.iterator]() {
    yield new Character('Ivan', 'Bowman');
    yield new Character('Eva', 'Undead');
    yield new Character('Mor', 'Magician');
    yield new Character('Klon', 'Zombie');
  }
}
