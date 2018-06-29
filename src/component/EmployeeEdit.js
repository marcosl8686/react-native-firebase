import _ from 'lodash';
import React, {Component} from 'react';
import EmployeeForm from './EmployeeForm';
import Communications from 'react-native-communications';
import {connect} from 'react-redux';
import {employeeUpdate, employeeSave, employeeDelete} from '../actions';
import {Card, CardSection, Button, Confirm} from './common';

class EmployeeEdit extends Component {
	state = { showModal: false };
	
	
	componentWillMount() {
		console.log(this.props.employee, "passed props from list item")
		_.each(this.props.employee, (value, prop) => {
			this.props.employeeUpdate({prop, value});
		});
	}
	
	onButtonPress() {
		const {name, phone, shift} = this.props;
		this.props.employeeSave({name, phone, shift, uid: this.props.employee.uid})
		console.log(name, phone, shift);
	}
	onTextPress() {
		const {phone, shift} = this.props;
		Communications.text(phone, `Your upcoming shift is on ${shift}`);
	}
	onAccept() {
		
	}
	onDecline() {
		this.setState({showModal:false});
	}
	render() {
		return(
			<Card>
				<EmployeeForm />
				<CardSection>
					<Button onPress={this.onButtonPress.bind(this)}>
						Save Changes
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={this.onTextPress.bind(this)}>
						TEXT
					</Button>
				</CardSection>
				<CardSection>
					<Button onPress={() => this.setState({ showModal: !this.state.showModal })}>
						Delete
					</Button>
				</CardSection>
				
				<Confirm visible={this.state.showModal} onAccept={this.onAccept.bind(this)} onDecline={this.onDecline.bind(this)}>
					Are you Sure you want to delete this?
				</Confirm>
			</Card>
		);
	}
}

const mapStateToProps = (state) => {
	console.log(state, "OK!")
	const {name, phone, shift} = state.employeeForm;
	return {name, phone, shift};
}

export default connect(mapStateToProps, {employeeUpdate, employeeSave, employeeDelete})(EmployeeEdit)