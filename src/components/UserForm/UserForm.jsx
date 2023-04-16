import React, { useState } from 'react'

const UserForm = ({ updateUsers }) => {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [age, setAge] = useState('')

    console.log('I AM RERENDERED')

    const addUser = (event) => {
        event.preventDefault()

        const newUser = {
            id: Date.now(),
            name,
            description,
            age,
            checked: false,
        }

        updateUsers(newUser)

        setName('')
        setDescription('')
        setAge('')

        console.log('newUser', newUser)
    }
    return (
        <form>
            <input
                type='text'
                placeholder='name'
                value={name}
                onChange={
                    (event) => setName(event.target.value)
                    //   name += event.target.value
                    //   console.log('name', name)
                }
            ></input>
            <input
                type='text'
                placeholder='description'
                value={description}
                onChange={
                    (event) => setDescription(event.target.value)
                    //   description += event.target.value
                    //   console.log('description', description)
                }
            ></input>
            <input
                type='text'
                placeholder='age'
                value={age}
                onChange={
                    (event) => setAge(event.target.value)
                    //   age += event.target.value
                    //   console.log('age', age)
                }
            ></input>
            <button onClick={addUser} type='submit'>
                Add User
            </button>
        </form>
    )
}

export default UserForm
