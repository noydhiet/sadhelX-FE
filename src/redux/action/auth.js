import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage, storeData, getData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (dataRegister, photoReducer, navigation) => (
  dispatch,
) => {
  dispatch(setLoading(true));
  console.log(dataRegister);
  Axios.post(`${API_HOST.url}/signup`, dataRegister)
    .then((res) => {
      console.log(res.data);
      if (res.data.status == true) {
        // const profile = res.data.data.user;
        if (photoReducer.isUploadPhoto) {
          const photoForUpload = new FormData();
          photoForUpload.append('identity', dataRegister.email);
          photoForUpload.append('avatar', photoReducer);
          console.log(photoForUpload);

          Axios.put(`${API_HOST.url}/avatar-upload`, photoForUpload, {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          })
            .then((resUpload) => {
              dispatch(setLoading(false));
              console.log(resUpload.data);
              navigation.reset({index: 0, routes: [{name: 'CheckEmailToken'}]});
            })
            .catch((errUpload) => {
              dispatch(setLoading(false));
              console.log(errUpload);
              showMessage('Upload photo tidak berhasil');
              navigation.reset({index: 0, routes: [{name: 'CheckEmailToken'}]});
            });
        } else {
          navigation.reset({index: 0, routes: [{name: 'CheckEmailToken'}]});
        }
      }
    })
    .catch((err) => {
      dispatch(setLoading(false));
      showMessage('Sign up Gagal');
      console.log(err);
    });
};

export const signInAction = (form, navigation) => (dispatch) => {
  console.log(form);

  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/login`, form)
    .then((res) => {
      // console.log(res);
      const tokenAccess = `${res.data.data.token.token_access}`;
      const tokenRefresh = `${res.data.data.token.token_refresh}`;
      const profile = res.data.data.user;
      profile.profile_photo_url = `${API_HOST.url}/avatar-storage/${res.data.data.user.image_file}`;

      dispatch(setLoading(false));
      storeData('tokenAccess', tokenAccess);
      storeData('tokenRefresh', tokenRefresh);
      storeData('userProfile', profile);
      if (res.data.status == true) {
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      } else {
        showMessage(res.data.msg);
      }
    })
    .catch((err) => {
      dispatch(setLoading(false));
      console.log(err);
      showMessage('Gagal Login');
      navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    });
};

export const forgotPasswordAction = (form, navigation) => (dispatch) => {
  console.log(form);

  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/get-password-reset-code`, form)
    .then((res) => {
      console.log(res);
      dispatch(setLoading(false));
      navigation.reset({
        index: 0,
        routes: [{name: 'CheckEmailForgot'}],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage('Gagal mengirim OTP');
    });
};

export const checkTokenAction = (form, navigation) => (dispatch) => {
  console.log(form);

  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/verify/password-reset`, form)
    .then((res) => {
      console.log(res);
      dispatch(setLoading(false));
      navigation.reset({
        index: 0,
        routes: [{name: 'CreateNewPassword'}],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage('Gagal mengirim OTP');
    });
};

export const createNewPasswordAction = (form, navigation) => (dispatch) => {
  console.log(form);

  dispatch(setLoading(true));
  Axios.put(`${API_HOST.url}/reset-password`, form)
    .then((res) => {
      console.log(res);
      dispatch(setLoading(false));
      navigation.reset({
        index: 0,
        routes: [{name: 'SuccessCreatePassword'}],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage('Gagal ganti password');
    });
};

export const verifyAction = (form, navigation) => (dispatch) => {
  console.log(form);

  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/verify/email`, form)
    .then((res) => {
      console.log(res);
      dispatch(setLoading(false));
      navigation.reset({
        index: 0,
        routes: [{name: 'SuccessSignUp'}],
      });
    })
    .catch((err) => {
      console.log(err);
      dispatch(setLoading(false));
      showMessage('Gagal mengirim OTP');
    });
};
