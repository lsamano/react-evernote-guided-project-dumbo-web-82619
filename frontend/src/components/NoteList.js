import React from 'react';
import NoteItem from './NoteItem';

const NoteList = ({ handleChosenNote, allNotes }) => {
  const formatNotes = allNotes.map(note => <NoteItem note={note} key={note.id} handleChosenNote={handleChosenNote} />)

  return (
    <ul>
      { formatNotes }
    </ul>
  );
}

export default NoteList;
