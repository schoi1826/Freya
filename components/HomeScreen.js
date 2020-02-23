import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Font from 'expo-font';
import Collapsible from 'react-native-collapsible';

export default class HomeScreen extends Component {
	state = {
		fontLoaded: false,
	};

	async componentDidMount() {
	    await Font.loadAsync({
			'yeseva-one': require('../assets/fonts/YesevaOne-Regular.ttf'),
		});

		this.setState({ fontLoaded: true });
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={{flex: 7, justifyContent: 'center', backgroundColor: 'pink'}}>
					<Text style={styles.banner}>Freya</Text>
				</View>
				<View style={{flex:5, flexDirection: 'row', backgroundColor: 'skyblue'}}>
			        <View style={{flex: 1, flexDirection: 'column'}}>
			          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			            <Icon name='person-pin-circle' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('FindDoctors')}/>
			            <Text style={styles.label}>Find Doctors</Text>
			          </View>
			          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			            <Icon name='sentiment-satisfied' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('MyInformation')}/>
			            <Text style={styles.label}>My Information</Text>
			          </View>
					</View>
					<View style={{flex: 1, flexDirection: 'column'}}>
			          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			            <Icon name='local-hospital' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Health')}/>
			            <Text style={styles.label}>Health</Text>
			          </View>
			          <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
			            <Icon name='search' color='white' size={100} underlayColor='steelblue' onPress={() => this.props.navigation.navigate('Resources')}/>
			            <Text style={styles.label}>Resources</Text>
			          </View>
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
  banner: {
    fontWeight: 'bold',
    fontSize: 80,
    textAlign: 'center',
    fontFamily: 'yeseva-one',
    color: 'white',
  },
  label: {
  	fontSize: 20,
  }
});
