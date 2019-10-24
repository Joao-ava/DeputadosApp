import React, {useState, useEffect} from 'react';
import {FlatList, View, Text} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import api from '../../services/api';
import store from '../../store';

import DiscussionCard from '../../components/DiscussionCard';
import NoData from '../../components/NoData';

function Discussion(props) {
	const id = props.selected;

	const [data, setData] = useState([]);
	const [page, setPage] = useState(1);
	const [end, setEnd] = useState(false);

	async function fetchData() {
		if (end) {
			return;
		}

		const response = await api.get(
			`deputados/${id}/discursos?ordenarPor=dataHoraInicio&ordem=ASC&itens=15&pagina=${page}`
		);

		setData([...data, ...response.data.dados]);
		setPage(page+1);

		const nextExist = response.data.links.filter(link => link.rel === 'next');

		if (!nextExist) {
			setEnd(true);
		}
	}

	function renderItem({item}) {
		return (
			<DiscussionCard item={item} />
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
				keyExtractor={item => item.dataHoraInicio}
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

export default connect(mapStateToProps)(Discussion);
