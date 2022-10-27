const initialState = [
  {
    title: 'Бэкенд',
    id: 1337,
    color: 'red',
    isActive: false,
  },
];

const ADD_FOLDER = 'ADD_FOLDER';
const REMOVE_FOLDER = 'REMOVE_FOLDER';
const SET_ACTIVE = 'SET_ACTIVE';
const SET_INACTIVE = 'SET_INACTIVE';
const RENAME_TITLE = 'RENAME_TITLE';
export const addFolder = (title, id, color) => {
  return (dispatch) => {
    return dispatch({ type: ADD_FOLDER, title, id, color });
  };
};

export const removeFolder = (id) => {
  return (dispatch) => {
    return dispatch({ type: REMOVE_FOLDER, id });
  };
};

export const renameTitle = (title, id) => {
  return (dispatch) => {
    return dispatch({ type: RENAME_TITLE, title, id });
  };
};

export const setActive = (id) => {
  return (dispatch) => {
    return dispatch({ type: SET_ACTIVE, id });
  };
};

export const setInactive = () => {
  return (dispatch) => {
    return dispatch({ type: SET_INACTIVE });
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
          isActive: false,
        },
      ];
    case REMOVE_FOLDER:
      return state.filter((el) => el.id !== action.id);
    case SET_ACTIVE:
      return state.map((el) => {
        if (el.id === action.id) {
          el.isActive = true;
        } else {
          el.isActive = false;
        }
        return el;
      });
    case SET_INACTIVE:
      return state.map((el) => {
        el.isActive = false;
        return el;
      });
    case RENAME_TITLE:
      return state.map((el) => {
        if (el.id === action.id) {
          el.title = action.title;
        }
        return el;
      });
    default:
      return state;
  }
};

export default foldersReducer;
