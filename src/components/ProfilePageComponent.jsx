import React from 'react';

const ProfilePageComponent = () => {

    let userId = localStorage.getItem('userId');
    userId = parseInt(userId, 10);

    const fetchPortfolio = async () => {
    try {
        const response = await fetch(`http://localhost:8080/portfolio/retrieve/${userId}`);
        const data = await response.json(); // Or response.text() depending on your API
        console.log("Data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
    };

    fetchPortfolio();

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h1>Profile Page</h1>
            <div style={{ marginTop: '20px' }}>
                <h2>User Information</h2>
                <p><strong>Name:</strong> John Doe</p>
                <p><strong>Email:</strong> john.doe@example.com</p>
            </div>
            {/* <div style={{ marginTop: '20px' }}>
                <h2>Settings</h2>
                <button style={{ padding: '10px 20px', cursor: 'pointer' }}>Edit Profile</button>
            </div> */}
        </div>
    );
};

export default ProfilePageComponent;