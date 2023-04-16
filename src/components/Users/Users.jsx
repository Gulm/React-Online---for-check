import React, { useState } from 'react'
import { UserInfo } from '../UserInfo/user-info'
import UserForm from '../UserForm/UserForm'
import Counter from '../Counter/counter'

const usersInitial = [
    {
        id: 1,
        name: 'Max',
        description: 'hfkdjhvjhv',
        age: 20,
        checked: false,
    },
    {
        id: 2,
        name: 'Mike',
        description: 'hfkdjhvjhv',
        age: 35,
        checked: false,
    },
    {
        id: 3,
        name: 'John',
        description: 'hfkdjhvjhv',
        age: 57,
        checked: false,
    },
]

const Users = () => {
    const [users, setUsers] = useState(usersInitial)
    const [counter, setCounter] = useState(0)

    useEffect(() => {
        alert('I am updated')
    }, [users])

    const updateUsers = (user) => {
        setUsers([...users, user])
    }

    const deleteUser = (id) => {
        const filteredUsers = users.filter((user) => user.id !== id)

        setUsers(filteredUsers)
    }

    const checkUser = (id) => {
        const updatedUser = users.map((user) => {
            if (user.id === id) {
                return { ...user, checked: !user.checked }
            } else {
                return user
            }
        })

        setUsers(updatedUser)
    }

    return (
        <div>
            <Counter
                counter={counter}
                onIncrease={() => {
                    setCounter(counter + 1)
                }}
                onDecrease={setCounter(counter - 1)}
            />
            <UserForm updateUsers={updateUsers} />
            {users.map((user, id) => {
                ;<UserInfo
                    checkUser={checkUser}
                    deleteUser={deleteUser}
                    name={user.name}
                    description={user.description}
                    checked={user.checked}
                    age={user.age}
                    id={user.id}
                    key={user.id}
                    checked
                    checkUser
                />
            })}

            {users.length === 0 && <h3>There are no users!</h3>}
        </div>
    )
}

export default Users
