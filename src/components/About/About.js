import React from 'react'
import {Button,  Row } from 'reactstrap'


const About = props => {



    return (
        <>
            <div>
                <p className='projectDesc'>{props.bio}</p>
                <h5>Front-End</h5>
                <p>{props.skillsFront}</p>
                <h5>Back-End</h5>
                <p>{props.skillsBack}</p>
                <h5>Database</h5>
                <p>{props.skillsData}</p>
                <a href={props.resume} target='_blank'><Button className='resume' color='success'>View Resume</Button></a>
                
                
            </div>
        </>
    )

}







export default About