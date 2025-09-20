import UserRegistration from "./components/UserRegistration";
import {useState} from 'react';
import FeedbackUser from "./components/FeedbackUser";
export default function MainApp() {

    const [user, setUser]= useState(null);
    const handleRegistration = (formData) =>{
        setUser(formData);

    }
    return (
        <div>
            {!user ?
            <FeedbackUser onRegister ={handleRegistration} />
            :
            <h1>Welcome: {user.name} gave ratings : {user.rating}</h1>
        }
        </div>
    );
}