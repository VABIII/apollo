import React, { useState, useCallback } from "react";
import { fetchEvents } from "../../helpers/eventHelpers.jsx";
import constate from "constate";


const CreateContext = () =>{
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState([]);
    console.log(events)


    return {
        loading: loading,
        events,
        setEvents,
        fetchTodaysEvents: async () => {
            try{
                setLoading(true);
                const res = await fetchEvents();
                let eventList;

                if(res.status === 200){
                    eventList = await res.json()
                }

                setEvents(eventList.eventsList);
            }
            catch(err){
                console.error(err);
            }
            finally {
                setLoading(false);
            }

        }
    }
}


const [EventsProvider, useEvents
] = constate(CreateContext,
    value => ({
        events: value.events,
        setEvents: value.setEvents,
        fetchTodaysEvents: value.fetchTodaysEvents,
    })
    );

export {
    useEvents,
}

export default EventsProvider;









































