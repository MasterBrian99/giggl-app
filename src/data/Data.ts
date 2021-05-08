export const categoryItem = [
  'Programming',
  'Miscellaneous',
  'Dark',
  'Pun',
  'Spooky',
  'Christmas',
];

const randomName = [
  'Robbie Copen',
  'Minta Seago',
  'Daina Yerkes',
  'Tad Crume',
  'Oleta Umfleet',
  'Christene Pacelli',
  'Millie Mcmiller',
  'Latosha Raymer',
  'Syreeta Zehnder',
  'Mia Cronin',
  'Lanny Riggan',
  'Fredric Besse',
  'Fern Nicol',
  'Jeri Nordahl',
  'Wyatt Etherton',
  'Garrett Buch',
  'Katharyn Coombe',
  'Beulah Nolette',
  'Blair Ricklefs',
  'Ignacio Wertz',
];

export const generateRandomName = () => {
  // eslint-disable-next-line no-bitwise
  return randomName[(randomName.length * Math.random()) | 0];
};
