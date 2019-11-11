import React from 'react';
import moment from 'moment';

const NoteItem = (props) => (
  <li onClick={(e) => props.handleChosenNote(props.note)}>
    <h2>{props.note.title}</h2>
    <p>{props.note.body.substring(0, 25)}...</p>
    <p>{moment(props.note.created_at).calendar()}</p>
  </li>
);

export default NoteItem;
