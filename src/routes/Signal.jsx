import React from 'react';
import { VenueContainer, } from '../components/venueComponents'
import {testData} from "../modules/TestData.js";


const Signal = () => {
const shows = testData.filter((evt) => evt.eventVenue === "The Signal");

    return (
        <VenueContainer
            name='The Signal'
            address1='21 Choo Choo Ave'
            address2='Chattanooga, TN 37402'
            phoneNumber='(423) 498-4700'
            venueLinkTitle='Visit The Signal'
            venueUrl='https://www.thesignaltn.com/'
            dirUrl='https://www.google.com/maps?sca_esv=519e96c50f78252e&sxsrf=ADLYWIJVKAFjg6pKeHPjyHkNSjpsHGAiKw:1736278875558&gs_lp=Egxnd3Mtd2l6LXNlcnAiC3RoZSBzaWduYWwgKgIIADIOEC4YgAQYxwEYjgUYrwEyDRAuGIAEGLEDGEMYigUyBRAAGIAEMhAQABiABBixAxhDGIMBGIoFMhAQABiABBixAxhDGIMBGIoFMhAQLhiABBixAxhDGIMBGIoFMgoQLhiABBhDGIoFMgoQABiABBhDGIoFMgUQABiABDIFEAAYgAQyHRAuGIAEGMcBGI4FGK8BGJcFGNwEGN4EGOAE2AEBSJoMUPABWPABcAF4AZABAJgBb6ABb6oBAzAuMbgBAcgBAPgBAZgCA6AC3wrCAgoQABiwAxjWBBhHwgINEAAYgAQYsAMYQxiKBcICGRAuGIAEGLADGEMYxwEYyAMYigUYrwHYAQHCAhMQLhiABBiwAxhDGMgDGIoF2AEBmAMAiAYBkAYRugYGCAEQARgIkgcHMS4xLjctMaAHhQ8&um=1&ie=UTF-8&fb=1&gl=us&sa=X&geocode=KUU4FbkqXGCIMerlej_bWcyz&daddr=21+Choo+Choo+Ave,+Chattanooga,+TN+37402'
            imgUrl='/signal_bg_img.gif'
            shows={shows}
        />
    );
};

export default Signal;