import React from 'react';
import { testData, eventData } from "../modules/TestData.js";
import {VenueContainer} from "../components/venueComponents/index.jsx";

const Barrelhouse = () => {
    const shows = eventData.filter((evt) => evt.EventVenue === "The Barrel House Ball Room")
        .map(evt => {
            return {
                eventVenue: 'Barrelhouse Ballroom',
                eventArtist: evt.EventArtist,
                eventDate: evt.EventDate,
                eventTime: evt.EventTime,
                eventLink: evt.EventLink,
                eventImgSrc: evt.EventImgSrc,
            };
        });

    console.log(shows);

    return (
        <VenueContainer
            name='Barrelhouse Ballroom'
            address1='1501 Long St'
            address2='Chattanooga, TN 37408'
            phoneNumber='(423) 541-5300'
            venueLinkTitle='Visit Barrelhouse Ballroom'
            venueUrl='https://www.barrelhouseballroom.com/'
            dirUrl='https://www.google.com/maps/place/Barrelhouse+Ballroom/@35.0363136,-85.308675,17z/data=!3m1!4b1!4m6!3m5!1s0x88605d501ab2be7b:0x4e984e1fb4ba2008!8m2!3d35.0363136!4d-85.308675!16s%2Fg%2F11s4_sbrqf?entry=ttu&g_ep=EgoyMDI1MDIwMy4wIKXMDSoASAFQAw%3D%3D'
            imgUrl='/barrelhouse.jpg'
            shows={shows}
        />
    );
};

export default Barrelhouse;