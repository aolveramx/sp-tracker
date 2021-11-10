import '@testing-library/jest-dom'
import { shallow } from 'enzyme'
import SearchResults from '../../components/SearchResults';


describe('Tests in SearchResults.js', () => {

  test('should render <SearchResults />', () => {

    const track = {
      albumUrl: 'https://i.scdn.co/image/ab67616d00004851f9171c2b7bab0956cdfbd1fa',
      title: 'New Lands',
      artist: 'Justice',
    }

    const chooseTrack = jest.fn()

    const wrapper = shallow(<SearchResults track={track} chooseTrack={chooseTrack} />)
    expect(wrapper).toMatchSnapshot()
    
  });
  
});