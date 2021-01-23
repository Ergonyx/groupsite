import React from 'react';
import { useHistory } from 'react-router-dom';

import Tag from 'antd/es/tag'

const colors = [ 'pink', 'red', 'yellow', 'orange', 'cyan', 'green', 'blue', 'purple', 'geekblue', 'magenta', 'volcano', 'gold', 'lime']

const getRandomVariant = () => colors[Math.floor(Math.random()*colors.length)]

const renderTechStack = (techStackAsString) => (
  <div>
    {techStackAsString.split(',').map(tech =>
      <Tag key={`${tech}-badge`} color={getRandomVariant()} style={{marginRight: "20px"}}> {tech} </Tag>
    )}
  </div>)

const projectClicked = (history, projectId) => history.push(`/projects/${projectId}`)

const ProjectSummary = (props) => {
  const project = props.props
  const stack = project.selected_stack || ''
  let history = useHistory();

  return (
    <div onClick={() => projectClicked(history, project.id)} className={'project-summary'}>
      <h3 className={'centered-text'}><b>{project.name}</b></h3>
      <p> {project.description} </p>
      {renderTechStack(stack)} <br/>
    </div>
  )
}

export default ProjectSummary