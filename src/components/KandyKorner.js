import React from "react"
import { LocationList } from "./locations/LocationList"





export const KandyKorner = () => (
    <>

    
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <article className="animals">
            
        </article>
        <article>
            <LocationList />
        </article>
    </>
)