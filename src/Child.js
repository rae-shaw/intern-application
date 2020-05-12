import React, { useState, useEffect } from 'react';

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
  				<p>Doctor Who is the Best</p>
				 
  				{blink ? <h1>DON'T</h1> : <h1>BLINK</h1> }
  			</header>
  		</>
  	)
}

export default Child