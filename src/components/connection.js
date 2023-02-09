import { useEffect, useState } from 'react';
import axios from 'axios';

const urlUsers = 'http://localhost:3001/user/12';
/**
 * @component Connection get datas.
 * @param {String} url - get the url of the user and activities
 * @returns {Object} 
 *
 */

export default function Connection(url = urlUsers) {
	const [data, setData] = useState({});
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	useEffect(() => {
		setIsLoading(true);
		axios
			.get(url)
			.then((response) => setData(response.data))
			.catch((error) => {
				console.log(error);
				setError(error);
			})
			.finally(() => setIsLoading(false));

	}, [url]);

	return { error, isLoading, data };

}