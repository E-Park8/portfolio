import React from 'react'
import {Button,  Row } from 'reactstrap'


const Project = props => {



    return (
        <>
            <Row>
                <div className='col-4'>
                <img className="projectPhoto" src={props.image} alt={props.name}/>
                </div>
                <div className='col-8'>
                    <h1 className='projectName'>{props.name}</h1>
                    <p className='projectDesc'>{props.description}</p>
                    <p className='projectDesc'>{props.tech}</p>
                    <p className='text-center'> <a className="deployedLink" href={props.repo} target='_blank'><Button className='repo' color="success">Github Repository</Button></a> {''}
                    <a className="deployedLink" href={props.link} target='_blank'><Button className='repo' color="success">Deployed App</Button></a> </p>
                </div>
            </Row>
        </>
    )

}







export default Project