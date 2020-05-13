import React, { useState, useEffect } from 'react';
import Angel1 from './images/angel_1.jpg';
import Angel2 from './images/angel_2.jpg';
import Angel3 from './images/angel_3.jpg';
import dontBlink from './images/DONT-BLINK.png'
import './Child.css'

function Child(props) {
	let blink = props.blink
	
	const [blinkCounts, setCount] = useState(0)
	
	useEffect(() => {

		const blinkInterval = props.setInterval(1000/(blinkCounts * .3))

			blinkCounts < 3 ? props.setColor('#000000')
			: blinkCounts >= 3 && blinkCounts < 6 ? props.setColor('#B22222') 
			: props.setColor('#8B0000')

    	blink ? setCount(blinkCounts => blinkCounts + 1) : setCount(blinkCounts => blinkCounts + 0)
  	}, [blink]); 

	if(blinkCounts < 3){
		return(
			<section className = 'sign'>
				<img alt = 'Weeping Angel poster that reads: Dont blink. Blink and youre dead. 
				Theyre fast, faster than you can believe. Dont turn your back. Dont look away. And dont blink. Good luck.' src = {dontBlink} />
			</section>
		)
	}else if (blinkCounts >= 3 && blinkCounts < 15){
		return( 
			<section className = 'fullSection'>
				<header style = {{color: props.color}}>
					{blink ? <h1 >DON'T</h1> : <h1>BLINK</h1> }
				</header>
				<main>
					{blinkCounts < 5 ? <img alt = 'A weeping angel with its head in hands.' className = 'angelOne' src = {Angel1} /> 
					: blinkCounts >= 5 && blinkCounts < 10 ? <img alt = 'A weeping angel reaching forward.' className = 'angelTwo' src = {Angel2} /> 
					: <img alt = 'Evil looking weeping angel' className = 'angelThree' src = {Angel3} /> }
				</main>
			</section>
		)
	} else {
		return(
			<div className = 'blackOut'>
				<section className = 'finalWords'>
					<h1>You just became a Weeping Angel's Snack</h1>
					<p>Better luck next time.</p>
					<button className = 'button' onClick={() => setCount(0)}>Try Again</button>
				</section>
			</div>
		)
	}
}


export default Child