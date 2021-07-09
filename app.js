// buttons
const submit = document.querySelector('.publish');
const btnReset = document.querySelector('.reset')
const outputDiv = document.querySelector('.output');

// reset
const alertDiv = document.querySelector('.alerty');

// input data

const time1 = document.querySelector('.Hours').value;
const time2 = document.querySelector('.Minutes').value;
const givenOut = document.querySelector('.Placements').value;
const literature = document.querySelector('.Books').value;
const videografy = document.querySelector('.Videos').value;
const visits = document.querySelector('.returnVisit').value;
const studies = document.querySelector('.bibleStudies').value;
const note = document.querySelector('.Comment').value.trim();

// html for saved data on load
let load1 = false;

const storedItems = () => {
	outputDiv.innerHTML = `
	<ul class="sup remove" contenteditable="true">
		<hr>
		<br>
		<li><p value="0">Hours: ${localStorage.getItem('time1')}</p></li>
		<li><p value="0">Minutes: ${localStorage.getItem('time2')}</p></li>
		<li><p value="0">Placements: ${localStorage.getItem('givenOut')}</p></li>
		<li><p value="0">Books: ${localStorage.getItem('literature')}</p></li>
		<li><p value="0">Videos: ${localStorage.getItem('videografy')}</p></li>
		<li><p value="0">Return Visits: ${localStorage.getItem('visits')}</p></li>
		<li><p value="0">Bible Studies: ${localStorage.getItem('studies')}</p></li>
		<li><p value="nothing">${localStorage.getItem('note')}</p></li>
	</ul>
	`;

	return storedItems;
};




// running force

const main = () => {

	const time1 = document.querySelector('.Hours').value;
	const time2 = document.querySelector('.Minutes').value;
	const givenOut = document.querySelector('.Placements').value;
	const literature = document.querySelector('.Books').value;
	const videografy = document.querySelector('.Videos').value;
	const visits = document.querySelector('.returnVisit').value;
	const studies = document.querySelector('.bibleStudies').value;
	const note = document.querySelector('.Comment').value.trim();

	localStorage.setItem('time1', time1);
	localStorage.setItem('time2',time2);
	localStorage.setItem('givenOut', givenOut);
	localStorage.setItem('literature', literature);
	localStorage.setItem('videografy', videografy);
	localStorage.setItem('visits', visits);
	localStorage.setItem('studies', studies);
	localStorage.setItem('note', note);

	// html for stored data

	outputDiv.innerHTML = `
	<ul class="sup" contenteditable="false">
		<hr>
		<br>
		<li><p value="0">Hours: ${localStorage.getItem('time1')}</p></li>
		<li><p value="0">Minutes: ${localStorage.getItem('time2')}</p></li>
		<li><p value="0">Placements: ${localStorage.getItem('givenOut')}</p></li>
		<li><p value="0">Books: ${localStorage.getItem('literature')}</p></li>
		<li><p value="0">Videos: ${localStorage.getItem('videografy')}</p></li>
		<li><p value="0">Return Visits: ${localStorage.getItem('visits')}</p></li>
		<li><p value="0">Bible Studies: ${localStorage.getItem('studies')}</p></li>
		<li><p value="nothing">${localStorage.getItem('note')}</p></li>
	</ul>
	`;

}

// click events for the buttons

submit.addEventListener('click', e => {
	e.preventDefault();

	main();
});

addEventListener('load', () => {
	
});

// reset

btnReset.addEventListener('click', () => {
	window.localStorage.clear();

		outputDiv.innerHTML = `
		<a class="mail" href="mailto:"><i class="far fa-envelope"></i></a>
		<ul class="sup" contenteditable="false">
			<hr>
			<br>
			<li><p value="0">Hours: ${localStorage.getItem('time1')}</p></li>
			<li><p value="0">Minutes: ${localStorage.getItem('time2')}</p></li>
			<li><p value="0">Placements: ${localStorage.getItem('givenOut')}</p></li>
			<li><p value="0">Books: ${localStorage.getItem('literature')}</p></li>
			<li><p value="0">Videos: ${localStorage.getItem('videografy')}</p></li>
			<li><p value="0">Return Visits: ${localStorage.getItem('visits')}</p></li>
			<li><p value="0">Bible Studies: ${localStorage.getItem('studies')}</p></li>
			<li><p value="nothing">${localStorage.getItem('note')}</p></li>
	</ul>
	`;

	// alertDiv.innerHTML = `
	// <div class="alerty closebtn">
	// 	The page has been Reset and the Data Deleted.
	// </div>
	// `;

	return alertDiv;
});
