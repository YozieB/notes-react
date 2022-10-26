const initialState = [
  {
    title: 'Пойти гулять',
    isDone: false,
    isDelete: false,
    id: 1,
    parentId: 1337,
  },
];

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const addNote = (title) => {
  return (dispatch) => {
    return dispatch({ type: 'someadd', title });
  };
};
export default notesReducer;
