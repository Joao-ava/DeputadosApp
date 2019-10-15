import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {createMaterialTopTabNavigator} from 'react-navigation-tabs';

import Home from './pages/Home';
import DeputadoDetail from './pages/DeputadoDetail';
import Expenses from './pages/Expenses';

// titulo nas telas
Home.navigationOptions = {
  title: 'Deputados',
};

DeputadoDetail.navigationOptions = {
  title: 'Sobre',
};

Expenses.navigationOptions = {
	title: 'Despesas',
};

const Routes = createAppContainer(
	createStackNavigator({
		Home, 
		Detail: {
			screen: createMaterialTopTabNavigator({DeputadoDetail, Expenses}, 
				{
					tabBarOptions: {
						style: { backgroundColor: '#2828' },
					},
				}),
			navigationOptions: {
				title: 'Detalhes',
			},
		},
	})
);

export default Routes;
