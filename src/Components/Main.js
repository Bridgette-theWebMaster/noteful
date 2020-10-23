import React from "react";
import Note from "./Note";
import Moment from "react-moment";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import PropTypes from "prop-types";
import { getNotesInFolder } from "./Notes-helper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Main extends React.Component {
  static defaultProps = {
    match: {
      params: {},
    },
  };
  static contextType = ApiContext;
  render() {
    const { folderId } = this.props.match.params;
    const { notes = [] } = this.context;
    const notesInFolder = getNotesInFolder(notes, folderId);
    return (
      <section id="noteMain">
        <ul>
          {notesInFolder.map((note) => (
            <li key={note.id}>
              <Note
                id={note.id}
                name={note.name}
                modified={<Moment>{note.modified}</Moment>}
              />
            </li>
          ))}
        </ul>
        <div>
          <Link to="/add-note">
            <button id="add">
              <FontAwesomeIcon icon="plus" />
              <br /> Note
            </button>
          </Link>
        </div>
      </section>
    );
  }
}

Main.propTypes = {
  match: PropTypes.object,
};
