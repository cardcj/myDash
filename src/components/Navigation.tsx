import * as React from 'react';
import styled from '@emotion/styled';

const NavButton = styled('li')`
	display:inline-block;
	text-align: center
	padding: 10px;
	margin: 10px;
	font-family: 'Acme', sans-serif;
	font-size: 20px;
	list-style: none;
	cursor: pointer;
	&:after {
		display: block;
		content: '';
		border-bottom: 2px aquamarine solid;
		transform: scaleX(0);
		transition: transform 200ms ease-in-out;
	}
	&:hover:after {
		transform: scaleX(1);
	}
`

const NavBar = styled('ul')`
	width: 80%;
	margin: 0 auto;
	text-align: center;
	border-bottom: thin lightgrey solid;
`

const Navigation = () => {
	return (
		<NavBar>
			<NavButton>To-Do</NavButton>
			<NavButton>Journal</NavButton>
			<NavButton>Finances</NavButton>
			<NavButton>Timetable</NavButton>
		</NavBar>
	);
}

export default Navigation;