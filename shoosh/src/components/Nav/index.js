import React from "react";

function test(){
    console.log("penis")
}

function Nav(props) {

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
            <nav>
                <ul className="flex-row">
                    {
                        people.map((person) => (
                            <li className="mx-2" key={person.name}>
                                <span onClick={() => {
                                    test();
                                }}>
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