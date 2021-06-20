import React, { useEffect, useState } from 'react'
import { getProfile } from '../model';

export const ProfileContext = React.createContext({})
export const ProfileWrapper =(props)=>{
    const [profile, setProfile]=useState();

    useEffect(()=>{
        getProfile().then(profile=>setProfile(profile));
    }, []);
    if (!profile){
        return <span> Загрузка.. </span>   
    }
    return(
        <ProfileContext.Provider value={profile}>
            {props.children}
        </ProfileContext.Provider>
    )
}