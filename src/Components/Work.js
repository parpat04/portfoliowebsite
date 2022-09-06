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
                        <li><span>{props.work.one}</span></li>
                        <li><span>{props.work.two}</span></li>
                        <li><span>{props.work.three}</span></li>
                    </ul>
                </div>
            </div>
            <div className='bottom-work'>
            </div>
        </div>
    )
}

export default Work