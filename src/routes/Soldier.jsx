import React from 'react';
import { testData } from "../modules/TestData.js";
import { VenueContainer } from '../components/venueComponents';


const Soldier = () => {
    const shows = testData.filter((evt) => evt.eventVenue === "Soldiers and Sailors Memorial Auditorium");

    return (
        <VenueContainer
            name='Soldiers and Sailors Memorial Auditorium'
            address1='399 McCallie Ave'
            address2='Chattanooga, TN 37402'
            phoneNumber='(423) 757-5580'
            venueLinkTitle='Visit Memorial Auditorium'
            venueUrl='https://tivolichattanooga.com/memorial_auditorium'
            dirUrl='https://www.google.com/maps/dir//399+McCallie+Ave,+Chattanooga,+TN+37402/@35.0476938,-85.3881343,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x88605e65262dc6d7:0x30e7f24c45806a6e!2m2!1d-85.3056094!2d35.0476272?entry=ttu&g_ep=EgoyMDI1MDEwNi4wIKXMDSoJLDEwMjExMjMzSAFQAw%3D%3D'
            imgUrl='/memorial_bg_img.jpg'
            shows={shows}
        />
    );
};

export default Soldier;
