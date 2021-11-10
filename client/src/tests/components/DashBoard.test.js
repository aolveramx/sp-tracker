import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import Dashboard from '../../components/Dashboard';


describe('Tests in Dashboard.js', () => {

  test('should render <Dashboard />', () => {

    const wrapper = shallow(<Dashboard />)
    expect(wrapper).toMatchSnapshot()
    
  });
  
});