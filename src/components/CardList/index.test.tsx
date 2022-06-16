import { shallow } from 'enzyme';
import CardList from '.';

it('expect to render Card Component', () => {
  expect(shallow(<CardList searchField="" />)).toMatchSnapshot();
});
