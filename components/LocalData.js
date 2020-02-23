import { AsyncStorage } from 'react-native';

const user = {
	name: 'Hello World',
	age: '100'
}

try {
	AsyncStorage.setItem('user', JSON.stringify(user))
} catch (e) {
	alert(e)
}