import axios from 'axios';
import React from 'react';

export function ListUsers() {
    const getAllUsers = async () => {
        const response = await axios.get('http://localhost:3900/user');
        return response.data;
    };

    return (
        <>
            <ul>
                <li>
                    <h3>Users</h3>
                </li>
            </ul>
        </>
    );
}
