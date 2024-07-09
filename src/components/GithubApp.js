import React, { useEffect, useState } from 'react'

export default function GithubApp() {

    const apiUrl = "https://api.github.com/users";
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchUsers = async () => {
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            const data = await response.json();
            console.log(data)
            setUsers(data);
            setLoading(false);
        } catch (error) {
            setError(error);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchUsers();
    }, [])
    if (loading) return 'Loading...';
    if (error) return `Error: ${error}`;

    return (
        <div>
            <h2 className='text-2xl font-bold mb-4'>Github Users</h2>
            <ul className="flex flex-wrap justify-between gap-8 ">
                {users.map(user => (
                    <li key={user.id} className="flex items-center space-x-4 bg-slate-300 p-8">
                        <img src={user.avatar_url} alt={user.login} className="w-12 h-12 rounded-full" />
                        <a href={user.html_url} target="_blank" rel="noreferrer" className="text-blue-500">{user.login}</a>
                    </li>
                ))}
            </ul>
        </div>
    )
}
