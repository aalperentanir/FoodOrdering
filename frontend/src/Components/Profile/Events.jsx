import React from "react"
import EventCard from "./EvenetCard"


export const Events = () => {
    return(
        <div className="mt-5 px-5 flex flex-wrap gap-5">

            {[1,1,1,1].map((item)=><EventCard/>)}

        </div>
    )
}

export default Events