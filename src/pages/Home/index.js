import React, {useState, useEffect} from 'react';
import {View, FlatList} from 'react-native';

import api from '../../services/api';

import DeputadoCard from '../../components/DeputadoCard';

// import { Container } from './styles';

export default function Home(props) {
  const [deputados, setDeputados] = useState([]);
  const [page, setPage] = useState(1);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function fetchData() {
    const response = await api.get(
      `deputados?pagina=${page}&itens=15&ordem=ASC&ordenarPor=nome`,
    );

    setDeputados([...deputados, ...response.data.dados]);
    setPage(page + 1);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <View>
      <FlatList
        data={deputados}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => (
          <DeputadoCard
            deputado={item}
            onPress={() =>
              props.navigation.navigate('DeputadoDetail', {
                id: item.id,
                photo: item.urlFoto,
              })
            }
          />
        )}
        onEndReached={fetchData}
        onEndReachedThreshold={0.1}
      />
    </View>
  );
}
