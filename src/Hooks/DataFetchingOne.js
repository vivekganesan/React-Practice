import React, { useState,useEffect } from 'react';
import axios from 'axios';

function DataFetchingOne() {
    const [loading, setLoading] = useState(true);
    const [post,setPost] = useState({});
    const [error,setError] = useState('');
    console.log('post',post);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                setLoading(false)
                setPost(res.data)
                setError('')
                

            })
            .catch(error => {
                setLoading(false)
                setError('Something went werong!')
                setPost({})

            });
    }, []);
    return (
        <div>
            {
                loading && loading ? 'Loading....' : post.title                  
            }
            {
                error && <h2>{error}</h2>
            }
        </div>
    )
}

export default DataFetchingOne
