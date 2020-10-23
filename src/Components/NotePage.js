import React from "react";
import Note from "./Note";
import ApiContext from "../ApiContext";
import PropTypes from "prop-types";
import { findNote } from "./Notes-helper";

export default class NotePage extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;

  deleteNote = (noteId) => {
    this.props.history.push(`/`);
  };

  render() {
    const { notes = [] } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, noteId) || { content: "" };
    return (
      <section id="note-content">
        <Note
          id={note.id}
          name={note.name}
          modified={note.modified}
          onDeleteNote={this.deleteNote}
        />
        <div>
          {note.content.split(/\n \r|\n/).map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </section>
    );
  }
}

NotePage.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};
