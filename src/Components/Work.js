import React from 'react'
import '../Components/styles.css'

const Work = (props) => {
    return (
        <div className='work-element'>
            <div className='top-work'>
                <img src={props.work.image} alt='ipserlab' />

                <div>
                    <h2>{props.work.name}</h2>
                    <h3> Technologies Used: {props.work.tech}</h3>
                    <ul>
                        <li>{props.work.one}</li>
                        <li>{props.work.two}</li>
                        <li>{props.work.three}</li>
                    </ul>
                </div>
            </div>
            <div className='bottom-work'>
                <a>Live</a>
                <a>Repo</a>
            </div>
        </div>
    )
}

const workarr = [
    {
        id: "1",
        image: "https://avatars.githubusercontent.com/u/31045354?v=4",
        name: "IpserLab Summer Internship",
        tech: "React, Java, Tomcat, Node",
        one: "Developed React code for a professional web conferencing application",
        two: "Created a solution to bypass a CORS issue by developing a proxy server",
        three: "Managed and assigned responsibilities for a group of interns"

    }
]

export default Work