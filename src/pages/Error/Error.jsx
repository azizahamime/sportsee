import React from 'react';


/**
 * @component Error Elements to display on the Error page.
 * @returns {JSX.Element} 
 *
 */

export default function Error() {
	return (
		<main id='main-error'>
			<div className='container'>
				<p className='error-div'>Oups! La page que vous demandez n&apos;existe pas.</p>				
			</div>
		</main>
	);
		
}