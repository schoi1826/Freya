import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class DoctorInfoScreen extends Component {
	render() {
		const details = this.props.route.params.doctor;
		const doctor = details.profile;
		const clinic = details.practices[0];
		const address = clinic.visit_address;

		return (
			<View style={{flex: 1}}>
				<View style={{flex: 2, backgroundColor: '#13322C', alignItems: 'center', justifyContent: 'center'}}>
		    		<Text style={styles.header}>{doctor.first_name + ' ' + doctor.last_name}</Text>
		    		<Text style={styles.body, {color: 'white'}}>
		    			Gender: {doctor.gender} {'\n'}
		    			Phone: {clinic.phones[0].number}
		    		</Text>
		    	</View>
		    	<View style={{flex: 4, backgroundColor: '#DCBBB2', flexDirection: 'row', padding: 10}}>
			    	<Text style={styles.body}>
			    		Clinic: {clinic.name} {'\n'}
			    		Street Address: {address.street} {'\n'}
			    		Street Address 2: {address.street2} {'\n'}
			    		City: {address.city} {'\n'}
			    		State: {address.state} {'\n'}
			    		Zip Code: {address.zip}
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
    color: '#C89720',
    padding: 10,
  },
  body: {
  	fontSize: 20,
  }
});
