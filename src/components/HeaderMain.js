import React from 'react';
import { Image, View } from 'react-native';
import { header } from '../utils/styles';
import { icons } from '../assets/icons';

const HeaderMain = ({ title, afterHeader }) => {
	return (
		<>
			<View style={header.mainHeader}>
				<View style={header.headerLeft}>
					<Image style={header.headerIcon} source={icons.planent} />
				</View>
				<View style={header.headerCenter}>
					<Image style={header.headerLogoImg} source={icons.logo} />
				</View>
				<View style={header.headerRight}>
					<View style={header.headerRightContents}>
						<Image style={header.headerRightIcon} source={icons.rocket} />
					</View>
				</View>
			</View>
			{afterHeader && <View style={header.headerAfter}>{afterHeader}</View>}
		</>
	);
};

export default HeaderMain;
