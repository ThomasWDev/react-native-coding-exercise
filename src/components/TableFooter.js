import React from 'react';
import { Text, View } from 'react-native';
import { table } from '../utils/styles';
import Button from './Button';

const TableFooter = ({ currentTotalItem, totalCount, loadMore }) => {
	return (
		<View style={table.tableFooter}>
			{currentTotalItem < totalCount && (
				<View>
					<Text style={table.tableFooterPagination}>
						{currentTotalItem > totalCount ? totalCount : currentTotalItem} of{' '}
						{totalCount}
					</Text>
				</View>
			)}
			{currentTotalItem < totalCount && (
				<View>
					<Button title="LOAD MORE" fullWidth onPress={loadMore} />
				</View>
			)}
		</View>
	);
};

export default TableFooter;
