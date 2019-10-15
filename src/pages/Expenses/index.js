import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {Provider} from 'react-redux';

import api from '../../services/api';
import store from '../../store';

export default function Expenses(props) {
	const id = props.navigation.getParam('id');

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	async function fetchData() {
		const response = await api.get(`deputados/{}/despesas?ordem=ASC&ordenarPor=ano`);
	}

	return (
		<Provider store={store}>
			<FlatList 
				data={data}
				keyExtractor={item => String(item.codDocumento)}
				onRender={({item}) => <Text>teste {item.codDocumento}</Text>}
			/>
		</Provider>
	);
}
