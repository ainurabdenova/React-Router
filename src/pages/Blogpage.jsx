import { useEffect, useState } from 'react'
import React from 'react'
import { Link } from 'react-router-dom'



export const Blogpage = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => setPosts(json))
    }, [])

    console.log(posts);

    return (
        <div>
            <h1>This is my posts</h1>
            {posts.map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))
            }
        </div >
    )
}
