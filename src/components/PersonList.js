import React from 'react';
import Person from './Person';

function NameList() {

    // const names = ['Bruce', 'Clark', 'Diana']

    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'react'
        },
        {
            id: 2,
            name: 'Clark',
            age: 32,
            skill: 'rangular'
        },
        {
            id: 3,
            name: 'diana',
            age: 20,
            skill: 'vue'
        }

    ]
    const personList = persons.map((person) => (
        <Person key = {person.id} person = {person} />
        // <h2 key = {index}> {index} {name}</h2>
        ))

  return (
    <div>
        {personList}
    </div>
  )
}

export default NameList