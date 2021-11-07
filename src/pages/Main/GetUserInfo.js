import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { RTOKEN_URL, USERINFO_URL } from '~/helpers/oauth';

function GetUserInfo() {
  const { token } = useParams();
  const { rToken } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`${USERINFO_URL}`, {
      headers: {
        AccessToken: token,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.result) {
          sessionStorage.setItem('isAuthorized', 'true');
          sessionStorage.setItem('nickName', res.data.nickName);
          window.location.replace('/');
        } else {
          if (res.status === 401) {
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
        RefreshToken: rToken,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.result) {
          navigate(`/getUserInfo/${res.data}/`);
        }
      })
      .catch((error) => console.log('error:', error));
  };

  return <div></div>;
}

export default GetUserInfo;
