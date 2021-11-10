import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Login from '../../components/Login';


describe('Tests in Login.js', () => {

  test('should render <Login />', () => {

    const wrapper = shallow(<Login />)
    expect(wrapper).toMatchSnapshot()
    
  });
  
});