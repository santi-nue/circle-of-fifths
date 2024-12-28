function initializeDefaultContent() {
	const defaultH2Element = document.createElement("h2");
	defaultH2Element.textContent = "Circle of Fifths";
	defaultH2Element.classList.add("chord-list");
	circle.appendChild(defaultH2Element);
}

const keys = [
	{
		name: "la",
		chords: [
			"la",
			"lamaj7",
			"sim",
			"sim7",
			"do#m",
			"do#m7",
			"re",
			"Dmaj7",
			"E",
			"E7",
			"F#m",
			"F#m7",
			"G#dim"
		]
	},
	{
		name: "E",
		chords: [
			"E",
			"Emaj7",
			"F#m",
			"F#m7",
			"G#m",
			"G#m7",
			"la",
			"lamaj7",
			"si",
			"si7",
			"do#m",
			"do#m7",
			"re#dim"
		]
	},
	{
		name: "si",
		chords: [
			"si",
			"simaj7",
			"do#m",
			"do#m7",
			"re#m",
			"re#m7",
			"E",
			"Emaj7",
			"F#",
			"F#7",
			"G#m",
			"G#m7",
			"la#dim"
		]
	},
	{
		name: "Gb/F#",
		chords: [
			"Gb/F#",
			"Gbmaj7",
			"labm",
			"labm7",
			"sibm",
			"sibm7",
			"dob",
			"dobmaj7",
			"reb",
			"reb7",
			"Ebm",
			"Ebm7",
			"Fdim"
		]
	},
	{
		name: "reb",
		chords: [
			"reb",
			"rebmaj7",
			"Ebm",
			"Ebm7",
			"Fm",
			"Fm7",
			"Gb",
			"Gbmaj7",
			"lab",
			"lab7",
			"sibm",
			"sibm7",
			"dodim"
		]
	},
	{
		name: "lab",
		chords: [
			"lab",
			"labmaj7",
			"sibm",
			"sibm7",
			"dom",
			"dom7",
			"reb",
			"rebmaj7",
			"Eb",
			"Eb7",
			"Fm",
			"Fm7",
			"Gdim"
		]
	},
	{
		name: "Eb",
		chords: [
			"Eb",
			"Ebmaj7",
			"Fm",
			"Fm7",
			"Gm",
			"Gm7",
			"lab",
			"labmaj7",
			"sib",
			"sib7",
			"dom",
			"dom7",
			"redim"
		]
	},
	{
		name: "sib",
		chords: [
			"sib",
			"sibmaj7",
			"dom",
			"dom7",
			"rem",
			"rem7",
			"Eb",
			"Ebmaj7",
			"F",
			"F7",
			"Gm",
			"Gm7",
			"ladim"
		]
	},
	{
		name: "F",
		chords: [
			"F",
			"Fmaj7",
			"Gm",
			"Gm7",
			"lam",
			"lam7",
			"sib",
			"sibmaj7",
			"do",
			"do7",
			"rem",
			"rem7",
			"Edim"
		]
	},
	{
		name: "do",
		chords: [
			"do",
			"domaj7",
			"rem",
			"rem7",
			"Em",
			"Em7",
			"F",
			"Fmaj7",
			"G",
			"G7",
			"lam",
			"lam7",
			"sidim"
		]
	},
	{
		name: "G",
		chords: [
			"G",
			"Gmaj7",
			"lam",
			"lam7",
			"sim",
			"sim7",
			"do",
			"domaj7",
			"re",
			"re7",
			"Em",
			"Em7",
			"F#dim"
		]
	},
	{
		name: "re",
		chords: [
			"re",
			"remaj7",
			"Em",
			"Em7",
			"F#m",
			"F#m7",
			"G",
			"Gmaj7",
			"la",
			"la7",
			"sim",
			"sim7",
			"do#dim"
		]
	}
];
const mKeys = [
	{
		name: "do#m",
		chords: [
			"do#m",
			"E",
			"Emaj7",
			"F#m",
			"F#m7",
			"G#m",
			"G#m7",
			"G#",
			"G#7",
			"la",
			"lamaj7",
			"si",
			"si7",
			"do#m7",
			"re#dim"
		]
	},
	{
		name: "G#m",
		chords: [
			"G#m",
			"si",
			"Bmaj7",
			"do#m",
			"do#m7",
			"re#m",
			"re#m7",
			"re#",
			"re#7",
			"E",
			"Emaj7",
			"F#",
			"F#7",
			"G#m7",
			"la#dim"
		]
	},
	{
		name: "Ebm/re#m",
		chords: [
			"Ebm/D#m",
			"Ebm7",
			"Gb",
			"Gbmaj7",
			"labm",
			"labm7",
			"sibm",
			"sibm7",
			"sib",
			"sib7",
			"dob",
			"dobmaj7",
			"reb",
			"reb7",
			"Fdim"
		]
	},
	{
		name: "sibm",
		chords: [
			"sibm",
			"sibm7",
			"Ebm",
			"reb",
			"rebmaj7",
			"Ebm7",
			"Fm",
			"Fm7",
			"F",
			"F7",
			"Gb",
			"Gbmaj7",
			"lab",
			"lab7",
			"dodim"
		]
	},
	{
		name: "Fm",
		chords: [
			"Fm",
			"Fm7",
			"lab",
			"labmaj7",
			"sibm",
			"sibm7",
			"dom",
			"dom7",
			"do",
			"do7",
			"reb",
			"rebmaj7",
			"Eb",
			"Eb7",
			"Gdim"
		]
	},
	{
		name: "dom",
		chords: [
			"dom",
			"dom7",
			"Eb",
			"Ebmaj7",
			"Fm",
			"Fm7",
			"Gm",
			"Gm7",
			"G",
			"G7",
			"lab",
			"labmaj7",
			"sib",
			"sib7",
			"redim"
		]
	},
	{
		name: "Gm",
		chords: [
			"Gm",
			"Gm7",
			"sib",
			"sibmaj7",
			"dom",
			"dom7",
			"rem",
			"rem7",
			"re",
			"re7",
			"Eb",
			"Ebmaj7",
			"F",
			"F7",
			"ladim"
		]
	},
	{
		name: "rem",
		chords: [
			"rem",
			"rem7",
			"F",
			"Fmaj7",
			"Gm",
			"Gm7",
			"Am",
			"Am7",
			"la",
			"la7",
			"sib",
			"sibmaj7",
			"do",
			"do7",
			"Edim"
		]
	},
	{
		name: "lam",
		chords: [
			"lam",
			"lam7",
			"do",
			"domaj7",
			"rem",
			"rem7",
			"Em",
			"Em7",
			"E",
			"E7",
			"F",
			"Fmaj7",
			"G",
			"G7",
			"sidim"
		]
	},
	{
		name: "Em",
		chords: [
			"Em",
			"Em7",
			"G",
			"Gmaj7",
			"lam",
			"lam7",
			"sim",
			"sim7",
			"si",
			"si7",
			"do",
			"domaj7",
			"re",
			"re7",
			"F#dim"
		]
	},
	{
		name: "sim",
		chords: [
			"sim",
			"sim7",
			"re",
			"remaj7",
			"Em",
			"Em7",
			"F#m",
			"F#m7",
			"F#",
			"F#7",
			"G",
			"Gmaj7",
			"la",
			"la7",
			"do#dim"
		]
	},
	{
		name: "F#m",
		chords: [
			"F#m",
			"F#m7",
			"la",
			"lamaj7",
			"sim",
			"sim7",
			"do#m",
			"do#m7",
			"do#",
			"do#7",
			"re",
			"remaj7",
			"E",
			"E7",
			"G#dim"
		]
	}
];

