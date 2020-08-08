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





const link = document.querySelector('#a a');

// jadi kita menghapus link yang ada di sectionA

// untuk mengganti child kita harus menangkap parent nodeny

sectionA.removeChild(link);

const sectionB = document.querySelector('#b');
const p4 = sectionB.querySelector('p');


const h2 = document.createElement('h2');
const th2 = document.createTextNode('h2 baru');

h2.appendChild(th2);

// jadi h2 akan mereplace atau menggantikan p4
sectionB.replaceChild(h2, p4);









