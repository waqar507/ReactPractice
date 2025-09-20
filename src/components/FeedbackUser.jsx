import { useState } from 'react';

export default function FeedbackUser({ onRegister }) {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        feedback: '',
        rating: ''
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.name === "" && formData.email === "") {
            setError("Name & Email Fields must have a value");
            return;
        }

        setError("");  // clear error first

        // ✅ Notify parent
        onRegister(formData);

        setFormData({
            name: '',
            email: '',
            feedback: '',
            review: ''
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>User Feedback Form</h2>
                <div>
                    <label>Full Name:</label>
                    <input
                        type="text"
                        name="name"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={handleChange}

                    />
                </div>

                <div>
                    <label>Email Address:</label>
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter your email address"
                        value={formData.email}
                        onChange={handleChange}

                    />
                </div>

                <div>
                    <label>Feedback :</label>
                    <textarea
                        name="feedback"
                        value={formData.feedback}
                        onChange={handleChange}
                    />
                </div>

                <div>
                    <label>Rating :</label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="1"
                            checked={formData.rating === "1"}
                            onChange={handleChange}
                        />
                        1
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="2"
                            checked={formData.rating === "2"}
                            onChange={handleChange}
                        />
                        2
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="3"
                            checked={formData.rating === "3"}
                            onChange={handleChange}
                        />
                        3
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="4"
                            checked={formData.rating === "4"}
                            onChange={handleChange}
                        />
                        4
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="rating"
                            value="5"
                            checked={formData.rating === "5"}
                            onChange={handleChange}
                        />
                        5
                    </label>
                </div>



                <button type="submit">Submit</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );

}