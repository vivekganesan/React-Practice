import React, {useState, useEffect} from 'react';
import axios from 'axios';

function DataFetching() {
    const [post, setPost] = useState([]);
    const [id,setId]  = useState(1);
    const [fetchId, setFetchId] = useState(1);
    console.log('sdfasdasdfasdfsdfsdf',post);
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${fetchId}`)
            .then(res => {
                console.log(res.data);
                setPost(res.data)
            }).catch( err => {
                console.log(err);
            })
    }, [fetchId]);

    const handleClick = () => {
        setFetchId(id)
    }
    return (
        <div>
            <div> <input typr="text" value={id} onChange={e => setId(e.target.value)}/>
                <button type="button" onClick={handleClick}>Fetch Data</button>
            </div>
            {post.title}
            {/* <h2>Hi from Datafecting</h2>
            <ul>{posts.map( post => 
                <li key={post.id}>{post.title}</li>)}
                </ul> */}
        </div>
    )
}

export default DataFetching
