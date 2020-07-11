import React from 'react';
import './Searchbox.css';

const Searchbox = ({ change }) => {
	return (
		<div>
			<input className = "tc pa3 ba b--green nooutline bg-lightest-blue" type = "search" placeholder = "Search your robots" onChange = { change } />
		</div>
	)
}


export default Searchbox;