import React from 'react'
import { useParams } from 'react-router'

export const Editpost = () => {

    const { id } = useParams()
    return (
        <div>
            <h1>Edit pages {id}</h1>
        </div>
    )
}
