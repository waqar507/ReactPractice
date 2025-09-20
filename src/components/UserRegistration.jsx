import { useState } from 'react';

export default function UserRegistration({ onRegister }) {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        confirmPassword: '',
        email: '',
        gender: '',
        country: 'India'
    });

    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Password and Confirm Password do not match");
            return;
        }

        setError("");  // clear error first

        // ✅ Notify parent
        onRegister(formData);

        // setTimeout(() => {
        //     alert(`Registration Successful for ${formData.name}`);
        // }, 0);
        // This is required to reset form
        setFormData({
            name: '',
            password: '',
            confirmPassword: '',
            email: '',
            gender: '',
            country: 'India'
        });
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>User Registration Form</h2>
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
                    <label>Password:</label>
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter your password"
                        value={formData.password}
                        onChange={handleChange}

                    />
                </div>

                <div>
                    <label>Confirm Password:</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder="Enter your confirm password"
                        value={formData.confirmPassword}
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
                    <label>Gender:</label>
                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={formData.gender == 'Male'}
                            onChange={handleChange}

                        /> Male
                    </label>

                    <label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={formData.gender == 'Female'}
                            onChange={handleChange}

                        /> Female
                    </label>
                </div>


                <div>
                    <label>Country:</label>
                    <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                    >
                        <option value="India">India</option>
                        <option value="USA">USA</option>
                        <option value="UK">UK</option>
                        <option value="Australia">Australia</option>
                    </select>


                </div>

                <button type="submit">Submit</button>
            </form>

            {error && <p style={{ color: "red" }}>{error}</p>}
        </div>
    );

}