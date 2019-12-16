import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

const GoalItem = (props) => {

		const { title, onDelete, id } = props;

		return <TouchableOpacity onPress={() => onDelete(id)}>
			<View style={style.listItems}>
				<Text>{props.title}</Text>
			</View>
		</TouchableOpacity>
	}
;

const style = StyleSheet.create({
	listItems: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: 'rgba(204,204,204,0.4)',
		borderColor: 'grey',
		borderWidth: 1
	}
});

export default GoalItem;