import React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { ticket } from '../utils/styles';

const Ticket = () => {
	const router = useRoute();
	console.log('router:', router.params);
	return (
		<ImageBackground
			style={ticket.container}
			source={require('../../assets/ticketbg.png')}
		>
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
