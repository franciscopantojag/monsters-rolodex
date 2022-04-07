import { Monster } from 'src/types';
import './styles.css';

interface Props {
  monster: Monster;
}

const Card: React.FC<Props> = ({ monster: { id, name, email } }) => (
  <div className="card-container" key={id}>
    <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
    <h1>{name}</h1>
    <p>{email}</p>
  </div>
);

export default Card;
