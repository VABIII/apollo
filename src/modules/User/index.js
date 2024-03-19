import axios from "axios";




const userLoginCall = async (credentials) => {

    const baseUrl = process.env.REACT_APP_BASE_URL;
    const user = {
        firstName: "Caroline",
        lastName: "Martin",
        email: "cmartin@gmail.com",
        password: "Marley81."
    }
    let currentUser ={}

    return await axios.post(`https://localhost:44308/api/Authentication/Login`, user)
        .then(res => {
            const {userId, token, email, firstName, lastName} = res.data;
            localStorage.setItem("token", token);
            currentUser = {userId, email, firstName, lastName};
            console.log(currentUser);

            return currentUser;
        })
        .catch(e => console.error(e))

}

export {userLoginCall};










































