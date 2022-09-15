import { useSelector } from 'react-redux';

const Notification = () => {
	const style = {
		border: 'solid',
		padding: 10,
		borderWidth: 1,
	};
	const notification = useSelector((state) => state.notification);
	return (
		<>
			{notification && (
				<div style={style}>you have voted for {notification}</div>
			)}
		</>
	);
};

export default Notification;
