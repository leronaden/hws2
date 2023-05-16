import React, { useState, Dispatch, SetStateAction } from 'react'
import { pureAddUserCallback, UserType } from '../HW3'

test('name 1', () => {
    const [users, setUsers]: [UserType[], Dispatch<SetStateAction<UserType[]>>] = useState<UserType[]>([])

    pureAddUserCallback('name', setUsers, users)

    expect(users.length).toBe(1)
    expect(users[0].name).toBe('name')
    expect(!!users[0]._id).toBe(true)
})
