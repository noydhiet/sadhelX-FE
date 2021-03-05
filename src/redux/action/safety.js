import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';

export const getSafetyTips = () => (dispatch) => {
  Axios.get(`${API_HOST.guidelines}/documents`)
    .then((res) => {
      dispatch({type: 'SET_SAFETY_TIPS'});
      console.log(res.data);
    })
    .catch((err) => {
      //   console.log(Object.keys(err.response.data.data).length);
      console.log(err.response.data.msg);
    });
};
