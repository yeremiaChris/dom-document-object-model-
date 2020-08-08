// dom manipulation


// menambahkan tag p di dalam section atau membuat element baru

const pBaru = document.createElement('p');
const tBaru = document.createTextNode('paragraf baru');

// simpan text ke dalama element p
pBaru.appendChild(tBaru);

// appendChild simpan ke akhir dari sebuah element parent
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);



// membuat list item baru
const liBaru = document.createElement('li');
const teLiBaru = document.createTextNode('list item baru');

liBaru.appendChild(teLiBaru);

const ul = document.querySelector("#b ul")

const li2 = document.querySelector("section#b ul li:nth-child(2");

// isi dari insert before itu adalah yang pertama element apa
// yang ingin kita simpan dan sampingnya element sebelum apa.

ul.insertBefore(liBaru,li2)

