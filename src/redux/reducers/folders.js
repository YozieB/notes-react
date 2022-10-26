const initialState = [
  {
    title: 'Бэкенд',
    id: 1337,
    color: 'red',
  },
];

const ADD_FOLDER = 'ADD_FOLDER';
export const addFolder = (title, id, color) => {
  return (dispatch) => {
    return dispatch({ type: 'ADD_FOLDER', title, id, color });
  };
};

const foldersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FOLDER:
      return [
        ...state,
        {
          title: action.title,
          id: action.id,
          color: action.color,
        },
      ];
    default:
      return state;
  }
};

export default foldersReducer;
