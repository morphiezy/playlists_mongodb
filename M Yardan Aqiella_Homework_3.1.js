/**
 *  PRE-REQUISITE
 *
 *  connect to local mongodb
 *  connection string : mongodb://127.0.0.1:27017
 *  commad : mongosh
 *
 *  create database "playlist_db"
 *  command : use playlist_db
 */

// 1. create add populate songs collection

const songs = [
  {
    title: "Sweet Child o' Mine",
    artist: "Guns N' Roses",
    album: "Appetite for Destruction",
  },
  {
    title: "Bohemian Like You",
    artist: "The Dandy Warhols",
    album: "Thirteen Tales from Urban Bohemia",
  },
  {
    title: "Take on Me",
    artist: "a-ha",
    album: "Hunting High and Low",
  },
  {
    title: "Dancing Queen",
    artist: "ABBA",
    album: "Arrival",
  },
  {
    title: "Stairway to Heaven",
    artist: "Led Zeppelin",
    album: "Led Zeppelin IV",
  },
  {
    title: "Purple Rain",
    artist: "Prince",
    album: "Purple Rain",
  },
  {
    title: "Clocks",
    artist: "Coldplay",
    album: "A Rush of Blood to the Head",
  },
  {
    title: "Wonderful Tonight",
    artist: "Eric Clapton",
    album: "Slowhand",
  },
  {
    title: "Thriller",
    artist: "Michael Jackson",
    album: "Thriller",
  },
  {
    title: "Don't Stop Believin'",
    artist: "Journey",
    album: "Escape",
  },
];

db.songs.insertMany(songs);

// 2. create add populate artists collection

const artists = [
  {
    name: "Guns N' Roses",
    dateOfBirth: "9 February 1962",
    genres: ["Hard Rock"],
  },
  {
    name: "The Dandy Warhols",
    dateOfBirth: "13 March 1994",
    genres: ["Alternative Rock"],
  },
  {
    name: "a-ha",
    dateOfBirth: "14 September 1959",
    genres: ["Synth-pop", "New Wave"],
  },
  {
    name: "ABBA",
    dateOfBirth: "5 April 1974",
    genres: ["Pop", "Disco"],
  },
  {
    name: "Led Zeppelin",
    dateOfBirth: "9 January 1944",
    genres: ["Rock", "Hard Rock", "Blues Rock"],
  },
  {
    name: "Prince",
    dateOfBirth: "7 June 1958",
    genres: ["Pop", "R&B", "Funk"],
  },
  {
    name: "Coldplay",
    dateOfBirth: "2 March 1996",
    genres: ["Alternative Rock", "Pop Rock"],
  },
  {
    name: "Eric Clapton",
    dateOfBirth: "30 March 1945",
    genres: ["Rock", "Blues", "Blues Rock"],
  },
  {
    name: "Michael Jackson",
    dateOfBirth: "29 August 1958",
    genres: ["Pop", "R&B", "Dance"],
  },
  {
    name: "Journey",
    dateOfBirth: "1 February 1973",
    genres: ["Rock", "Hard Rock"],
  },
];

db.artists.insertMany(artists);

// 3. create add populate popular songs collection

const popularSongs = [
  {
    title: "Sweet Child o' Mine",
    totalPlay: 1800000000,
    period: "1987-present",
  },
  {
    title: "Bohemian Like You",
    totalPlay: 500000000,
    period: "2000-present",
  },
  {
    title: "Take on Me",
    totalPlay: 1200000000,
    period: "1985-present",
  },
  {
    title: "Dancing Queen",
    totalPlay: 900000000,
    period: "1976-present",
  },
  {
    title: "Stairway to Heaven",
    totalPlay: {
      $numberLong: "2200000000",
    },
    period: "1971-present",
  },
  {
    title: "Purple Rain",
    totalPlay: 800000000,
    period: "1984-present",
  },
  {
    title: "Clocks",
    totalPlay: 1400000000,
    period: "2002-present",
  },
  {
    title: "Wonderful Tonight",
    totalPlay: 600000000,
    period: "1977-present",
  },
  {
    title: "Thriller",
    totalPlay: {
      $numberLong: "2500000000",
    },
    period: "1982-present",
  },
  {
    title: "Don't Stop Believin'",
    totalPlay: 1900000000,
    period: "1981-present",
  },
];

db.popular_songs.insertMany(popularSongs);
