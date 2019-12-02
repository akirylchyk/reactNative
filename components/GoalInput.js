import React, { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

const GoalInput = props => {

	const [enteredGoal, setEnteredGoal] = useState('');

	const goalInputHandler = (enteredText) => {
		setEnteredGoal(enteredText);
	};

	const { onAddGoal } = props;

	return <View style={style.innerWrapper}>
		<TextInput style={style.textInput}
		           placeholder={'Course Goal'}
		           onChangeText={goalInputHandler}
		           value={enteredGoal}
		/>
		<Button title={'ADD'} onPress={() => onAddGoal(enteredGoal)}/>
	</View>
};

const style = StyleSheet.create({
	innerWrapper: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
	},
	textInput: {
		flex: 1,
		borderColor: 'grey',
		borderWidth: 1,
		padding: 10,
	}
});

export default GoalInput;