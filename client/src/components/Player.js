import { useEffect, useState } from 'react'
import SpotifyPlayer from 'react-spotify-web-playback'
import { MarginTop1 } from './styles/layout/MarginTop1.styled'

const Player = ({ accessToken, trackUri }) => {
  const [play, setPlay] = useState(false)

  useEffect(() => setPlay(true), [trackUri])

  if (!accessToken) return null

  return (
    <MarginTop1>
      <SpotifyPlayer
        token={accessToken}
        showSaveIcon
        callback={state => {
          if (!state.isPlaying) setPlay(false)
        }}
        play={play}
        uris={trackUri ? [trackUri] : []}
        styles={{
          activeColor: '#fff',
          color: '#fff',
          sliderColor: '#33CC33',
          sliderHandleColor: '#fff',
          sliderTrackColor: '#666',
          trackArtistColor: '#ccc',
          trackNameColor: '#fff',
        }}
      />
    </MarginTop1>
  )
}

export default Player
