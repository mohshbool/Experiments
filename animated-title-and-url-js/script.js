let l = ["▁", "▂", "▃", "▄", "▅", "▆", "▇", "█"];
let x = new AudioContext();
let a = x.createAnalyser();
a.fftSize = 32;
let d = new Uint8Array(16);
navigator.mediaDevices.getUserMedia({ audio: true }).then(s => {
  x.createMediaStreamSource(s).connect(a);
  z();
});
function z() {
  setTimeout(z, 40);
  a.getByteFrequencyData(d);
  let s = [];
  d.forEach(v => s.push(l[Math.floor((v / 255) * 8)]));
  let t = document.title = s.join("");
  history.replaceState(history.state, t, '#' + t);
}