import React, { useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';
import MainLayout from '../layouts/MainLayout';
import { home } from '../utils/styles';
import SearchBar from '../components/SearchBar';
import TableHead from '../components/TableHead';
import TableData from '../components/TableData';
import TableFooter from '../components/TableFooter';
import { useQuery, useLazyQuery } from '@apollo/client';
import { GET_LAUNCHES_PAST_RESULT } from '../utils/queries';
import { icons } from '../assets/icons';

const Home = () => {
	const LIMIT_ITEM = 10;
	const [selectedRow, setSelectedRow] = useState(null);
	const [searchText, setSearchText] = useState('');
	const [filter, setFilter] = useState('launch_year:desc');
	const [offset, setOffset] = useState(0);
	const [launchesPast, setLaunchesPast] = useState([]);
	const [sort, setSort] = useState(true);
	const [isLoadMore, setIsLoadMore] = useState(false);
	const [searchParameters, setSearchParameters] = useState({
		limit: LIMIT_ITEM,
		sort: filter,
		offset: offset,
	});
	const [getLaunchesPastResult, { loading, error, data, refetch }] =
		useLazyQuery(GET_LAUNCHES_PAST_RESULT, {
			variables: searchParameters,
		});

	useEffect(() => {
		getLaunchesPastResult();
	}, []);

	useEffect(() => {
		let countLaunchPast = data?.launchesPastResult?.data?.length;
		if (countLaunchPast != undefined && (isLoadMore || offset == 0)) {
			if (offset == 0) {
				setLaunchesPast(data?.launchesPastResult.data);
			} else {
				setLaunchesPast([...launchesPast, ...data?.launchesPastResult.data]);
			}
			let currentOffSet = countLaunchPast + offset;
			setOffset(currentOffSet);
			setIsLoadMore(false);
		}
	}, [data?.launchesPastResult]);

	return (
		<MainLayout
			afterHeader={
				<>
					<View style={home.bannerContainer}>
						<Image style={home.bannerImg} source={icons.banner} />
					</View>
					<SearchBar
						text={searchText}
						setSearchText={setSearchText}
						doSearch={() => {
							setOffset(0);
							refetch({
								limit: LIMIT_ITEM,
								find: searchText,
								sort: `${filter.value}${sort ? '' : ':desc'}`,
								offset: offset,
							});
						}}
					/>
					<TableHead
						filter={filter}
						sort={sort}
						setSorting={(sort, selected) => {
							setOffset(0);
							refetch({
								limit: LIMIT_ITEM,
								sort: `${selected.value}${sort ? '' : ':desc'}`,
								offset: offset,
							});
							setSort(sort);
						}}
						setFilter={(selectedSort) => {
							setOffset(0);
							refetch({
								limit: LIMIT_ITEM,
								sort: selectedSort.value,
								offset: offset,
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
					data={launchesPast}
					loading={loading}
					sort={sort}
					selectedRow={selectedRow}
					setSelected={setSelectedRow}
					footer={
						<TableFooter
							currentTotalItem={offset}
							totalCount={data?.launchesPastResult.result.totalCount}
							loadMore={() => {
								setIsLoadMore(true);
								refetch({ ...searchParameters, offset: offset });
							}}
						/>
					}
				/>
			</View>
		</MainLayout>
	);
};

export default Home;
