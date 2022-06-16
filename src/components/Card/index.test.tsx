import { shallow } from 'enzyme';
import Card from '.';

it('expect to render Card Component', () => {
  expect(shallow(<Card monster={{ id: 1, name: 'Hola', email: 'Hola' }} />)).toMatchSnapshot();
});
