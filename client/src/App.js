import React from 'react';
import { Typography, AppBar, makeStyles } from '@material-ui/core';
import VideoPlayer from './components/VideoPlayer';
import Notifications from './components/Notifications';
import Options from './components/Options';

const useStyles = makeStyles((theme) => ({
	appBar: {
		position: 'static',
		borderRadius: 15,
		margin: '30px 100px',
		display: 'flex',
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		width: '600px',
		border: '2px solid black',

		[theme.breakpoints.down('xs')]: {
			width: '90%',
		},
	},
	txt: {
		fontFamily: 'Roboto',
		fontSize: 26,
	},
	wrapper: {
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
		width: '100%',
	},
}));

const App = () => {
	const classes = useStyles();

	return (
		<div className={classes.wrapper}>
			<AppBar className={classes.appBar}>
				<Typography className={classes.txt}>Video Chat</Typography>
			</AppBar>
			<VideoPlayer />
			<Options>
				<Notifications />
			</Options>
		</div>
	);
};

export default App;
