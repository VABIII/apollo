import axios from "axios";




const userLoginCall = async (credentials) => {
    let baseURL = process.env.BASE_URL;


    return await axios.get(`https://localhost:44308/api/Users/1/${credentials.username}/${credentials.password}`
        )
        .then(res => {
            console.log(res.data)
        })
        .catch(e => console.error(e))

}

export {userLoginCall};










































