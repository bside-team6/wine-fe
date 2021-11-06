import React, { useEffect } from 'react';

function GetUserInfo() {
  //console.log('LogOUt page ');
  //const { token } = useParams();
  //const { rToken } = useParams();
  
  useEffect(() => {
    sessionStorage.setItem("isAuthorized", "false");
    sessionStorage.setItem("nickName", "");
    
    console.log(sessionStorage.getItem("isAuthorized"))
    window.location.replace("/");
  });


  return (
    <div></div>
  );
  
}

export default GetUserInfo;