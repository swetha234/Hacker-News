export const setSearchValue = value => {
	return {
		type: 'SET_SEARCH_VALUE',
		payload: value
	};
};

export const fetchData = value => dispatch => {
	fetch('https://hn.algolia.com/api/v1/search?query=' + value)
		.then(response => response.json())
		.then(data => {
			dispatch({
				type: 'SET_SEARCH_RESULT',
				payload: data
			});
		});
};

export const saveHistory = value => {
	console.log(value);
	return{
		type: 'SAVE_HISTORY_VALUE',
		payload: value
	}
}
