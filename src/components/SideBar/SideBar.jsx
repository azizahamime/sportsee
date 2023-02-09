import React from 'react';
import yoga from '../../assets/yoga.svg';
import natation from '../../assets/natation.svg';
import syclisme from '../../assets/syclisme.svg';
import poids from '../../assets/poids.svg';

/**
 * Vertical navigation component aside
 *
 * @returns {JSX.Element} The vertical navigation component aside
 */
export default function SideBar() {
	return (
		<aside>
			
			<div className="nav-footer">
				<img src={yoga} alt="yoga" />					
				<img src={natation} alt="natation" />					
				<img src={syclisme} alt="syclisme" />
				<img src={poids} alt="poids" />
			</div>
			<p> Copyright, SportSee 2022</p>
			
		</aside>
	);
}