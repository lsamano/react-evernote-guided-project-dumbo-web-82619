import React, { Component } from 'react';
import NoteList from './NoteList';

class Sidebar extends Component {
  render() {
    return (
      <div className='master-detail-element sidebar'>
        <button onClick={this.props.makeNewNote}>New</button>
        <NoteList 
        allNotes={this.props.allNotes} 
        handleChosenNote={this.props.handleChosenNote} />
      </div>
    );
  }
}

export default Sidebar;
