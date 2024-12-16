

const url = 'https://localhost:44373/api/Events';



const fetchEvents = async () => {
   const res = await fetch(url,{
        method: 'GET',
        mode: 'cors',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        }
    });

    return res;

    // console.log(res.ok ? res.data.json() : "No Events Found");


}




export {
    fetchEvents,
};























