import UserRegistration from "./components/UserRegistration";
import { useState } from 'react';
import FeedbackUser from "./components/FeedbackUser";
export default function MainApp() {

    const [user, setUser] = useState(null);
    const [feedbacks, setFeedbacks] = useState([]);
    const handleRegistration = (formData) => {
        setUser(formData);

    }

    const handleFeedBacks = (feedback) => {
        setFeedbacks([...feedbacks, feedback]);
    }
    return (
        <div>
            {/* {!user ?
            <FeedbackUser onRegister ={handleFeedBacks} />
            :
            <h1>Welcome: {user.name} gave ratings : {user.rating}</h1>
             */}
            {/*Feedback forms */}
            <FeedbackUser onRegister={handleFeedBacks}/>

            {
                feedbacks.length > 0 ?
                    feedbacks.map((fb, index) => (
                        <div
                            key={index}
                            style={{
                                border: "1px solid gray",
                                marginBottom: "10px",
                                padding: "10px",
                            }}
                        >
                            <h4>
                                {fb.name} ({fb.email})
                            </h4>
                            <p>Rating: {fb.rating}</p>
                            <p>{fb.message}</p>


                        </div>
                    )

                    )
                    : <p style={{ color: "red" }}>No feedbacks submitted yet</p>
            }

        </div>
    );
}