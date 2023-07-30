import Team from '../js/Team';
import Character from '../js/Character';

test('Adding characters to set - error(character has already added)', () => {
  const team = new Team();
  const hero = new Character('Ivan', 'Bowman');
  team.add(hero);
  expect(() => {
    team.add(hero);
  }).toThrow('Игрок уже добавлен');
});

test('Create array from set - works', () => {
  const team = new Team();
  team.add(new Character('Ivan', 'Bowman'));
  team.add(new Character('Igor', 'Undead'));
  const expected = [
    {
      name: 'Ivan',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Igor',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(team.toArray()).toEqual(expected);
});

test('check generation of class Team', () => {
  const team = new Team();
  const hero1 = new Character('Ivan', 'Bowman');
  const hero2 = new Character('Igor', 'Undead');
  const hero3 = new Character('Mor', 'Magician');

  team.addAll(hero1, hero2, hero3);

  const generator = team[Symbol.iterator]();
  const listOfChars = [...generator];
  const expected = [
    {
      name: 'Ivan',
      type: 'Bowman',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Igor',
      type: 'Undead',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
    {
      name: 'Mor',
      type: 'Magician',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(listOfChars).toEqual(expected);
});
