import React from "react"
import '../style.css'

export default function Header() {
    return (
        <header className="header">
            <img 
                src="../images/troll-face.png"
                className="header--image"
            />
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--projectCreator">By Saeed Ameen</h4>
        </header>
    )
}