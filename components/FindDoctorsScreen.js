import React, { Component } from 'react';
import { View, Text, Dimensions, StyleSheet, TouchableHighlight } from 'react-native';
import MapView from 'react-native-maps';

export default class FindDoctorsScreen extends Component {
	constructor(props) {
		super(props);
		this.state = {
			doctors: []
		};
	}

	componentDidMount = () => {
		this.getData()
	}

	getData() {
		fetch('https://api.betterdoctor.com/2016-03-01/doctors?specialty_uid=gynecologist&location=38.846226%2C-77.306374%2C100&skip=0&limit=10&user_key=742e73b25557afce9c003ea26fe92c9e', {
			method: 'GET',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			}
		}).then((response) => {return response.json()})
		.then((responseData) => {
			this.setState({doctors: responseData.data})
		}).done();
	}

	render() {
		return (
			<View>
		      <MapView style={styles.map}>
		      		{this.state.doctors.map((val, index) => {
		      			return (
		      				<MapView.Marker
		      					coordinate={{latitude: val.practices[0].lat, longitude: val.practices[0].lon}}
		      					title={val.profile.first_name + ' ' + val.profile.last_name}
		      					description={val.practices[0].name}
		      				>
		      					<MapView.Callout onPress={() => {this.props.navigation.navigate('DoctorInfo', {doctor: val})} }>
		      						<Text>{val.profile.first_name + ' ' + val.profile.last_name}</Text>
		      					</MapView.Callout>
		      				</MapView.Marker>
		      			)
		      		})}

		      	
		     	</MapView>
		    </View>
		);
	}
}

const styles = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  }
});
