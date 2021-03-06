import React from "react";
import { Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import config from "../config";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default class Note extends React.Component {
  static contextType = ApiContext;

  handleClickDelete = (e) => {
    e.preventDefault();
    const noteId = this.props.id;

    fetch(`${config.API_ENDPOINT}/notes/${noteId}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        if (!res.ok) return res.json().then((e) => Promise.reject(e));
        return res.json();
      })
      .then(() => {
        this.context.deleteNote(noteId);
      })
      .catch((error) => {
        console.error({ error });
      });
  };

  render() {
    const { name, id, modified } = this.props;
    return (
      <div id="note">
        <div>
          <h2>
            <Link to={`/note/${id}`}>{name}</Link>
          </h2>
        </div>
        <div>
          Date Modified:
          <br />
          {modified}
        </div>
        <div>
          <button type="button" id="delete" onClick={this.handleClickDelete}>
            <FontAwesomeIcon icon="trash-alt" />
            <br /> Note
          </button>
        </div>
      </div>
    );
  }
}

Note.propTypes = {
  onDeleteNote: PropTypes.func,
  id: PropTypes.string,
  name: PropTypes.string,
  modified: PropTypes.object,
};
