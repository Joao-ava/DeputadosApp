import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Home from './pages/Home';
import DeputadoDetail from './pages/DeputadoDetail';
import Expenses from './pages/Expenses';
import Discussion from './pages/Discussion';

// titulo nas telas
Home.navigationOptions = {
  title: 'Deputados',
 	headerStyle: {
		backgroundColor: '#2828',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	}
};

DeputadoDetail.navigationOptions = {
  title: 'Sobre',
};

Expenses.navigationOptions = {
	title: 'Despesas',
};

Discussion.navigationOptions = {
	title: 'Discursos',
};

// navegação de detalhes dos deputados
const Details = createMaterialTopTabNavigator(
	{
		DeputadoDetail, 
		Expenses,
		Discussion,
	},
	{
		tabBarOptions: {
			style: { backgroundColor: '#2828' },
		},
	}
);

Details.navigationOptions = {
	title: 'Detalhes',
 	headerStyle: {
		backgroundColor: '#2828',
	},
	headerTintColor: '#fff',
	headerTitleStyle: {
		fontWeight: 'bold',
	}
};

const Routes = createAppContainer(
	createStackNavigator({
		Home,
		Details,
	})
);

export default Routes;
