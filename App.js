import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button, FlatList } from 'react-native';

import Header from './components/Header';
import StartGameScreen from "./screens/StartGameScreen";


export default function App() {


	return (
		<View style={style.screen}>
			<Header title={'Guess a Number'}/>
			<StartGameScreen/>
		</View>
	);
}

const style = StyleSheet.create({
	screen: {
		flex: 1,
	},

});
