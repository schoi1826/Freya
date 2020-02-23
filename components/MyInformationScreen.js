import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, AsyncStorage } from 'react-native';

export default class MyInformationScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {}
		};
	}

	componentDidMount = () => {
		this.loadData('user')
	}

	loadData = async () => {
		try {
			const raw = await AsyncStorage.getItem('user')
			const parsed = JSON.parse(raw)
			this.setState({user: parsed})
		} catch (e) {
			alert(e, 'Cannot load data!')
		}
	}

	async saveData(key, value) {
		try {
			const new_user = this.state.user
			if(key == 'name') {
				new_user.name = value
			}
			await AsyncStorage.setItem('user', JSON.stringify(new_user))
			this.setState({user: new_user})
		} catch (e) {
			alert(e)
		}
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 2, backgroundColor: '#13322C', alignItems: 'center', justifyContent: 'center'}}>
		    		<TextInput style={styles.header} value={this.state.user.name} onChangeText={value => this.saveData('name', value)} />
		    		<Text style={styles.body, {color: 'white'}}>
		    			Age: {this.state.user.age} {'\n'}
		    		</Text>
		    	</View>
		    	<View style={{flex: 4, flexDirection: 'row', padding: 10}}>
			    	<Text style={styles.body}>
			    		Last wellness exam: 02/15/2020 {'\n'}
			    	</Text>
		    	</View>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
  header: {
    fontWeight: 'bold',
    fontSize: 50,
    textAlign: 'center',
    fontFamily: 'yeseva-one',
    color: 'white',
    padding: 10,
  },
  body: {
  	fontSize: 20,
  }
});