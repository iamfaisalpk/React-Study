import React, { useState } from "react";

const MyForm = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [error, setError] = useState("");

const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email) {
    setError("Please fill in all fields");
    } else {
        setError("");  // Clear error if all fields are valid
        // Submit the form
    }
};

return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>Name : </label>
        <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        />
    </div><br />
    <div>
        <label>Email : </label>
        <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        />
    </div><br />
    {error && <p style={{ color: "red" }}>{error}</p>}
    <button type="submit">Submit</button>
    </form>
);
};

export default MyForm;
