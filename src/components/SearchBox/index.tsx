import { SetSearchField } from 'src/types';
import './styles.css';

interface Props {
  placeholder: string;
  setSearchField: SetSearchField;
  className: string;
}

const SearchBox: React.FC<Props> = ({ placeholder, setSearchField, className }) => {
  const onSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {
      target: { value },
    } = event;
    const searchField = value.toLowerCase();
    setSearchField(() => searchField);
  };

  return (
    <>
      <input placeholder={placeholder} type="search" onChange={onSearchChange} className={`search-box ${className}`} />
    </>
  );
};

export default SearchBox;
