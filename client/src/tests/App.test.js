import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import App from '../App'


describe('Tests in App.js', () => {

  test('should render <App />', () => {

    const wrapper = shallow(<App />)
    expect(wrapper).toMatchSnapshot()
    
  });
  
});