const circle = document.getElementById("circle-of-fifths");
// Store previous key selected
let previousKey = "";

// Draw the minor keys
for (let i = 0; i < mKeys.length; i++) {
	const key = mKeys[i];
	const minorDiv = document.createElement("div");

	minorDiv.classList.add("key", "minor", key.name);

	minorDiv.textContent = key.name;

	minorDiv.style.transform = `rotate(${
		(i + 1) * (360 / keys.length)
	}deg) translate(220px) rotate(${-((i + 1) * (360 / keys.length))}deg)`;

	// Beispiel für das Hinzufügen von Event-Listenern zu einem Moll-Key
	minorDiv.addEventListener("click", () => {
		if (previousKey === key.name) {
			// Wenn der bereits ausgewählte Key erneut angeklickt wird (deselektieren)
			highlightKey(null); // Entfernt die Hervorhebung von allen Keys
			highlightChords([], ""); // Zeigt den Standard `<h2>` Tag an
			previousKey = ""; // Setzt previousKey zurück, da kein Key ausgewählt ist
		} else {
			// Ein neuer Key wurde ausgewählt
			highlightKey(minorDiv); // Hervorheben des neuen Keys
			highlightChords(key.chords, key.name); // Zeigt die Akkorde des ausgewählten Keys an
			previousKey = key.name; // Aktualisiert previousKey mit dem neu ausgewählten Key
		}
	});

	circle.appendChild(minorDiv);
}

