const bodyParser = require('body-parser')
const colors = require('colors')
const cors = require('cors')
const express = require('express')
const SpotifyWebApi = require('spotify-web-api-node')
require("dotenv").config()

const app = express()

app.use(cors())

app.use(bodyParser.json())

app.post( '/refresh', ( req, res ) => {

  const refreshToken = req.body.refreshToken

  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    refreshToken,
  })

  spotifyApi
    .refreshAccessToken()
    .then( data => {
    res.json({
      accessToken: data.body.accessToken,
      expiresIn: data.body.expiresIn,
    })
  })
  .catch( () => {
    res.status( 400 )
  })

})

app.post( '/login', ( req, res ) => {

  const code = req.body.code

  const spotifyApi = new SpotifyWebApi({
    redirectUri: process.env.REDIRECT_URI,
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  })

  spotifyApi
    .authorizationCodeGrant( code )
    .then( data => {
      res.json({
        accessToken: data.body.access_token,
        refreshToken: data.body.refresh_token,
        expiresIn: data.body.expires_in,
      })
    })
    .catch( () => {
      res.status( 400 )
    })

})

const PORT = process.env.PORT || 5000

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)

process.on( 'unhandledRejection', ( error, promise ) => {
  console.log( `Error: ${error.message}`.red )
  server.close( () => process.exit(1) )
})