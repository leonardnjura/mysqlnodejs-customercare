import {
  GET_PERSONNELS,
  ADD_PERSONNEL,
  DELETE_PERSONNEL,
  PERSONNELS_LOADING
} from '../actions/types';

const initialState = {
  // personnels: [],
  personnels: [
    {
      personnel_id: '1',
      personnel_onames: 'Barack',
      personnel_fname: 'Obama',
      personnel_email: null,
      personnel_phone: '0733333333',
      personnel_password:
        '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
      personnel_status: '1',
      last_login: null,
      personnel_type_id: '2',
      reset_password: '0'
    },
    {
      personnel_id: '2',
      personnel_onames: 'Salma',
      personnel_fname: 'Nyagaka',
      personnel_email: null,
      personnel_phone: '0719191919',
      personnel_password:
        '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
      personnel_status: '1',
      last_login: null,
      personnel_type_id: '2',
      reset_password: '0'
    },
    {
      personnel_id: '3',
      personnel_onames: 'Pendo',
      personnel_fname: 'Elizabeth',
      personnel_email: null,
      personnel_phone: '0710101010',
      personnel_password:
        '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
      personnel_status: '1',
      last_login: null,
      personnel_type_id: '2',
      reset_password: '0'
    },
    {
      personnel_id: '7',
      personnel_onames: 'John',
      personnel_fname: 'Otieno',
      personnel_email: null,
      personnel_phone: '0722222222',
      personnel_password:
        '$2a$10$ECdOnZkH6ZRE9jzvUst4x.PNqKwgSHcaoceTxazjMRg1VojEpHh6S',
      personnel_status: '1',
      last_login: null,
      personnel_type_id: '2',
      reset_password: '0'
    }
  ],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PERSONNELS:
      return {
        ...state
      };
      case DELETE_PERSONNEL: 
      return {
        ...state,
        personnels: state.personnels.filter(personnel => personnel.personnel_id !== action.payload)
      };
    case ADD_PERSONNEL:
      return {
        ...state,
        personnels: [action.payload, ...state.personnels]
      };
    case PERSONNELS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
