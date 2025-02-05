import React from 'react';
import {testData} from "../modules/TestData.js";
import {VenueContainer} from "../components/venueComponents/index.jsx";

const BarkingLegs = () => {

    const shows = testData.filter((evt) => evt.eventVenue === "The Barking Legs Theater").map(evt => {
        evt.eventDate = new Date(evt.eventDate);
        return evt;
    })
        .sort(((a,b) => a.eventDate - b.eventDate))
        .map(evt => {
            evt.eventDate = evt.eventDate.toLocaleString('default',{day: 'numeric', month: 'numeric', year: 'numeric'});
            return evt;
        })
    ;
    console.log(shows)

    return (
        <VenueContainer
            name='Barking Legs Theater'
            address1='1501 Long St'
            address2='Chattanooga, TN 37408'
            phoneNumber='(423) 541-5300'
            venueLinkTitle='Visit The Barking Legs Theater'
            venueUrl='https://www.barkinglegs.org/'
            dirUrl='https://www.google.com/maps/place/Barrelhouse+Ballroom/@35.0363136,-85.308675,17z/data=!3m1!4b1!4m6!3m5!1s0x88605d501ab2be7b:0x4e984e1fb4ba2008!8m2!3d35.0363136!4d-85.308675!16s%2Fg%2F11s4_sbrqf?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D'
            imgUrl='/barking_legs_2.jpg'
            shows={shows}
        />
    );
};

export default BarkingLegs;
















































