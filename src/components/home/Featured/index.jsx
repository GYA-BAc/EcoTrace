import React from "react"

import "./style.css"

export default function Featured() {
    return <section className={"featured-section"} >
        <div className="container">

            <div className="box" data-scroll>
                <div className="featured-content">
                    {/*edit image in this box from css*/}
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="featured-content">
                    <p>"It's awesome!" - Hackathon Judge</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="featured-content">
                    <img src="assets/Winners.png"></img>
                    <p>1st Place Winner of the 2023 Code Crew Hackathon</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="featured-content">
                    <img src="assets/bottle.png"></img>
                    <p>Less than 91% of recyclable materals are handled properly.</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="featured-content">
                    <p>Using AI to change the world!</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="featured-content">
                    <img src="assets/Recycle.png"></img>
                    <p>It is estimated that up to 8 million metric tons of plastic reach the planet’s oceans each year.</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="featured-content">
                    <img src="assets/turtle.png"></img>
                    <p>A turtle has a 22% chance of dying if it eats just one piece of plastic.</p>
                </div>
            </div>

            <div className="box" data-scroll>
                <div className="featured-content">
                    <p>"If we can convince even a fraction of people to recycle more, think about how much impact that could have."</p>
                </div>
            </div>

            
                

        </div>
    </section>
}