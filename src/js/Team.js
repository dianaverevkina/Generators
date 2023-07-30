export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new Error('Игрок уже добавлен');
    }
    this.members.add(character);
  }

  addAll(...characters) {
    characters.forEach((character) => {
      this.members.add(character);
    });
  }

  toArray() {
    return Array.from(this.members);
  }

  * [Symbol.iterator]() {
    const team = this.toArray();
    for (let i = 0; i < team.length; i++) {
      yield team[i];
    }
  }
}
