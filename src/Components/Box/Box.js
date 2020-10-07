import React from 'react'
import './Box.css'

export default function Box(props) {

    const style = {
        backgroundImage: `url(${props.background})`,
        backgroundSize: 'cover',
        width: 300,
        height: 125
    }

    return (
        <div className={`box-hover`}
            style={style}
            data-id={props.dataId}
        >
            <h3 data-id={props.dataId}> {props.title}</h3>
            {props.children}
        </div>
    )
}
