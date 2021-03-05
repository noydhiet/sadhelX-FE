import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';

export const getSafetyTips = () => (dispatch) => {
  Axios.get(`${API_HOST.guidelines}/documents`)
    .then((res) => {
      dispatch({
        type: 'SET_SAFETY_TIPS',
        value: res.data.data,
      });
    })
    .catch((err) => {
      console.log(err.data.msg);
      showMessage(err.data.msg || 'Gagal Mengambil Data Tips Riding');
    });
};