import React, { useState, useEffect } from 'react';
import Angel1 from './images/angel_1.jpg';
import Angel2 from './images/angel_2.jpg';
import Angel3 from './images/angel_3.jpg';

function Child(props) {
	//console.log(props)
	let blink = props.blink
	

	const [blinkCounts, setCount] = useState(0)

	
	useEffect(() => {

    	blink ? setCount(blinkCounts => blinkCounts + 1) : setCount(blinkCounts => blinkCounts + 0)
 
  	}, [blink]); 
	console.log(blinkCounts)
		return(
			<>
				<header>
					{blink ? <h1>DON'T</h1> : <h1>BLINK</h1> }
				</header>
				<main>
					{blinkCounts < 5 ? <img src = {Angel1} /> 
					: blinkCounts >= 5 && blinkCounts < 10 ? <img src = {Angel2} /> 
					: <img src = {Angel3} /> }
				</main>

			</>

		)
}


export default Child