import { useEffect, useState } from 'react';
import { Monster } from 'src/types';
import { getData } from 'src/utils/general';
import { filterMonsters } from '../../utils';
import Card from '../Card';
import './styles.css';

interface Props {
  searchField: string;
}

const CardList: React.FC<Props> = ({ searchField = '' }) => {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [filteredMonsters, setFilteredMonsters] = useState<Monster[]>([]);

  useEffect(() => {
    const main = async () => {
      const monsters = await getData<Monster[]>('https://jsonplaceholder.typicode.com/users');
      setMonsters(() => monsters);
    };
    main();
  }, []);

  useEffect(() => {
    setFilteredMonsters(() => filterMonsters(monsters, searchField));
  }, [searchField, monsters]);

  return (
    <div className="card-list">
      {filteredMonsters.map((monster) => (
        <Card key={monster.id} monster={monster} />
      ))}
    </div>
  );
};

export default CardList;
