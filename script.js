import MusicTools from "./MusicTools.js";

let mathResult1 = document.getElementById("button1");
mathResult1.addEventListener("click", function () {
  let input1 = document.getElementById("send1");
  let text1 = document.getElementById("return1");
  let result1 = MusicTools.midiPitchToFrequency(parseFloat(input1.value));
  text1.innerText = result1;
});

let mathResult2 = document.getElementById("button2");
mathResult2.addEventListener("click", function () {
  let input2 = document.getElementById("send2");
  let text2 = document.getElementById("return2");
  let result2 = MusicTools.frequencyToMidiPitch(parseFloat(input2.value));
  text2.innerText = result2;
});

let mathResult3 = document.getElementById("button3");
mathResult3.addEventListener("click", function () {
  let input3 = document.getElementById("send3");
  let text3 = document.getElementById("return3");
  let result3 = MusicTools.atodb(parseFloat(input3.value));
  text3.innerText = result3;
});

let mathResult4 = document.getElementById("button4");
mathResult4.addEventListener("click", function () {
  let input4 = document.getElementById("send4");
  let text4 = document.getElementById("return4");
  let result4 = MusicTools.dbtoa(parseFloat(input4.value));
  text4.innerText = result4;
});