// Draw the major keys
for (let i = 0; i < keys.length; i++) {
	const key = keys[i];
	const majorDiv = document.createElement("div");

	majorDiv.classList.add("key", "major");

	majorDiv.textContent = key.name;

	majorDiv.style.transform = `rotate(${
		i * (360 / keys.length)
	}deg) translate(340px) rotate(${-i * (360 / keys.length)}deg)`;

	// Beispiel für das Hinzufügen eines Event-Listeners zu einem Key
	// Beispiel für einen Event-Listener
	majorDiv.addEventListener("click", () => {
		if (previousKey === key.name) {
			// Deselektieren des Keys
			highlightKey(null);
			highlightChords([], "");
		} else {
			// Neuer Key ausgewählt
			highlightKey(majorDiv);
			highlightChords(key.chords, key.name);
		}
	});

	circle.appendChild(majorDiv);
}

initializeDefaultContent();

function highlightKey(keyDiv) {
	const keys = document.querySelectorAll(".key");
	keys.forEach((key) => {
		key.classList.remove("highlight");
	});

	if (keyDiv) {
		keyDiv.classList.add("highlight");
	}
}

function highlightChords(chords, keyName) {
	// Remove existing .chord-list element if any
	const existingChordList = document.querySelector(".chord-list");
	if (existingChordList) {
		existingChordList.parentNode.removeChild(existingChordList);
	}

	// Check if the keyName is empty, indicating deselection
	if (keyName === "") {
		// Show the default "Circle of Fifths" heading
		const h2Element = document.createElement("h2");
		h2Element.textContent = "Circle of Fifths";
		h2Element.classList.add("chord-list");
		document.querySelector("#circle-of-fifths").appendChild(h2Element);
	} else if (chords.length > 0) {
		// If chords are present, display them
		const chordsDiv = document.createElement("div");
		chordsDiv.textContent = "Chords: " + chords.join(", ");
		chordsDiv.classList.add("chord-list");
		document.querySelector("#circle-of-fifths").appendChild(chordsDiv);
	} else {
		// This else part may not be necessary if we never have a case where chords are empty but a key is selected
		// However, if needed, it can handle unexpected states or future modifications
		const h2Element = document.createElement("h2");
		h2Element.textContent = "No chords available";
		h2Element.classList.add("chord-list");
		document.querySelector("#circle-of-fifths").appendChild(h2Element);
	}

	// Update the previous key based on current interaction
	previousKey = keyName;
}
