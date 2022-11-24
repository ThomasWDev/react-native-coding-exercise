import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import { table } from '../utils/styles';
import Button from './Button';
import Dropdown from './Dropdown';

const TableHead = ({ filter, sort, setSorting, setFilter }) => {
	const filters = [
		{ label: 'MISSION NAME', value: 'mission_name' },
		{ label: 'ROCKET NAME', value: 'rocket_name' },
		{ label: 'ROCKET TYPE', value: 'rocket_type' },
		{ label: 'LAUNCH YEAR', value: 'launch_year' },
	];
	const [selected, setSelected] = useState(filters[0]);

	return (
		<View>
			<View style={table.tableHeader}>
				<View style={table.tableFilter}>
					<Dropdown
						value={selected}
						data={filters}
						onSelect={(selected) => {
							setSelected(selected);
							setFilter(selected);
						}}
					>
						<Image
							style={table.tableSortIcon}
							source={require('../../assets/filtericon.png')}
						/>
					</Dropdown>
				</View>
				<View style={table.tableSortContainer}>
					<Button transparent onPress={() => setSorting(!sort, selected)}>
						<Text style={table.tableSortText}>{selected?.label}</Text>
						{sort ? (
							<Image
								style={table.tableSortIcon}
								source={require(`../../assets/arrowup.png`)}
							/>
						) : (
							<Image
								style={table.tableSortIcon}
								source={require(`../../assets/arrowdown.png`)}
							/>
						)}
					</Button>
				</View>
			</View>
			<View style={table.tableHeaderBorder} />
		</View>
	);
};

export default TableHead;
