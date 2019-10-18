export const Types = {
  ADD_REQUEST: 'users/ADD_REQUEST',
  ADD_SUCCESS: 'users/ADD_SUCCESS',
  ADD_ERROR: 'users/ADD_ERROR',
  REMOVE: 'users/REMOVE',
};

const INITIAL_STATE = {
  loading: false,
  data: [],
  error: null,
};

export default function users(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.ADD_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case Types.ADD_SUCCESS:
      return {
        data: [...state.data, action.payload.user],
        loading: false,
        error: null,
      };
    case Types.ADD_ERROR:
      return { ...state, loading: false, error: action.payload.error };
    case Types.REMOVE:
      return { ...state, data: state.data.filter((user) => user.id !== action.payload.user.id) };
    default:
      return state;
  }
}

export const Creators = {
  addUserRequest: (user, cordinates) => ({
    type: Types.ADD_REQUEST,
    payload: { user, cordinates },
  }),

  addUserSuccess: (user) => ({
    type: Types.ADD_SUCCESS,
    payload: { user },
  }),

  addUserError: (error) => ({
    type: Types.ADD_ERROR,
    payload: { error },
  }),

  removeUser: (user) => ({
    type: Types.REMOVE,
    payload: { user },
  }),
};
