export const testAction = args => {
  return dispatch => {
    dispatch({type: 'TEST_AUTH', payload: 1});
  };
};
