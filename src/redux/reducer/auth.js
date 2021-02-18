const initStateRegister = {
  name: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER') {
    return {
      ...state,
      name: action.value.name,
    };
  }
  return state;
};

const initPhoto = {
  uri: '',
  type: '',
  name: '',
  isUploadPhoto: false,
};

export const photoReducer = (state = initPhoto, action) => {
  if (action.type === 'SET_PHOTO') {
    return {
      ...state,
      uri: action.value.uri,
      type: action.value.type,
      name: action.value.name,
    };
  }
  if (action.type === 'SET_UPLOAD_STATUS') {
    return {
      ...state,
      isUploadPhoto: action.value,
    };
  }
  return state;
};

const initStateForgot = {
  identity: '',
  code: '',
};

export const forgotReducer = (state = initStateForgot, action) => {
  if (action.type === 'SET_IDENTITY') {
    return {
      ...state,
      identity: action.value.identity,
    };
  }
  if (action.type === 'SET_IDENTITY_CODE') {
    return {
      ...state,
      code: action.value,
    };
  }
  return state;
};
