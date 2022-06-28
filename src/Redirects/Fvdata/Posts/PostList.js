import React from 'react';
// import { useState, useEffect } from 'react';
import axios from 'axios';

function PostList(){
    const [albums, setAlbums] = React.useState([]);

    React.useEffect(()=>{
        axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=')
        // axios.get('../../data.json')
        .then((res)=>{setAlbums(res.data)})
        .catch(err=>console.log(err))
    },[]);
        return (
           albums && albums.map(album=>
            <div key={album.id} style={{borderRadius:"none",boxShadow:"rgba(0,0,0,0.5)"}}>
                {JSON.stringify(album)}
                {/* <ul style={{boxSizing:"border-box",textAlign:"center",fontSize:"20px",
                                padding:"5px 10px",border:"1px solid blue",width:"20%",
                                justifyContent:"center",marginLeft:"20%"}}>
                    <img src="/images/burger.jpg" width="50px" alt=""/>
                    <li>{album.name}</li>
                    <li>{album.type}</li>
                    <li>{album.price}</li>
                    <button className="btn btn-primary" style={{width:"100px",fontSize:"10px"}}>Add</button>
                </ul> */}
            </div>)
        );
    }

export default PostList;