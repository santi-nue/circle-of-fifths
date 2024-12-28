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
			"remaj7",
			"mi",
			"mi7",
			"fa#m",
			"fa#m7",
			"G#dim"
		]
	},
	{
		name: "mi",
		chords: [
			"mi",
			"mimaj7",
			"fa#m",
			"fa#m7",
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
			"mi",
			"mimaj7",
			"fa#",
			"fa#7",
			"G#m",
			"G#m7",
			"la#dim"
		]
	},
	{
		name: "Gb/fa#",
		chords: [
			"Gb/fa#",
			"Gbmaj7",
			"labm",
			"labm7",
			"sibm",
			"sibm7",
			"dob",
			"dobmaj7",
			"reb",
			"reb7",
			"mibm",
			"mibm7",
			"fadim"
		]
	},
	{
		name: "reb",
		chords: [
			"reb",
			"rebmaj7",
			"mibm",
			"mibm7",
			"fam",
			"fam7",
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
			"mib",
			"mib7",
			"fam",
			"fam7",
			"Gdim"
		]
	},
	{
		name: "mib",
		chords: [
			"mib",
			"mibmaj7",
			"fam",
			"fam7",
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
			"mib",
			"mibmaj7",
			"fa",
			"fa7",
			"Gm",
			"Gm7",
			"ladim"
		]
	},
	{
		name: "fa",
		chords: [
			"fa",
			"famaj7",
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
			"midim"
		]
	},
	{
		name: "do",
		chords: [
			"do",
			"domaj7",
			"rem",
			"rem7",
			"mim",
			"mim7",
			"fa",
			"famaj7",
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
			"mim",
			"mim7",
			"fa#dim"
		]
	},
	{
		name: "re",
		chords: [
			"re",
			"remaj7",
			"mim",
			"mim7",
			"fa#m",
			"fa#m7",
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
			"mi",
			"mimaj7",
			"fa#m",
			"fa#m7",
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
			"mi",
			"mimaj7",
			"fa#",
			"fa#7",
			"G#m7",
			"la#dim"
		]
	},
	{
		name: "mibm/re#m",
		chords: [
			"mibm/D#m",
			"mibm7",
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
			"fadim"
		]
	},
	{
		name: "sibm",
		chords: [
			"sibm",
			"sibm7",
			"mibm",
			"reb",
			"rebmaj7",
			"mibm7",
			"fam",
			"fam7",
			"fa",
			"fa7",
			"Gb",
			"Gbmaj7",
			"lab",
			"lab7",
			"dodim"
		]
	},
	{
		name: "fam",
		chords: [
			"fam",
			"fam7",
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
			"mib",
			"mib7",
			"Gdim"
		]
	},
	{
		name: "dom",
		chords: [
			"dom",
			"dom7",
			"mib",
			"mibmaj7",
			"fam",
			"fam7",
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
			"mib",
			"mibmaj7",
			"fa",
			"fa7",
			"ladim"
		]
	},
	{
		name: "rem",
		chords: [
			"rem",
			"rem7",
			"fa",
			"famaj7",
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
			"midim"
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
			"mim",
			"mim7",
			"mi",
			"mi7",
			"fa",
			"famaj7",
			"G",
			"G7",
			"sidim"
		]
	},
	{
		name: "mim",
		chords: [
			"mim",
			"mim7",
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
			"fa#dim"
		]
	},
	{
		name: "sim",
		chords: [
			"sim",
			"sim7",
			"re",
			"remaj7",
			"mim",
			"mim7",
			"fa#m",
			"fa#m7",
			"fa#",
			"fa#7",
			"G",
			"Gmaj7",
			"la",
			"la7",
			"do#dim"
		]
	},
	{
		name: "fa#m",
		chords: [
			"fa#m",
			"fa#m7",
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
			"mi",
			"mi7",
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
