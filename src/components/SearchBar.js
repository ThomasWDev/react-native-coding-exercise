import React from 'react';
import { Image, Text, TextInput, View } from 'react-native';
import { searchbar } from '../utils/styles';
import colors from '../utils/colors';
import Button from './Button';

const SearchBar = ({ text, setSearchText, doSearch }) => {
	return (
		<View style={searchbar.searchbarContainer}>
			<View style={searchbar.searchInput}>
				<View style={searchbar.searchInputWrapper}>
					<View style={searchbar.searchInputIcon}>
						<Image
							style={searchbar.searchInputIconImg}
							source={require('../../assets/searchRocket.png')}
						/>
					</View>
					<TextInput
						value={text}
						onChangeText={(value) => setSearchText(value)}
						autoCapitalize="none"
						placeholder="Search for flights"
						placeholderTextColor={colors.searchInputText}
						style={searchbar.searchInput}
					/>
				</View>
			</View>
			<View>
				<Button title="SEARCH" onPress={() => doSearch()} />
			</View>
		</View>
	);
};

export default SearchBar;
