import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import api from '../../services/api';
import store from '../../store';

import {Card, Expense, Price} from './styles';

function Expenses(props) {
	const id = props.selected;

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);

	async function fetchData() {
		const response = await api.get(
			`deputados/${id}/despesas?pagina=1&itens=15&ordem=ASC&ordenarPor=ano`
		);

		setData(response.data.dados);
		setPage(page+1);
	}

	function renderItem({item}) {
		return (
			<Card>
				<Expense>{item.tipoDespesa}</Expense>
				<Price>{item.valorLiquido}</Price>
			</Card>
		);
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<FlatList 
			style={{flex:1}}
			data={data}
			keyExtractor={item => String(item.codDocumento)}
			renderItem={renderItem}
		/>
	);
}

const mapStateToProps = state => ({
  selected: state.selected.id,
})

export default connect(mapStateToProps)(Expenses)
