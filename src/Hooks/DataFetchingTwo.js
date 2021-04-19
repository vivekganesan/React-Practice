import axios from 'axios';
import React, { useReducer, useEffect } from 'react';

const initialState = {
    loading: true,
    post: {},
    error: ''
}

const reducer = (currState, action) => {
    console.log(action.type, 'action');
    switch(action.type){
        case 'FETCH_SUCCESS':
            return{
                loading: false,
                post: action.payload,
                error: ''
            }
        case 'FETCH_FAILURE':
            return{
                loading: false,
                post: {},
                error: 'Something went Wrong!'
            }
    }

}

function DataFetchingTwo() {

    const [state, dispatch] = useReducer(reducer,initialState);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                dispatch({type: 'FETCH_SUCCESS', payload: res.data})
            })
            .catch(err => {
                dispatch({type: 'FETCH_FAILURE'})
            })
    },[])
    return (
        <div>
            {
                state.loading && state.loading ? 'Loading....': state.post.title
            }
            {
                state.error && <h2>{state.error}</h2> 
            }
        </div>
    )
}

export default DataFetchingTwo
