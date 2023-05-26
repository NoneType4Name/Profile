import React, { useState, useEffect } from 'react';
import * as functions from './functions';
import './style.css';


function intro(){
	return(
		<div id="intro">
				<h1>Hello, i'm NoneType4Name.</h1>
				<h2>Self-taught software engineer;</h2>
				<h2>Yong programmer/developer;</h2>
				<h2>2.5 years of experience in IT field;</h2>
			</div>
	)
}

function self(){
	return(
		<div id="self">
			<h3>My projects</h3>
			<div>
				{}
			</div>
			</div>
	)
}

function statistic(){
	return(
		<div id="stats">
			<h2>Some statistic</h2>
		</div>
	)
}

function App() {
	console.log(functions.GitHubRepos('NoneType4Name'))
	return (
		<div id="main">
			{intro()}
			{self()}
			{statistic()}
		</div>
	);
}

export default App;
