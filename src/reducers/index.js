import {combineReducers} from 'redux';
import AuthReducer from './AuthReducer';
import EmpoyeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducers({
  auth: AuthReducer,
	employeeForm: EmpoyeeFormReducer,
	employees: EmployeeReducer
});