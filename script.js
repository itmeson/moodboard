var colorTable = {
    "angry": "red",
    "sad": "blue",
    "happy": "yellow",
    "hungry": "black",
}

function changeMood() {
    const word = textBox.value;
    if (word in colorTable) {
      colorBox.style.backgroundColor = colorTable[word];
    }
    else {
      colorBox.style.backgroundColor = "grey";
    }
}

const textBox = document.getElementById('moodtext');
textBox.addEventListener("input", changeMood);
const colorBox = document.getElementById('moodbox');