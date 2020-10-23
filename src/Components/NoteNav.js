import React from "react";
import ApiContext from "../ApiContext";
import PropTypes from "prop-types";
import { findFolder, findNote } from "./Notes-helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class NoteNav extends React.Component {
  static defaultProps = {
    history: {
      goBack: () => {},
    },
    match: {
      params: {},
    },
  };

  static contextType = ApiContext;

  render() {
    const { notes, folders } = this.context;
    const { noteId } = this.props.match.params;
    const note = findNote(notes, noteId) || {};
    const folder = findFolder(folders, note.folderId);

    return (
      <div id="back-btn">
        <button onClick={() => this.props.history.goBack()}>
          <FontAwesomeIcon icon="caret-left" /> <br />
          Back
        </button>
        {folder && <h3>{folder.name}</h3>}
      </div>
    );
  }
}

NoteNav.propTypes = {
  history: PropTypes.object,
  match: PropTypes.object,
};
