import {
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  TASKS_LOADING
} from '../actions/types';

const initialState = {
  // tasks: [],
  tasks: [
    {
      task_id: '1',
      customer_id: '108051',
      personnel_id: '7',
      task_status_id: '3',
      created_by: '5',
      created: '2019-02-18 11:00:12',
      modified_by: '7',
      last_modified: '2019-06-27 10:06:24',
      in_progress: '2019-02-18 11:02:29',
      completed: '2019-02-18 11:03:09',
      deferred: null,
      customer_first_name: 'Task One',
      customer_last_name: 'Mueni',
      customer_city: '',
      customer_username: '+254766352833',
      inserted: '2019-02-18 10:49:47',
      personnel_first_name: 'John',
      personnel_other_name: 'Otieno',
      personnel_phone: '0722222222',
      task_status_name: 'Completed',
      customer_location: 'Embu',
      customer_gender: 'Female',
      customer_age: '22',
      customer_access_code: '1',
      customer_splash_page: '1',
      customer_mpesa: '1',
      customer_autoplay: '1',
      customer_comments: '',
      customer_updated: '2019-02-18 11:03:09',
      customer_updated_by: '7',
      agentId: null,
      customerId: null
    },
    {
      task_id: '3',
      customer_id: '108053',
      personnel_id: '7',
      task_status_id: '4',
      created_by: '1',
      created: '2019-02-18 11:38:16',
      modified_by: '7',
      last_modified: '2019-06-27 10:06:24',
      in_progress: '2019-02-19 09:13:26',
      completed: null,
      deferred: '2019-02-19 09:14:10',
      customer_first_name: 'Task Two',
      customer_last_name: 'Mueni',
      customer_city: '',
      customer_username: '+254766352833',
      inserted: '2019-02-18 11:16:51',
      personnel_first_name: 'John',
      personnel_other_name: 'Otieno',
      personnel_phone: '0722222222',
      task_status_name: 'Deferred',
      customer_location: null,
      customer_gender: null,
      customer_age: null,
      customer_access_code: null,
      customer_splash_page: null,
      customer_mpesa: null,
      customer_autoplay: null,
      customer_comments: '',
      customer_updated: null,
      customer_updated_by: null,
      agentId: null,
      customerId: null
    },
    {
      task_id: '5',
      customer_id: '108055',
      personnel_id: '7',
      task_status_id: '3',
      created_by: '0',
      created: '2019-02-18 11:32:08',
      modified_by: '7',
      last_modified: '2019-06-27 10:05:42',
      in_progress: '2019-02-19 09:02:41',
      completed: '2019-02-19 09:09:32',
      deferred: null,
      customer_first_name: 'Task Three',
      customer_last_name: 'Mueni',
      customer_city: '',
      customer_username: '+254766352833',
      inserted: '2019-02-18 11:41:03',
      personnel_first_name: 'John',
      personnel_other_name: 'Otieno',
      personnel_phone: '0722222222',
      task_status_name: 'Completed',
      customer_location: 'Nanyuki',
      customer_gender: 'Male',
      customer_age: '18',
      customer_access_code: '1',
      customer_splash_page: '1',
      customer_mpesa: '1',
      customer_autoplay: '1',
      customer_comments: '',
      customer_updated: '2019-02-19 09:09:32',
      customer_updated_by: '7',
      agentId: null,
      customerId: null
    },
    {
      task_id: '13',
      customer_id: '108063',
      personnel_id: '7',
      task_status_id: '4',
      created_by: '0',
      created: '2019-02-18 13:07:08',
      modified_by: '7',
      last_modified: '2019-06-27 10:06:24',
      in_progress: '2019-02-19 09:14:54',
      completed: null,
      deferred: '2019-02-19 09:15:05',
      customer_first_name: 'Task Four',
      customer_last_name: 'Mueni',
      customer_city: '',
      customer_username: '+254766352833',
      inserted: '2019-02-18 12:30:20',
      personnel_first_name: 'John',
      personnel_other_name: 'Otieno',
      personnel_phone: '0722222222',
      task_status_name: 'Deferred',
      customer_location: null,
      customer_gender: null,
      customer_age: null,
      customer_access_code: null,
      customer_splash_page: null,
      customer_mpesa: null,
      customer_autoplay: null,
      customer_comments: '',
      customer_updated: null,
      customer_updated_by: null,
      agentId: null,
      customerId: null
    }
  ],
  isLoading: false
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_TASKS:
      return {
        ...state
      };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter(task => task.task_id !== action.payload)
      };

    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks]
      };
    case TASKS_LOADING:
      return {
        ...state,
        isLoading: true
      };

    default:
      return state;
  }
}
