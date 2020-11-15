import React from 'react'
import '../../style.css'
import {Row, Container} from 'reactstrap'
import About from '../../components/About'
import Project from '../../components/Project'
import me from '../../photos/me.jpg'
import plyr from '../../photos/logo.jpg'

const Home = () => {
  return (
    <>


        <div className='intro'>
      <h2 className='myName'>Nice to meet you! My name is Eric.</h2>
      <img className='myPicture' src={me} alt='Eric Park' />
      <h5 className='jobTitle'>Full-Stack Web Developer</h5>
          </div>


      <div>
      <Container>
        <section className="col-12 aboutMe">
          <a name='about'></a>
          <h1 className='center'>About Me</h1>
          <p>
            <About 
            bio={'Hello, my name is Eric Park and I am a Full-Stack Web Developer based in Long Beach, CA as well as a recent graduate of the UCI Coding Bootcamp. My primary strengths lie in database knowledge and back-end development.'}
            skillsFront={'HTML5, CSS3, Javascript, jQuery, React.js, Handlebars.js, AJAX, REST API'}
            skillsBack={'Node.js, Python3, Express.js, Axios, Sequelize, Mongoose'}
            skillsData={'MySQL, MongoDB'}
            resume={'https://docs.google.com/document/d/1fhR-W9pTb3rxZCmACeilp7PmBP4LjCNYnFZe8KachOY/edit?usp=sharing'}
            />          
          </p>
        </section>
</Container>

        <section className='col-12'>
          <a name='projects'></a>
          <h1>Projects</h1>
          <Row>
            <div className='project'>
              <Project
                name={'Plyr-2'}
                tech={'This application was made using React.js for the front-end. Express.js was used to setup the server and Node.js was used for all back-end development. We utilized MongoDB for our database. Additionally, we make use of socket.io for a chat feature.'}
                description={'Plyr-2 is the perfect social media application for gamers to find others with similar interests in games, genres, and consoles. Users can create a profile which they can then customize with favorite games, avatars, and even add highlight clips. Using a matching algorithm, this app will find other gamers that share similar interests who you can then add as friends!'}
                link={'https://plyr-2.herokuapp.com/'}
                repo={'https://github.com/mattjavier/plyr-2'}
                image={plyr}


              />

            </div>
          </Row>
          <br />
          <Row>
            <div className='project'>

              <Project
                name={'Busks in Town'}
                tech={'This application uses node and express to set up the server and back-end. All data was organized using MySQL. Front-end is rendered using Handlebars.js'}
                description={'We wanted to emulate the feel for the app BandsinTown by specifically catering to street performers also known as Buskers. Using this app, artists can create profiles with descriptions and social media links. The main draw of this application is that users can post when and where they will be performing so people in the area can catch a live show while also supporting smaller artists.'}
                link={'https://guarded-crag-60613.herokuapp.com/'}
                repo={'https://github.com/datrimboli/BusksInTown'}
                image={'https://guarded-crag-60613.herokuapp.com/photos/mainPhoto.jpg'}

              />

            </div>
          </Row>
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