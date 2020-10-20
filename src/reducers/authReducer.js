const initialState = {
  loading: false,
  data: [],
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'TEST_AUTH': {
      return {
        ...state,
        loading: true,
      };
    }
    case 'TEST_AUTH_SUCCESS': {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    case 'TEST_AUTH_FAIL': {
      return {
        ...state,
        data: action.payload,
        loading: false,
      };
    }
    default: {
      return {...state};
    }
  }
};
