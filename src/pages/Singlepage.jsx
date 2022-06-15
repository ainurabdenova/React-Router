import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link, useNavigate } from 'react-router-dom'



export const Singlepage = () => {

    const { id } = useParams()
    const navigate = useNavigate()
    const [data, setData] = useState(null)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(res => res.json())
            .then(json => setData(json))
    }, [id])

    const goBack = () => (navigate(-1))
    const goHome = () => navigate('/', { replace: true })

    return (
        <div>
            {data && (
                <>
                    <h1>{data.title}</h1>
                    <p>{data.body}</p>
                    <button onClick={goBack}>Back</button>
                    {/* Bad approach */}
                    <button onClick={goHome}>Home</button>

                    <Link to={`/posts/${id}/edit`}>Edit post</Link>
                </>
            )}
        </div>
    )
}
