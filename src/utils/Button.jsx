import React from 'react'

function Button({bg, text, color, className}) {
    return (
        <p style={{backgroundColor: bg, color: color}} className={`btn ${className}`}>
            {text}
        </p>
    )
}

export default Button