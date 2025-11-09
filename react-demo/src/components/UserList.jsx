import React from 'react'

function UserList() {
    const users = [
        {
            id: 1, name: "Debanjan", age: 20
        },
        {
            id: 2, name: "Anik", age: 22
        },
        {
            id: 3, name: "sandipan", age: 24
        },
    ];

    return (
        <div>
            {users.map((user) => (
                <div key={user.id}>
                    <h1>Name: {user.name}</h1>
                    <h1>Age: {user.age}</h1>
                </div>
            ))}
        </div>
    )
}

export default UserList