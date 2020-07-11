import React from 'react';

const Card = (props) => {
	const { id, name, email } = props;
	return(
		<div className = "bg-light-green tc dib br2 pa3 ma3 b-solid bw3 b--red grow bw2 shadow-3">
			<img alt = "loading" src = {`https://robohash.org/${id}?size=200x200`} />
			<h3>{name}</h3>
			<p>{email}</p>
		</div>
	);
}

export default Card;