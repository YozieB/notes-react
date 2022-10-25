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
    case 'ADD_NOTE': {
      return {
        ...state,
        items: {
          ...state.items,
          notes: [
            ...state.items.notes,
            {
              title: action.title,
              isDone: false,
              isDelete: false,
              id: 2,
            },
          ],
        },
      };
    }
    case 'ADD_FOLDER': {
      return {
        ...state,
        items: {
          folder: action.title,
          id: Date.now(),
          notes: [],
        },
      };
    }
    case 'RENAME_FOLDER': {
      /*      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.title,
            isDone: false,
            isDelete: false,
            id: 2,
          },
        ],
      };*/
      /*      return {
        ...state,
        folder: {
          title: action.title,
          notes: [...state.notes],
        },
      };*/
      return {
        ...state,
        notes: [
          /*...state.notes,*/
          {
            folder: action.title,
            items: [...state.notes[0].items],
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const addNote = (title) => {
  return (dispatch) => {
    return dispatch({ type: 'someadd', title });
  };
};

export const addNote2 = (title) => {
  return (dispatch) => {
    return dispatch({ type: 'ADD_NOTE', title });
  };
};

export default notesReducer;
