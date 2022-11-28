import React from 'react';
import {
	Image,
	ImageBackground,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { ticket } from '../utils/styles';
import { imagesAssets } from '../assets/images';
import { icons } from '../assets/icons';

const Ticket = () => {
	const router = useRoute();
	const navigation = useNavigation();

	return (
		<ImageBackground
			style={ticket.container}
			imageStyle={ticket.containerImgStyle}
			source={imagesAssets.ticketBackground}
		>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image style={ticket.backButton} source={icons.back} />
			</TouchableOpacity>
			<ImageBackground style={ticket.ticketImg} source={imagesAssets.ticket}>
				<View style={ticket.ticketInfoBox}>
					<View>
						<Text style={ticket.ticketTextTitle}>MISSION NAME</Text>
						<Text style={ticket.ticketTextHeading}>
							{router.params?.mission_name}
						</Text>
					</View>
					<View style={ticket.ticketInfoBoxRocket}>
						<View style={ticket.ticketInfoBoxRocket}>
							<View>
								<Text style={ticket.ticketTextTitle}>ROCKET NAME</Text>
								<Text style={ticket.ticketTextBold}>
									{router.params?.rocket?.rocket_name}
								</Text>
							</View>
							<View>
								<Text style={ticket.ticketTextTitle}>ROCKET TYPE</Text>
								<Text style={ticket.ticketTextBold}>
									{router.params?.rocket?.rocket_type}
								</Text>
							</View>
						</View>
					</View>
				</View>
			</ImageBackground>
		</ImageBackground>
	);
};

export default Ticket;
