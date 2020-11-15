import React from 'react'
import '../../style.css'
import { Button } from 'reactstrap'
import me from '../../photos/me.jpg'

const Home = () => {
  return (
    <>
      <h2 className='myName'>Nice to meet you! My name is Eric.</h2>
      <img className='myPicture' src = {me} alt='Eric Park'/>
      <h5 className='jobTitle'>Full-Stack Web Developer</h5>
      <hr />
      <div>
        <section className="col-12">
          <a name='about'></a>
          <h1>About Me</h1>
          <p>
            Hello, my name is Eric Park and I am a Full-Stack Web Developer as well as a recent graduate of the UCI Coding Bootcamp.
                            <br />
            {/* <p><Button className='col-4' color="success"><a href="https://docs.google.com/document/d/1fhR-W9pTb3rxZCmACeilp7PmBP4LjCNYnFZe8KachOY/edit?usp=sharing" className="btn btn-success" target='_blank'> Online Resume</a></Button></p>
                            <p><Button className='col-4' color ='info'><a href="https://www.linkedin.com/in/eric-park-7122821b6/" className="btn btn-info" target='_blank'>Linkedin</a></Button></p>
                            <p><Button className='col-4' color ='secondary'><a href="https://github.com/E-Park8" className="btn btn-secondary" target='_blank'>Github Profile</a></Button> </p> */}
          </p>
        </section>
        

        <section>
          <a name='projects'></a>
          <h1>Projects</h1>


        </section>



        <section className='socials text-center'>
          <a name='contact'></a>
          <div>
          <h1>Contact Me!</h1>

          <a target='_blank' href="https://www.linkedin.com/in/eric-park-7122821b6/"><img className="logo" src="https://freeiconshop.com/wp-content/uploads/edd/linkedin-outline.png" title='Linkedin' alt="linkedin" /></a>

          
          <a href="mailto:epark0995@gmail.com"><img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/115/115757.svg" title='Email' alt="email" /></a>
          
          <a target='_blank' href="https://github.com/E-Park8/"><img className="logo" src="https://www.flaticon.com/svg/static/icons/svg/25/25231.svg" title='Github' alt="github" /></a>

          <h5 className='phone'><a href="tel:562-519-8425">(562)-519-8425</a></h5>
          
          </div>

        </section>
</div>

      
    </>
  )
}

export default Home