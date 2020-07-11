import React from 'react';
import Card from './Card';


const Cardlist = ({ robots }) => {
	const cardsList = robots.map((user, i) => {
		const { id, name, email} = user;
		return <Card key = {i} id = {id} name = {name} email = {email} />
	});

	return (
		<div>
			{cardsList}
		</div>
	);
} 

export default Cardlist;