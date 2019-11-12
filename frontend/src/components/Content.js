import React, { Component } from 'react';
import NoteEditor from './NoteEditor';
import NoteViewer from './NoteViewer';
import Instructions from './Instructions';

class Content extends Component {

  renderContent = () => {
    switch (this.props.mode) {
      case "edit":
        return <NoteEditor chosenNote={this.props.chosenNote} toggleMode={this.props.toggleMode} patchNoteInAllNotes={this.props.patchNoteInAllNotes} />;
      case "view":
        return <NoteViewer chosenNote={this.props.chosenNote} toggleMode={this.props.toggleMode} deleteNote={this.props.deleteNote} />;
      default:
        return <Instructions />;
    }
  }

  render() {
    return (
      <div className='master-detail-element detail'>
        {this.renderContent()}
      </div>
    );
  }
}

export default Content;
