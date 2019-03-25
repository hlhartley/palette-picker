import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export class ProjectCard extends Component {
  render() {
    const { project } = this.props;
    return (
      <div className="ProjectCard">
        <p className="project-name">{project.name}</p>
          <div className="palette-container">
            <p className="palette-name">Palette Name</p>
              <div className="palette-minibox">colors</div> 
              <button className="load-button"><FontAwesomeIcon icon={faEdit} className="load-icon"/></button>
              <button className="delete-button"><FontAwesomeIcon icon={faTrash} className="deelete-icon"/></button>
          </div>
        <button className="delete-project-button">Delete Project</button>
      </div>
    );
  }
}

export default ProjectCard;
