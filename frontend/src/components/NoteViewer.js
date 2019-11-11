import React, { Fragment } from 'react';
import moment from 'moment';

const NoteViewer = ({ chosenNote, toggleMode }) => {
  return (
    <Fragment>
      <h2>{chosenNote.title}</h2>
      <h5>{moment(chosenNote.created_at).calendar()}</h5>
      <p>{chosenNote.body}</p>
      <button onClick={event => toggleMode("edit")}>Edit</button>
    </Fragment>
  );
}

export default NoteViewer;
