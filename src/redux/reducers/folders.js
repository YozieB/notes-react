const initialState = [
  {
    title: 'Бэкенд',
    id: 1337,
  },
];

const ADD_FOLDER = 'ADD_FOLDER';
export const addFolder = (title, id) => {
  return (dispatch) => {
    return dispatch({ type: 'ADD_FOLDER', title, id });
  };
};

const foldersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOLDER:
      return {
        ...state,
        folders: [
          ...state.folders,
          {
            title: action.title,
            id: action.id,
          },
        ],
      };
    default:
      return state;
  }
};

export default foldersReducer;
