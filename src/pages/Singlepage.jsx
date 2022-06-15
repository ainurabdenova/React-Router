import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'



export const Singlepage = () => {

    const { id } = useParams()
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [id])

    return (
        <div>
            {data && (
                <>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                    <Link to={`/posts/${id}/edit`}>Edit post</Link>
                </>
            )}
        </div>
    )
}
