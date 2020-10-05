import React from 'react'

export default function Box(props) {
    return (
        <div style={{border: "1px solid green",
         backgroundImage: `url(${props.background})`,
         backgroundSize: 'cover'  }}>
            {props.children}
        </div>
    )
}
