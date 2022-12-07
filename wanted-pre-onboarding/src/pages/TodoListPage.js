import React,{useEffect,useState} from 'react';
import { useNavigate } from 'react-router';
const TodoListPage = () => {
    const navigate=useNavigate()
    useEffect(()=>{
        const user=localStorage.getItem("access_token")
        if(!user) {
           navigate("/")
        }
    },[])
    return (
        <div>
            sdf
        </div>
    );
};

export default TodoListPage;