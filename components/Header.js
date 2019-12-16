import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from "../constants/colors";


export default function Header(props) {

	const { title } = props;

	return (
		<View style={style.header}>
			<Text style={style.title}>{title}</Text>
		</View>
	);
}

const style = StyleSheet.create({
	header: {
		width: '100%',
		height: 90,
		paddingTop: 36,
		backgroundColor: colors.primary,
		alignItems: 'center',
		justifyContent: 'center',
	},
	title: {
		color: 'black',
		fontSize: 18,

	}
});
