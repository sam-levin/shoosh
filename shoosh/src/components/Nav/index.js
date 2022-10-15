import React from "react";

function Nav() {
    const people = [
        {
            name: "Sam"
        },
        {
            name: "Carson"
        },
        {
            name: "Bailey"
        }
    ]
    return(
        <header>
            <h2>
                <a href="/">
                    <span role="img" aria-label="camera"> 📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className="flex-row">
                    <li>
                    <span>Contact</span>
                    </li>
                    {
                        people.map((person) => (
                            <li className="mx-2" key={person.name}>
                                <span>
                                    {person.name}
                                </span>
                            </li>
                        ))
                    }
                </ul>
            </nav>
      </header>
    )
}

export default Nav;