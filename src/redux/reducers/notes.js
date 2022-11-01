const initialState = [
  {
    title: 'Написать сервер для приложения',
    isDone: false,
    id: 1,
    parentId: 1337,
  },
  {
    title: 'Написать регистрацию',
    isDone: false,
    id: 2,
    parentId: 1337,
  },
  {
    title: 'Добавить анимации',
    isDone: true,
    id: 3,
    parentId: 1448,
  },
  {
    title: 'Адаптировать под телефоны',
    isDone: false,
    id: 4,
    parentId: 1448,
  },
  {
    title: 'Макарошки',
    isDone: false,
    id: 5,
    parentId: 322,
  },
  {
    title: 'Пельмешки',
    isDone: true,
    id: 6,
    parentId: 322,
  },
  {
    title: 'FIFA 23',
    isDone: true,
    id: 7,
    parentId: 322,
  },
  {
    title: 'Github Copilot',
    isDone: false,
    id: 8,
    parentId: 322,
  },
];

const ADD_NOTE = 'ADD_NOTE';
const SET_DONE = 'SET_DONE';
const REMOVE_NOTE = 'REMOVE_NOTE';
export const addNote = (title, parentId, id) => {
  return (dispatch) => {
    return dispatch({ type: ADD_NOTE, title, id, parentId });
  };
};
export const setDone = (id) => {
  return (dispatch) => {
    return dispatch({ type: SET_DONE, id });
  };
};

export const removeNote = (id) => {
  return (dispatch) => {
    return dispatch({ type: REMOVE_NOTE, id });
  };
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          title: action.title,
          isDone: false,
          id: action.id,
          parentId: action.parentId,
        },
      ];
    case SET_DONE:
      return state.map((el) => {
        if (el.id === action.id) {
          el.isDone = !el.isDone;
        }
        return el;
      });
    case REMOVE_NOTE:
      return state.filter((el) => el.id !== action.id);
    default:
      return state;
  }
};

export default notesReducer;
