import React, { Component } from 'react';
import { View, Text, TouchableHighlight, StyleSheet, FlatList } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import Collapsible from 'react-native-collapsible';

const Tab = createBottomTabNavigator();

export default class HealthScreen extends Component {
	render() {
		return (
			<Tab.Navigator
				screenOptions={({ route }) => ({
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === 'Health Concerns') {
							iconName = 'report';
						} else if (route.name == 'Wellness Exam') {
							iconName = 'search';
						} else if (route.name === 'Your Rights') {
							iconName = 'library-books';
						}

						return <Icon name={iconName} color={color} />;
					}
				})}
				tabBarOptions={{
					activeTintColor: 'steelblue',
				}}
			>
				<Tab.Screen name="Health Concerns" component={HealthConcerns} />
				<Tab.Screen name="Wellness Exam" component={WellnessExam} />
				<Tab.Screen name="Your Rights" component={Rights} />
			</Tab.Navigator>
		);
	}
}

const concerns_list = [
	{title: 'Family Planning', content: 'Contraceptive options, sterilization, and abortion', collapsed: true, key: 0},
	{title: 'Reproductive Health', content: 'Pregnancy, menstruation, and menopause', collapsed: true, key: 1},
];

class HealthConcerns extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
			list: concerns_list
		};
	}

	toggleExpand = (val) => {
		let item = this.state.list;
		item[val].collapsed = !item[val].collapsed;
		this.setState({list: item});
	};

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Your gynecologist can help you with the following topics:</Text>
				</View>
				<View style={{flex: 4}}>
					<FlatList 
						data={this.state.list}
						renderItem={row => {
							return (
								<View>
									<TouchableHighlight onPress={() => this.toggleExpand(row.item.key)} style={styles.title} underlayColor='red'>
										<Text style={styles.titleText}>{row.item.title}</Text>
									</TouchableHighlight>
									<Collapsible collapsed={row.item.collapsed}>
										<Text style={styles.content}>{row.item.content}</Text>
									</Collapsible>
								</View>
							)
						}}
					/>
				</View>
			</View>
		);
	}
}

const exams_list = [
	{title: 'Pap Test', content: 'Starting at the age of 21, pap tests can help detect signs of cervical cancer', collapsed: true, key: 0},
	{title: 'Pelvic Exam', content: 'Pregnancy, menstruation, and menopause', collapsed: true, key: 1},
	{title: 'Clinical Breast Exam', content: 'For those around the ages 25-39, this exam will test for breast cancer', collapsed: true, key: 2},
	{title: 'Mammogram', content: 'Starting at the age of 40, mammogram screenings every 1-2 years can help detect cancer', collapsed: true, key: 3},
	{title: 'STD Screening', content: 'For those sexually active, this exam will screen for sexually transmitted diseases', collapsed: true, key: 4},
];

class WellnessExam extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
			list: exams_list
		};
	}

	toggleExpand = (val) => {
		let item = this.state.list;
		item[val].collapsed = !item[val].collapsed;
		this.setState({list: item});
	};

	render() {
		return (
			<View style={{flex: 1}}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Your periodical wellness visit could include:</Text>
				</View>
				<View style={{flex: 4}}>
					<FlatList 
						data={this.state.list}
						renderItem={row => {
							return (
								<View>
									<TouchableHighlight onPress={() => this.toggleExpand(row.item.key)} style={styles.title} underlayColor='red'>
										<Text style={styles.titleText}>{row.item.title}</Text>
									</TouchableHighlight>
									<Collapsible collapsed={row.item.collapsed}>
										<Text style={styles.content}>{row.item.content}</Text>
									</Collapsible>
								</View>
							)
						}}
					/>
				</View>
			</View>
		)
	}
}

const rights_list = [
	{title: 'Family Planning', content: 'Contraceptive options, sterilization, and abortion', collapsed: true, key: 0},
	{title: 'Reproductive Health', content: 'Pregnancy, menstruation, and menopause', collapsed: true, key: 1},
];

class Rights extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collapsed: true,
			list: rights_list
		};
	}

	toggleExpand = (val) => {
		let item = this.state.list;
		item[val].collapsed = !item[val].collapsed;
		this.setState({list: item});
	};

	render() {
		return (
			<View>
				<FlatList 
					data={this.state.list}
					renderItem={row => {
						return (
							<View>
								<TouchableHighlight onPress={() => this.toggleExpand(row.item.key)} style={styles.title} underlayColor='red'>
									<Text style={styles.titleText}>{row.item.title}</Text>
								</TouchableHighlight>
								<Collapsible collapsed={row.item.collapsed}>
									<Text style={styles.content}>{row.item.content}</Text>
								</Collapsible>
							</View>
						)
					}}
				/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	header: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: 'lightblue',
		padding: 10,
	},
	headerText: {
		fontSize: 25,
		textAlign: 'center',
		flexWrap: 'wrap',
	},
  	title: {
   		justifyContent: 'center',
  		height: 100,
  		backgroundColor: 'pink',
  	},
  	titleText: {
  		fontSize: 25,
  		textAlign: 'center',
  	},
  	content: {
  		fontSize: 20,
  		textAlign: 'center',
  		padding: 20,
  	}
});