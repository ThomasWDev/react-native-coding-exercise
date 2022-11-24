import React from 'react';
import { Text, View } from 'react-native';
import {
	SafeAreaProvider,
	SafeAreaView,
	useSafeArea,
} from 'react-native-safe-area-context';
import HomeRouter from './routes/MainRouter';
import { StatusBar } from 'expo-status-bar';
import { container } from './utils/styles';
import { ApolloProvider } from '@apollo/client';
import { client } from './utils/appoloClient';

const SpaceTours = () => {
	return (
		<ApolloProvider client={client()}>
			<SafeAreaProvider>
				<SafeAreaView
					style={container.rootBottom}
					edges={['top', 'left', 'right']}
				>
					<StatusBar style="light" />
					<HomeRouter />
				</SafeAreaView>
			</SafeAreaProvider>
		</ApolloProvider>
	);
};

export default SpaceTours;
