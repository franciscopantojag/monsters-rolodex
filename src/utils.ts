import { Monster } from 'src/types';

export const filterMonsters = (originalMonsters: Monster[], searchField: string) => {
  if (searchField === '') return originalMonsters;
  return originalMonsters.filter((monster) => {
    const { name } = monster;
    return name.toLowerCase().includes(searchField);
  });
};
