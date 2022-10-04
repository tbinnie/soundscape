const fs = require("fs");

const names = [
  "Zoom F6",
  "Zoom H4N",
  "Zoom H1N",
  "Sony PCM-D100",
  "Sony PCM-D10",
  "Sony PCM-A10",
  "Tascam DR-05X",
  "Tascam DR-44WL",
  "Tascam DR-40X",
];
const prices = [
  499.99, 195.99, 79.99, 749.99, 462.99, 215.99, 88.99, 344.99, 185.99,
];
const images = [
  "./imgs/zoom-f6.jpg",
  "./imgs/zoom-h4n.jpg",
  "./imgs/zoom-h1n.jpg",
  "./imgs/sony-pcm-d100.jpg",
  "./imgs/sony-pcm-d10.jpg",
  "./imgs/sony-pcm-a10.jpg",
  "./imgs/tascam-dr-05x.jpg",
  "./imgs/tascam-dr-44wlb.jpg",
  "./imgs/tascam-dr-40x.jpg",
];
const output = [];

for (let i = 0; i < names.length; i += 1) {
  output.push({
    name: names[i],
    price: prices[i],
    image: images[i],
    id: i.toString(),
  });
}

outJson = JSON.stringify({
  items: output,
});

fs.writeFile("./public/items.json", outJson, (err) => {
  if (err) {
    throw err;
  }
  console.log("JSON data is saved.");
});
