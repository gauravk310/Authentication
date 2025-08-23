import React, { useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie'

export const RefreshHandler = ({setIsAuthenticated}) => {
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(()=>{
        if(Cookies.get('token')){
            setIsAuthenticated(true);
            if(location.pathname == '/' ||
                location.pathname=='/login' ||
                location.pathname=='/signup'
            ){
                navigate('/home',{replace:false})
            }
        }
    },[location,navigate,setIsAuthenticated])
  return (
    null
  )
}
