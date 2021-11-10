import { AlbumTrackImage } from './styles/SearchResults/AlbumTrackImage.styled'
import { TrackList } from './styles/SearchResults/TrackList.styled'
import { TrackListContainer } from './styles/SearchResults/TrackListContainer.styled'
import { TextMuted } from './styles/layout/TextMuted.styled'

const SearchResults = ({ track, chooseTrack }) => {
  const handleTrack = () => {
    chooseTrack(track)
  }

  return (
    <TrackList onClick={handleTrack}>
      <AlbumTrackImage src={track.albumUrl} />
      <TrackListContainer>
        <div>{track.title}</div>
        <TextMuted>{track.artist}</TextMuted>
      </TrackListContainer>
    </TrackList>
  )
}

export default SearchResults
