import React from 'react';
import ProjectControls from '../../containers/ProjectControls/ProjectControls';
import Search from '../../containers/Search/Search';
import ProjectList from '../../containers/ProjectList/ProjectList';

export const ProjectSection = () => {
    return (
        <div className="ProjectSection">
            <div className="subheading-container">
                <h2 className="project-header">PROJECT</h2>
            </div>
            <div className="content-container">
                <ProjectControls/>
                <Search/>
                <ProjectList/>
            </div>
        </div>
    )
}

export default ProjectSection;