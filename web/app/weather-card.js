var React = require('react');

const DetailsRow = ({ title, summary }) => {
	const styles = {
		row: {
			width: '100%',
			padding: '0 20px',
			display: 'flex',
			alignItems: 'center',
			margin: '25px 0'
		},
		title: {
			fontWeight: 500,
			fontSize: '25px',
			margin: 0,
			fontStyle: 'italic'
		}
	};

	return (
		<div style={styles.row}>
			<div style={{ width: '80%' }}>
				<h1 style={styles.title}>{title}</h1>
			</div>
		</div>
	);
};

export const WeatherCard = (props) => {
	const styles = {
		cardHeader: {
			display: 'flex',
			height: '125px',
			justifyContent: 'space-between',
			alignItems: 'center',
			padding: '10px 20px',
			color: '#fff',
		},
		headerName: {
			margin: 0,
			fontWeight: 500,
			fontSize: '25px',
			textAlign: 'right'
		},
		headerDetailsLink: {
			margin: '4px 0 0',
			fontWeight: 300,
			fontSize: '17px',
			opacity: 0.8,
			textAlign: 'right'
		},
		icon: {
			marginTop: '-25px',
			marginLeft: '15px'
		}
	};

  function getIcon() {
    return props.expanded ?
           <h3 style={styles.headerDetailsLink} className='icon ion-ios-arrow-up'>back</h3> :
           <h3 style={styles.headerDetailsLink} className='icon ion-ios-arrow-down'>see details</h3>
  }
  return (
	<div style={{ position: 'absolute', top: 0 }}>
		<header style={styles.cardHeader} className='card-header-details'>
			<div style={styles.icon}><h2 className='icon ion-information-circled'/></div>
			<div>
				<h3 style={styles.headerName}>{props.day}</h3>
        {getIcon()}
			</div>
		</header>

		<div style={{color: '#fff'}}>
			<DetailsRow title={"min: " + props.min}/>
			<DetailsRow title={"max: " + props.max}/>
		</div>
  </div>
  );
};
