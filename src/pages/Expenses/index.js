import React, {useState, useEffect} from 'react';
import {FlatList, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import api from '../../services/api';
import store from '../../store';

import {Card, Expense, Row, Info} from './styles';
import NoData from '../../components/NoData';

function Expenses(props) {
	const id = props.selected;

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [end, setEnd] = useState(false);

	async function fetchData() {
		if (end) {
			return;
		}

		
		const response = await api.get(
			`deputados/${id}/despesas?pagina=${page}&itens=15&ordem=DESC&ordenarPor=dataDocumento`
		);

		setData([...data, ...response.data.dados]);

		setPage(page+1);

		const nextExist = response.data.links.filter(link => link.rel === 'next');

		if (!nextExist.length) {
			alert('Você chegou ao fim!')
			setEnd(true);
		}
	}

	function renderItem({item}) {
		return (
			<Card>
				<Expense>{item.tipoDespesa}</Expense>

				<Row>
					<Info>{item.dataDocumento || item.ano}</Info>
					<Info>
						R$ {Number(item.valorLiquido).toFixed(2)}
					</Info>
				</Row>
			</Card>
		);
	}

	function noData() {
		if (!data.length) {
			return <NoData />;
		}
	}

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<>
			<FlatList 
				style={{flex:1}}
				data={data}
				keyExtractor={item => String(data.indexOf(item))}
				renderItem={renderItem}
				onEndReached={fetchData}
				onEndReachedThreshold={0.1}
			/>

			{ noData() }
		</>
	);
}

const mapStateToProps = state => ({
  selected: state.selected.id,
});

export default connect(mapStateToProps)(Expenses);
