import React from 'react';
import {
	ActivityIndicator,
	FlatList,
	Image,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { table } from '../utils/styles';
import colors from '../utils/colors';
import { useNavigation, useRoute } from '@react-navigation/native';

const TableData = ({
	data,
	loading,
	selectedRow,
	setSelected,
	sort,
	footer,
}) => {
	const navigation = useNavigation();

	return (
		<View style={table.tableData}>
			{loading ? (
				<View
					style={{
						height: '50%',
					}}
				>
					<ActivityIndicator color={colors.loader} />
				</View>
			) : (
				<FlatList
					data={data}
					style={{
						marginBottom: 30,
					}}
					renderItem={({ item: launch }) => {
						return (
							<View style={table.tableRow}>
								<View style={table.tableRowLeft} />
								<View style={table.tableRowCenter}>
									<TouchableOpacity
										style={[
											table.tableRowData,
											selectedRow === launch?.id && table.tableRowSelected,
										]}
										onPress={() => setSelected(launch?.id)}
									>
										<Text
											style={[
												table.tableRowText,
												selectedRow === launch?.id &&
													table.tableRowSelectedText,
											]}
										>
											{launch?.mission_name}
										</Text>
									</TouchableOpacity>
								</View>
								<View style={table.tableRowRight}>
									{selectedRow === launch?.id && (
										<TouchableOpacity
											style={table.tableRowAction}
											onPress={() => {
												navigation.navigate('TicketScreen', { ...launch });
											}}
										>
											<Image
												style={table.tableRowActionImage}
												source={require('../../assets/chevronright.png')}
											/>
										</TouchableOpacity>
									)}
								</View>
							</View>
						);
					}}
					ListEmptyComponent={
						<View style={{ alignItems: 'center', paddingVertical: 5 }}>
							<Text>No data found!</Text>
						</View>
					}
					ListFooterComponent={footer}
				/>
			)}
		</View>
	);
};

export default TableData;
