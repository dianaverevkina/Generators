import Team from '../js/Team';

test('check generation of class Team', () => {
  const generator = new Team()[Symbol.iterator]();
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
      name: 'Eva',
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
    {
      name: 'Klon',
      type: 'Zombie',
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    },
  ];
  expect(listOfChars).toEqual(expected);
});
