// eslint-disable-next-line no-unused-vars
import React from 'react';
import { VenueContainer, } from '../components/venueComponents'
import {testData, eventData} from "../modules/TestData.js";


const Caverns = () => {
    const shows = eventData.filter((evt) => evt.eventVenue === "The Caverns");

    return (
        <VenueContainer
            name='The Caverns'
            address1='555 Charlie Roberts Rd'
            address2='Pelham, TN 37366'
            phoneNumber='(931) 516-9724'
            venueLinkTitle='Visit The Caverns'
            venueUrl='https://www.thecaverns.com/shows'
            dirUrl='https://www.google.com/maps/place/The+Caverns/@35.3316993,-85.8275488,17z/data=!3m1!4b1!4m6!3m5!1s0x886111c310305bb7:0x46316643965b270a!8m2!3d35.3316993!4d-85.8249739!16s%2Fg%2F11f31rtsmc?entry=ttu&g_ep=EgoyMDI1MDEyNi4wIKXMDSoASAFQAw%3D%3D'
            imgUrl='/caverns.jpg'
            shows={shows}
        />
    );
};

export default Caverns;