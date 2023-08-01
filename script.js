const pianoKeys = document.querySelectorAll(".piano-keys .key"),
  volumeSlider = document.querySelector(".volume-slider input"),
  keysCheckbox = document.querySelector(".keys-checkbox input");

  
const keyTunes = {
  a: "tunes/a.wav",
  "\u05E9": "tunes/a.wav",
  w: "tunes/w.wav",
  "\u05F3": "tunes/w.wav",
  s: "tunes/s.wav",
  "\u05D3": "tunes/s.wav",
  e: "tunes/e.wav",
  "\u05E7": "tunes/e.wav",
  d: "tunes/d.wav",
  "\u05D2": "tunes/d.wav",
  f: "tunes/f.wav",
  "\u05DB": "tunes/f.wav",
  t: "tunes/t.wav",
  "\u05D0": "tunes/t.wav",
  g: "tunes/g.wav",
  "\u05E2": "tunes/g.wav",
  y: "tunes/y.wav",
  "\u05D8": "tunes/y.wav",
  h: "tunes/h.wav",
  "\u05D9": "tunes/h.wav",
  u: "tunes/u.wav",
  "\u05D5": "tunes/u.wav",
  j: "tunes/j.wav",
  "\u05D7": "tunes/j.wav",
  k: "tunes/k.wav",
  "\u05DC": "tunes/k.wav",
  o: "tunes/o.wav",
  "\u05DD": "tunes/o.wav",
  l: "tunes/l.wav",
  "\u05DA": "tunes/l.wav",
  p: "tunes/p.wav",
  "\u05E4": "tunes/p.wav",
  "\u05E3": "tunes/;.wav",
  ";": "tunes/;.wav",
};

let allKeys = [],
  note = new Audio(`tunes/a.wav`);

const playTune = (keys) => {
  const tune = keyTunes[keys.toLowerCase()]; 

  if (tune) {
    note.src = tune;
    note.play();

    const keySelectors = keys.split(",").map((key) => `[data-key="${key}"]`);
    const clickedKeys = document.querySelectorAll(keySelectors.join(","));
    clickedKeys.forEach((key) => key.classList.add("active"));
    setTimeout(() => {
      clickedKeys.forEach((key) => key.classList.remove("active"));
    }, 150);
  }
};

pianoKeys.forEach((key) => {
    const keys = key.dataset.key.split(","); // Split the combined keys into an array
    allKeys.push(...keys);
  
    // Handle the mouse click event for the primary key (in this case, the "a" key)
    key.addEventListener("click", () => playTune(keys[0]));
  });

const handleVolume = (e) => {
  note.volume = e.target.value; // passing the range slider value as an audio volume
};

const showHideKeys = () => {
  pianoKeys.forEach((key) => key.classList.toggle("hide"));
};

const pressedKey = (e) => {
  console.log("Key Pressed:", e.key);
  // if the pressed key is in the allKeys array, only call the playTune function
  if (allKeys.includes(e.key)) playTune(e.key);
};

keysCheckbox.addEventListener("click", showHideKeys);
volumeSlider.addEventListener("input", handleVolume);
document.addEventListener("keydown", pressedKey);

