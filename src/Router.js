import React from 'react';
import {Scene, Router, Actions} from 'react-native-router-flux';
import LoginForm from './component/LoginForm';
import EmployeeList from './component/EmployeeList';
import EmployeeCreate from './component/EmployeeCreate';

const RouterComponent = () => {
	return (
		<Router>
			<Scene key='root' hideNavBar>
				<Scene key='auth'>
					<Scene key='login' component={LoginForm} title="Please Login" initial />
				</Scene>
				<Scene key='main'>
					<Scene key='EmployeeList' rightTitle="Add" onRight={() => { Actions.employeeCreate()}}  component={EmployeeList} title="Employee List" />
					<Scene key='employeeCreate' component={EmployeeCreate} title="Create Employee" />
				</Scene>
			</Scene>
		</Router>
	);
}

export default RouterComponent;