import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from  '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'
import Spotify from '../../util/Spotify'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      searchResults: [],
      playlistName: 'Playlist1',
      playlistTracks: []
  }
  this.addTrack = this.addTrack.bind(this);
  this.updatePlaylistName = this.updatePlaylistName.bind(this);
  this.savePlaylist = this.savePlaylist.bind(this);
  this.search = this.search.bind(this);
}

addTrack(track){
  if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
    return;
  }
}

updatePlaylistName(name){
  this.state.playlist = name
}

savePlaylist(){
  let trackURIs = this.state.playlistTracks.map(track => track.uri)
  Spotify.savePlaylist(this.state.playlistName, trackURIs);
    this.setState({
      searchResults: []
    });
    this.updatePlaylistName('My playlist');
    console.info(trackURIs);
}

search(term){
  Spotify.search(term)
      .then(results => this.setState({
        searchResults: results
      }));
}

render() {
  return (
      <div>
      <h1>Ja<span className="highlight">mmm</span>ing</h1>
      <div className="App" />
        <SearchBar search={this.state.search} />
        <div className="App-playlist" />
          <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
          <Playlist playlist={this.state.playlistName} playlisttracks={this.state.playlistTracks} onRemove={this.onRemove} onNameChange={this.updatePlaylistName} onSave={this.savePlaylist} />
    </div>
  );
}
}

export default App;
