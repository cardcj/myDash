import * as React from 'react';
import styled from '@emotion/styled';

// Styling the individual navigation buttons
const NavButton = styled('li')`
	display:inline-block;
	text-align: center;
	padding: 10px;
	margin: 10px;
	color: #320E3B;
	font-family: 'Acme', sans-serif;
	font-size: 20px;
	list-style: none;
	cursor: pointer;
	&:after {
		display: block;
		content: '';
		border-bottom: 2px #7FEFBD solid;
		transform: scaleX(0);
		transition: transform 200ms ease-in-out;
	}
	&:hover:after {
		transform: scaleX(1);
	}
`

// Styling the overall navbar
const NavBar = styled('nav')`
	position: relative;
	width: 80%;
	margin: 0 auto;
	text-align: center;
	z-index: 10;
	background-color: #7F96FF;
	box-shadow: 0px 5px 5px -6px #1A535C;
`

// JSX for the navbar
const Navigation = () => {
	return (
		<NavBar role="navigation">
			<NavButton>To-Do</NavButton>
			<NavButton>Journal</NavButton>
			<NavButton>Finances</NavButton>
			<NavButton>Timetable</NavButton>
		</NavBar>
	);
}

export default Navigation;