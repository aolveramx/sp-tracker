import { useEffect, useState } from 'react'
import Player from './Player'
import SpotifyWebApi from 'spotify-web-api-node'
import SearchResults from './SearchResults'
import useAuth from '../hooks/useAuth'

import { Grid2 } from './styles/Dashboard/Grid2.styled'
import { Container } from './styles/layout/Container.styled'
import { Form } from './styles/Dashboard/Form.styled'
import { SearchBar } from './styles/Dashboard/SearchBar.styled'
import { TrackSearchResultContainer } from './styles/Dashboard/TrackSearchResultContainer.styled'

const spotifyApi = new SpotifyWebApi({
  clientId: process.env.REACT_APP_CLIENT_ID,
})

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code)
  const [search, setSearch] = useState('')
  const [searchResults, setSearchResults] = useState([])
  const [playingTrack, setPlayingTrack] = useState()

  const chooseTrack = track => {
    setPlayingTrack(track)
    setSearch('')
  }

  useEffect(() => {
    if (!accessToken) return
    spotifyApi.setAccessToken(accessToken)
  }, [accessToken])

  useEffect(() => {
    if (!search) return setSearchResults([])
    if (!accessToken) return

    let cancel = false

    spotifyApi.searchTracks(search).then(res => {
      if (cancel) return
      setSearchResults(
        res.body.tracks.items.map(track => {
          const smallesAlbumImage = track.album.images.reduce(
            (smallest, image) => {
              if (image.height < smallest.height) return image
              return smallest
            },
            track.album.images[0]
          )

          return {
            artist: track.artists[0].name,
            title: track.name,
            uri: track.uri,
            albumUrl: smallesAlbumImage.url,
          }
        })
      )
    })

    return () => (cancel = true)
  }, [search, accessToken])

  const handleSearch = e => {
    setSearch(e.target.value)
  }

  return (
    <Container>
      <Grid2>
        <div>
          <Form>
            <SearchBar
              type='search'
              placeholder='Search Songs'
              value={search}
              onChange={handleSearch}
            />
          </Form>

          <TrackSearchResultContainer>
            {searchResults.map(track => {
              return (
                <SearchResults
                  track={track}
                  key={track.uri}
                  chooseTrack={chooseTrack}
                />
              )
            })}
          </TrackSearchResultContainer>
        </div>

        <div>
          <Player accessToken={accessToken} trackUri={playingTrack?.uri} />
        </div>
      </Grid2>
    </Container>
    
  )
}

export default Dashboard
