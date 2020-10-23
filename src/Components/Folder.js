import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import ApiContext from "../ApiContext";
import { countNotesInFolder } from "./Notes-helper";

export default class Folder extends React.Component {
  static contextType = ApiContext;

  render() {
    const { folders = [], notes = [] } = this.context;

    return (
      <div id="navs">
        <ul>
          {folders.map((folder, i) => (
            <li key={i}>
              <NavLink className="folder-link" to={`/folder/${folder.id}`}>
                {folder.name}

                <div id="number">{countNotesInFolder(notes, folder.id)}</div>
              </NavLink>
            </li>
          ))}
        </ul>

        <Link to="/add-folder">
          <button className="new-folder">
            <FontAwesomeIcon icon="plus" />
            <br /> Folder
          </button>
        </Link>
      </div>
    );
  }
}
