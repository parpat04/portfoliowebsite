import React from 'react'
import face from "./images/face.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import PDF from './images/ParthivPatelResume-Copy.pdf'
import Skill from './Skill'
import Work from './Work'
import Contact from './Contact'
import WorkArray from './WorkArray'

const Body = () => {
  const collectionWork = WorkArray.map(item => <Work key={item.id} work={item} />)
  return (
    <div className='info'>
      <div className='header'>
        <div className='pfp'>
          <img src={face} alt='face' />
        </div>
        <div className='text'>
          <p>Hello there! My name is</p>
          <h1><font color="white">Parthiv</font> Patel</h1>
          <p>A Computer Engineering student at <font color="white">Purdue University</font> and an <font color="white">aspiring software engineer</font> passionate about technology and coding.</p>
          <ul>
            <li><a href='https://www.linkedin.com/in/parthiv-patel-a2b257224/' target={"_blank"} rel="noreferrer"><FontAwesomeIcon icon={faLinkedinIn} /></a></li>
            <li><a href='http://google.com' target={"_blank"} rel="noreferrer"><FontAwesomeIcon className='git' icon={faGithub} /></a></li>
            <li><a className='resume' href={PDF} target={"_blank"} rel="noreferrer">Resumé</a></li>
          </ul>
        </div>
      </div>
      <div>
        <h4 className='some-info' id='about'> Some Info</h4>
        <h1 className='about-title'>About Me</h1>
        <div className='about-section'>As a little kid, I was always fascinated with how things in the world work, especially with the complexities of the computer.
          From providing knowledge to the fingertips of students to making finances easier through online payments and investing, I realized the true potential that computers provide to companies, organizations, and people. The first moment I was introduced to programming and cybersecurity in high school, I was fascinated and realized that I want to be a part of this in the future. I developed my skills in Java, C, React, JavaScript, and HTML and continue to make myself a better programmer. The sky is the limit for technology and computers, and I want to be a part of pushing the limit even further.</div>
      </div>
      <div>
        <h4 className='some-info' id='skills'> Check out My</h4>
        <h1 className='about-title'>Skills</h1>
      </div>
      <div className='skills-body'>
        <Skill className='skill-element' image='https://cdn-icons-png.flaticon.com/512/174/174854.png' name='HTML' />
        <Skill className='skill-element' image='https://cdn-icons-png.flaticon.com/512/732/732190.png' name='CSS' />
        <Skill className='skill-element' image='https://cdn-icons-png.flaticon.com/512/5968/5968292.png' name='JavaScript' />
        <Skill className='skill-element' image='https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Visual_Studio_Code_1.35_icon.svg/2048px-Visual_Studio_Code_1.35_icon.svg.png' name='VS Code' />
        <Skill className='skill-element' image='https://cdn-icons-png.flaticon.com/512/220/220215.png' name='Office' />
        <Skill className='skill-element' image='https://cdn-icons-png.flaticon.com/512/226/226777.png' name='Java' />
        <Skill className='skill-element' image='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/c-program-icon.png' name='C' />
        <Skill className='skill-element' image='https://cdn-icons-png.flaticon.com/512/1260/1260667.png' name='React' />
        <Skill className='skill-element' image='https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png' name='Git' />
        <Skill className='skill-element' image='https://cdn-icons-png.flaticon.com/512/6124/6124995.png' name='Linux' />
      </div>
      <div>
        <h4 className='some-info' id='work'> Take A Look at My</h4>
        <h1 className='about-title'>Work</h1>
        <div className='work-body'>
          {collectionWork}
        </div>
      </div>
      <div>
        <h4 className='some-info' id='contact'> Feel Free to</h4>
        <h1 className='about-title'>Contact</h1>
        <div className='contact-body'>
          <h2>Get in Touch</h2>
          <div className='contact-row'>
            <div className='contact-buttons'>
              <FontAwesomeIcon icon={faEnvelope} className='contact-icons' size='3x' />
              <a href='mailto:parthivpatel46143@gmail.com' target={"_blank"} rel="noreferrer">parthivpatel46143@gmail.com</a>
              <h4>Email Me</h4>
            </div>
            <div className='contact-buttons'>
              <FontAwesomeIcon icon={faLinkedinIn} className='contact-icons' size='3x'/>
              <a href='https://www.linkedin.com/in/parthiv-patel-a2b257224/' target={"_blank"} rel="noreferrer">LinkedIn</a>
              <h4>Connect With Me</h4>
            </div>
          </div>
          <div className='form'>
          <h2>Contact Form</h2>
            <Contact />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Body