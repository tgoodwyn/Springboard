const input = document.querySelector('#fruit');
//const suggestions = document.querySelector('.suggestions ul');
const suggestions = document.querySelector('.suggestions ul');

const fruit = ['Apple', 'Apricot', 'Avocado 🥑', 'Banana', 'Bilberry', 'Blackberry', 'Blackcurrant', 'Blueberry', 'Boysenberry', 'Currant', 'Cherry', 'Coconut', 'Cranberry', 'Cucumber', 'Custard apple', 'Damson', 'Date', 'Dragonfruit', 'Durian', 'Elderberry', 'Feijoa', 'Fig', 'Gooseberry', 'Grape', 'Raisin', 'Grapefruit', 'Guava', 'Honeyberry', 'Huckleberry', 'Jabuticaba', 'Jackfruit', 'Jambul', 'Juniper berry', 'Kiwifruit', 'Kumquat', 'Lemon', 'Lime', 'Loquat', 'Longan', 'Lychee', 'Mango', 'Mangosteen', 'Marionberry', 'Melon', 'Cantaloupe', 'Honeydew', 'Watermelon', 'Miracle fruit', 'Mulberry', 'Nectarine', 'Nance', 'Olive', 'Orange', 'Clementine', 'Mandarine', 'Tangerine', 'Papaya', 'Passionfruit', 'Peach', 'Pear', 'Persimmon', 'Plantain', 'Plum', 'Pineapple', 'Pomegranate', 'Pomelo', 'Quince', 'Raspberry', 'Salmonberry', 'Rambutan', 'Redcurrant', 'Salak', 'Satsuma', 'Soursop', 'Star fruit', 'Strawberry', 'Tamarillo', 'Tamarind', 'Yuzu'];

function search(str) {
	let results = [];
	for (const fruit_name of fruit) {
		const fruit_name_lc = fruit_name.toLowerCase()
		if (fruit_name_lc.includes(str)) {
			results.push(fruit_name)
		}
	}
	return results;
}

function searchHandler(e) {
	const current_string = input.value.toLowerCase()
	// this statement is necessary to not display anything when no text has yet been entered
	if (!current_string) {
		suggestions.innerHTML = ''
		suggestions.classList.remove('has-suggestions')
		 return;
	}
	const results = search(current_string)
	
	showSuggestions(results, current_string)
}

function showSuggestions(results, inputVal) {
	
	// this resets the suggestion display each time
	suggestions.innerHTML = '' 
	suggestions.classList.add('has-suggestions')
	for (const result of results) {
		const result_li = document.createElement("li")
		result_li.innerText = result
		suggestions.append(result_li)
	}
}

let evt = ''
function useSuggestion(e) {
	//practicing using event delegation
	evt = e
	if (e.target.tagName === 'LI') { // remember that this needs to be all caps
	const selected = e.target.innerText;
	input.value = selected;
	//need to clear the suggestion box after
	suggestions.innerHTML = '' 
	suggestions.classList.remove('has-suggestions')
	// why is cursor showing up??
	}
}

input.addEventListener('keyup', searchHandler);
suggestions.addEventListener('click', useSuggestion);