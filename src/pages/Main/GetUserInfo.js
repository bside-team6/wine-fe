import React, { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { USERINFO_URL, RTOKEN_URL } from 'helpers/oauth';

function GetUserInfo() {
  //console.log('GetUserInfo page ');
  const { token } = useParams();
  const { rToken } = useParams();
  const history = useHistory();
  
  useEffect(() => {
    fetch(`${USERINFO_URL}`, {
      headers: {
        'AccessToken': token
      }})
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        //console.log(res);
        if(res.result){
          sessionStorage.setItem("isAuthorized", "true");
          sessionStorage.setItem("nickName", res.data.nickName);
          history.push(`/`);
        }else{
          if(res.status === 401){
            tokenRefresh();
          }
        }
      })
      .catch((error) => console.log('error:', error));
  });

  const tokenRefresh = async () => {
    fetch(`${RTOKEN_URL}`, {
      method: 'POST',
      headers: {
        'RefreshToken' : rToken,
      }
    })
    .then((res) => {
      return res.json();
    })
    .then((res) => {
      if(res.result){
        //console.log(res);
        history.push(`/getUserInfo/${res.data}/`);
      }
    })
    .catch((error) => console.log('error:', error));
  };

  return (
    <div></div>
  );
  
}

export default GetUserInfo;