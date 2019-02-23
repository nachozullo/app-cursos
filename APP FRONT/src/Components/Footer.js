import React from 'react'

let style = {
    backgroundColor: "#f8f9fa",
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "10px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "50px",
    width: "100%"
}

let phantom = {
    display: 'block',
    padding: "10px",
    height: '50px',
    width: '100%'
}

function Footer() {
    return (
        <div>
            <div style={phantom} />
            <div style={style}>
                <p style={{fontSize: 16}}> &reg; <a href="https://www.dblandit.com/"> DBlandIT </a> - App Curso - 2019</p>
            </div>
        </div>
    )
}

export default Footer