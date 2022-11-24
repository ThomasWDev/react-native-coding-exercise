import { StyleSheet } from 'react-native';
import colors from './colors';

const container = StyleSheet.create({
	rootTop: {
		backgroundColor: colors.mainBg,
	},
	rootBottom: {
		flex: 1,
		backgroundColor: colors.mainBg,
	},
	container: {
		backgroundColor: colors.containerBg,
		flex: 1,
		height: '100%',
	},
});

const header = StyleSheet.create({
	mainHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-between',
		backgroundColor: colors.headerBg,
		maxHeight: 120,
		zIndex: 1,
	},
	headerLeft: {
		flex: 1.5,
		alignItems: 'flex-end',
	},
	headerIcon: {
		width: 40,
		height: 40,
		alignSelf: 'flex-end',
	},
	headerCenter: {
		flex: 6,
		paddingTop: 5,
		alignItems: 'center',
	},
	headerLogoImg: {
		width: '100%',
		height: 100,
		resizeMode: 'contain',
	},
	headerRight: {
		flex: 1.5,
	},
	headerRightContents: {
		position: 'relative',
	},
	headerRightIcon: {
		position: 'absolute',
		zIndex: 9,
		width: '100%',
		height: 140,
		resizeMode: 'contain',
	},
	headerAfter: {
		backgroundColor: colors.containerBg,
		flex: 0.34,
	},
});

const home = StyleSheet.create({
	bannerContainer: {
		alignItems: 'center',
		marginTop: 10,
	},
	bannerImg: {
		width: '70%',
		resizeMode: 'contain',
	},
});

const button = StyleSheet.create({
	buttonContainer: {
		paddingVertical: 5,
		paddingHorizontal: 10,
		backgroundColor: colors.buttonBg,
		minWidth: 100,
		borderRadius: 20,
		minHeight: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonFull: {
		width: '100%',
	},
	buttonTransparent: {
		padding: 5,
		borderRadius: 20,
		minHeight: 35,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	buttonText: {
		color: colors.buttonText,
		fontWeight: 'bold',
	},
	buttonIcon: {
		width: 25,
		height: 25,
		resizeMode: 'contain',
		tintColor: colors.actionText,
	},
});

const searchbar = StyleSheet.create({
	searchbarContainer: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		paddingHorizontal: 20,
		paddingVertical: 10,
	},
	searchbarInput: {
		flex: 1,
	},
	searchInputWrapper: {
		backgroundColor: colors.searchBg,
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		marginRight: 10,
		borderRadius: 20,
		paddingLeft: 10,
	},
	searchInput: {
		height: 35,
		flex: 1,
		color: colors.searchInputText,
	},
	searchInputIcon: {
		paddingHorizontal: 10,
	},
	searchInputIconImg: {
		height: 25,
		width: 25,
	},
});

const dropdown = StyleSheet.create({
	button: {
		zIndex: 1,
	},
	buttonText: {
		flex: 1,
		textAlign: 'center',
	},
	icon: {
		marginRight: 10,
	},
	dropdown: {
		position: 'absolute',
		backgroundColor: colors.dropdownBg,
		width: '50%',
		left: 20,
		right: 20,
		shadowColor: '#868686',
		shadowRadius: 4,
		shadowOffset: { height: 4, width: 0 },
		shadowOpacity: 0.5,
		paddingTop: 5,
		paddingBottom: 10,
	},
	overlay: {
		width: '100%',
		height: '100%',
	},
	item: {
		padding: 10,
		marginHorizontal: 10,
		marginVertical: 5,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: colors.dropdownItemBg,
		borderRadius: 10,
	},
});

const table = StyleSheet.create({
	tableHeader: {
		marginHorizontal: 15,
		marginTop: 10,
		paddingBottom: 10,
		position: 'relative',
		flex: 1,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
	},
	tableHeaderBorder: {
		height: 6,
		backgroundColor: colors.headerBg,
		marginHorizontal: 20,
		marginTop: 10,
	},
	tableFilter: {
		position: 'absolute',
		left: 0,
		zIndex: 9,
	},
	tableSortContainer: {
		flexDirection: 'row',
		alignItems: 'center',
	},
	tableSortButton: {
		flexDirection: 'row',
		height: 30,
		justifyContent: 'center',
		transition: '1s ease-in-out',
	},
	tableSortIcon: {
		marginTop: 5,
		marginLeft: 10,
		width: 20,
		height: 20,
		resizeMode: 'contain',
		tintColor: colors.actionText,
	},
	tableSortText: {
		fontSize: 15,
		fontWeight: 'bold',
		marginTop: 5,
		color: colors.actionText,
	},
	tableData: {
		paddingTop: 0,
	},
	tableRow: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginVertical: 5,
	},
	tableRowLeft: {
		flex: 2,
	},
	tableRowCenter: {
		flex: 6,
		borderRadius: 10,
		backgroundColor: colors.tableRowBg,
	},
	tableRowRight: {
		flex: 2,
	},
	tableRowData: {
		padding: 20,
		borderRadius: 10,
	},
	tableRowSelected: {
		backgroundColor: colors.buttonBg,
	},
	tableRowText: {
		textAlign: 'center',
		color: colors.tableRowText,
	},
	tableRowSelectedText: {
		color: colors.buttonText,
	},
	tableRowAction: {
		zIndex: 9,
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'flex-end',
		alignItems: 'center',
		marginRight: 20,
	},
	tableRowActionImage: {
		width: 30,
		height: 30,
		resizeMode: 'contain',
	},
	tableFooter: {
		marginTop: 10,
		marginHorizontal: 70,
		marginVertical: 5,
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	tableFooterPagination: {
		fontWeight: 'bold',
		color: colors.actionText,
	},
});

const ticket = StyleSheet.create({
	container: {
		flex: 1,
	},
	containerImgStyle: {
		resizeMode: 'cover',
	},
	ticketImg: {
		flex: 1,
		resizeMode: 'contain',
	},
	ticketInfoBox: {
		flexDirection: 'column',
		justifyContent: 'space-between',
		position: 'absolute',
		top: '32%',
		right: '2%',
		height: '15%',
		transform: [{ rotate: '90deg' }],
	},
	ticketInfoBoxRocket: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		width: '90%',
	},
	ticketTextTitle: {
		color: colors.ticketText,
		fontSize: 11,
	},
	ticketTextHeading: {
		color: colors.ticketText,
		fontSize: 30,
	},
	ticketTextBold: {
		color: colors.ticketText,
		fontSize: 11,
		fontWeight: 'bold',
	},
	backButton: {
		width: 45,
		height: 45,
		margin: 10,
		resizeMode: 'contain',
	},
});

export { container, header, home, searchbar, button, dropdown, table, ticket };
