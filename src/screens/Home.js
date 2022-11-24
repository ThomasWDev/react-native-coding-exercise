import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { home } from '../utils/styles';
import SearchBar from '../components/SearchBar';
import TableHead from '../components/TableHead';
import TableData from '../components/TableData';
import TableFooter from '../components/TableFooter';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_LAUNCHES } from '../utils/queries';

const Home = () => {
	const [selectedRow, setSelectedRow] = useState(null);
	const [searchText, setSearchText] = useState('');
	const [filter, setFilter] = useState('launch_year:desc');
	const [limit, setLimit] = useState(6);
	const [sort, setSort] = useState(true);
	const [search, setSearch] = useState({
		limit: limit,
		sort: filter,
		offset: 0,
	});
	const [getData, { loading, error, data, fetchMore, refetch }] = useLazyQuery(
		GET_LAUNCHES,
		{
			variables: search,
		}
	);

	useEffect(() => {
		getData();
	}, []);

	return (
		<MainLayout
			afterHeader={
				<>
					<View style={home.bannerContainer}>
						<Image
							style={home.bannerImg}
							source={require('../../assets/banner.png')}
						/>
					</View>
					<SearchBar
						text={searchText}
						setSearchText={setSearchText}
						doSearch={() => {
							refetch({
								limit: limit,
								find: searchText,
								sort: `${filter.value}${sort ? '' : ':desc'}`,
								offset: 0,
							});
						}}
					/>
					<TableHead
						filter={filter}
						sort={sort}
						setSorting={(sort, selected) => {
							refetch({
								limit: limit,
								sort: `${selected.value}${sort ? '' : ':desc'}`,
								offset: 0,
							});
							setSort(sort);
						}}
						setFilter={(selectedSort) => {
							refetch({
								limit: limit,
								sort: selectedSort.value,
								offset: 0,
							});
							setFilter(selectedSort);
							setSort(true);
						}}
					/>
				</>
			}
		>
			<View>
				<TableData
					data={data?.launchesPast || []}
					loading={loading}
					sort={sort}
					selectedRow={selectedRow}
					setSelected={setSelectedRow}
					footer={
						<TableFooter
							search={search}
							totalData={data?.launchesPast.length}
							loadMore={() => {
								fetchMore({
									variables: { ...search, offset: limit },
								});
							}}
						/>
					}
				/>
			</View>
		</MainLayout>
	);
};

export default Home;
