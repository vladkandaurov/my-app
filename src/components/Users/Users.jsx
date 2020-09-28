import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/avatar.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";


let Users = (props) => {

    let pagesCount =Math.ceil( props.totalUserCount / props.pageSize);
    let pages =[];

    for(let i=1; i <= 40; i++){
        pages.push(i);
    }

    return <div>
        <div>
            {pages.map(p => {
                return <span className={props.currentPage === p && styles.selectedPage} onClick={(e) => {
                    props.onPageChanged(p)
                }}>{p}</span>
            })}

        </div>
        {
            props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={'/profile/'+u.id}>
                        <img src={u.photos.small != null ? u.photos.small : userPhoto} className={styles.userPhoto}/>
                        </NavLink>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick={() => {
                                axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                                    withCredentials: true,
                                    headers: {
                                        "API-KEY": "94f09b0b-c1c9-4e39-9909-464ebfea9f8e"
                                    }
                                })
                                    .then(response => {
                                        if(response.data.resultCode === 0){
                                            props.unfollow(u.id);
                                        }

                                    });



                            }}>Unfollow</button>
                            : <button onClick={() => {

                                axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{ withCredentials: true,
                                    headers: {
                                        "API-KEY": "94f09b0b-c1c9-4e39-9909-464ebfea9f8e"
                                    }})
                                    .then(response => {
                                        if(response.data.resultCode === 0){
                                            props.follow(u.id);
                                        }

                                    });



                            }}>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.city"}</div>
                        <div>{"u.location.country"}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;