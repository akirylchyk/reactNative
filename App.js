import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'

export default function App() {

	const [courseGoals, setCourseGoals] = useState([]);

	const addGoalHandler = (goalTitle) => {
		setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalTitle }]);
	};

	const removeGoalHandler = (goalId) => {
		console.log('ID!!!: ', goalId);
		setCourseGoals(currentGoals => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		})
	};

	return (
		<View style={style.wrapper}>

			<GoalInput onAddGoal={addGoalHandler}/>

			<FlatList data={courseGoals}
			          keyExtractor={(item) => item.id}
			          renderItem={itemData => <GoalItem id={itemData.item.id}
			                                            title={itemData.item.value}
			                                            onDelete={removeGoalHandler}
			          />}
			/>

		</View>
	);
}

const style = StyleSheet.create({
	wrapper: {
		padding: 50,
	},
	listItems: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: 'rgba(204,204,204,0.4)',
		borderColor: 'grey',
		borderWidth: 1
	}
});
