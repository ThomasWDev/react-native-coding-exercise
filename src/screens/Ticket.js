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

const Ticket = () => {
	const router = useRoute();
	const navigation = useNavigation();

	return (
		<ImageBackground
			style={ticket.container}
			imageStyle={ticket.containerImgStyle}
			source={require('../../assets/ticketbg.png')}
		>
			<TouchableOpacity onPress={() => navigation.goBack()}>
				<Image
					style={ticket.backButton}
					source={require('../../assets/backbutton.png')}
				/>
			</TouchableOpacity>
			<ImageBackground
				style={ticket.ticketImg}
				source={require('../../assets/ticket.png')}
			>
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
