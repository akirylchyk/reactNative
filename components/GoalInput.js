import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View, Modal } from 'react-native';

const GoalInput = props => {

	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const addGoalHandler = () => {
		onAddGoal(enteredGoal);
		setEnteredGoal('');
	};

	const { onAddGoal, onCancel, visible } = props;

	return <Modal visible={visible} animationType={'slide'}>
		<View style={style.innerWrapper}>
			<TextInput style={style.textInput}
			           placeholder={'Course Goal'}
			           onChangeText={goalInputHandler}
			           value={enteredGoal}
			/>
			<Button title={'CANCEL'} color={'red'} onPress={onCancel}/>
			<Button title={'ADD'} onPress={addGoalHandler}/>
		</View>
	</Modal>
};

const style = StyleSheet.create({
	innerWrapper: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	textInput: {
		width: '80%',
		borderColor: 'grey',
		borderWidth: 1,
		padding: 10,
		marginBottom: 10,
	}
});

export default GoalInput;