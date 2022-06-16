import { useEffect, useState } from 'react'
import React from 'react'
import { Link, useSearchParams } from 'react-router-dom'



export const Blogpage = () => {

    const [posts, setPosts] = useState([]);
    const [searchParams, setSearchParams] = useSearchParams();

    const postQuery = searchParams.get('post') || '';

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const query = form.search.value;
        setSearchParams({ post: query })
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(json => setPosts(json))
    }, [])

    console.log(posts);

    return (
        <div>
            <h1>Our news</h1>
            <form autoComplete='off' onSubmit={handleSubmit}>
                <input type="search" name='search' />
                <input type="submit" value="Search" />
            </form>

            <Link to="/posts/new">Add new post</Link>
            {posts.filter(
                post => post.title.includes(postQuery)
            ).map((post) => (
                <Link key={post.id} to={`/posts/${post.id}`}>
                    <li>{post.title}</li>
                </Link>
            ))
            }
        </div >
    )
}
