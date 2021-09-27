import React from 'react';
import style from './landing.module.css';
import {Link} from 'react-router-dom';

function Landing(){
    return (
        <div className={style.container}>
            <div>
                <h1>Welcome to my project</h1>
                <Link to='/home'>
                    <button>ENTER</button>
                </Link>   
            </div>
        </div>
        
    )
}

export default Landing;