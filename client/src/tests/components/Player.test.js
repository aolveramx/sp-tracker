import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Player from '../../components/Player';


describe('Tests in Player.js', () => {

  test('should render <Dashboard />', () => {

    const wrapper = shallow(<Player />)
    expect(wrapper).toMatchSnapshot()
    
  });
  
});