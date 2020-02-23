import React, { Component } from 'react';
import { View, Text, FlatList, StyleSheet, Linking } from 'react-native';

const reference_list = [
	{title: 'https://www.plannedparenthood.org/learn/health-and-wellness', key: 0},
	{title: 'https://www.cdc.gov/reproductivehealth/index.html', key: 1},
];

export default class ResourcesScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: reference_list
		};
	}

	render() {
		return (
			<View style={{ flex: 1}}>
				<View style={styles.header}>
					<Text style={styles.headerText}>More Resources:</Text>
				</View>
				<View style={{flex: 4}}>
					<FlatList
		      			data={this.state.list}
		      			renderItem={row => {
		      				return <Text style={styles.content} onPress={() => Linking.openURL(row.item.title)}>{row.item.title}</Text>
		      			}}
		      		/>
				</View>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#13322C',
		padding: 10,
	},
	headerText: {
		fontSize: 25,
		textAlign: 'center',
		flexWrap: 'wrap',
		color: 'white',
	},
  	content: {
  		fontSize: 20,
  		textAlign: 'center',
  		padding: 20,
  	}
});