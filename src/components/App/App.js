import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import SearchBar from  '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      SearchResults: ['name', 'artist', 'album', 'id'],
      playlistName: 'Playlist1',
      playlistTracks: ['name', 'artist', 'album', 'id']
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
}

search(term){
  console.log(term);
}

  render() {
    return (
        <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App" />
          <SearchBar search={this.state.search} />
          <div className="App-playlist" />
            <SearchResults searchresults={this.state.SearchResults} onAdd={this.addTrack} />
            <Playlist playlist={this.state.playlistName} playlisttracks={this.state.playlistTracks} onRemove={this.state.onRemove} onNameChange={this.state.updatePlaylistName} onSave={this.state.savePlaylist} />
      </div>
    );
  }
}

export default App;
