import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Dimensions} from "react-native";

export const Container = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center; 
	width: 100%;
	padding: 7px;
`;

export const SearchBar = styled.TextInput`
	padding: 7px;
	margin: 0px;
	background-color: white;
	width: ${Dimensions.get('window').width - 50}px;
	border-radius: 3px;
`;

export const Title = styled.Text`
	font-size: 18px;
	font-weight: bold;
	color: white; 
`;

export const IconSearch = styled(Icon)`
	color: white;
`;
