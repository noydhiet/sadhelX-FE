import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (dataRegister, navigation) => (dispatch) => {
  console.log(dataRegister);

  // dispatch(setLoading(true));
  // Axios.post(`${API_HOST.url}/signup`, dataRegister)
  //   .then((res) => {
  //     dispatch(setLoading(false));
  //     if (res.data.status == true) {
  //       navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
  //     }
  //   })
  //   .catch((err) => {
  //     dispatch(setLoading(false));
  //     console.log(err);
  //   });
};

export const signInAction = (form, navigation) => (dispatch) => {
  console.log(form);

  // dispatch(setLoading(true));
  // Axios.post(`${API_HOST.url}/login`, form)
  //   .then((res) => {
  //     const tokenAccess = `${res.data.data.token.token_access}`;
  //     const tokenRefresh = `${res.data.data.token.token_refresh}`;
  //     const profile = res.data.data.user;

  //     dispatch(setLoading(false));
  //     storeData('tokenAccess', tokenAccess);
  //     storeData('tokenRefresh', tokenRefresh);
  //     storeData('userProfile', profile);
  //     if (res.data.status == true) {
  //       navigation.reset({index: 0, routes: [{name: 'Main'}]});
  //     } else {
  //       showMessage(res.data.msg);
  //     }
  //   })
  //   .catch((err) => {
  //     dispatch(setLoading(false));
  //     showMessage('Gagal Login');
  //     navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
  //   });
};
