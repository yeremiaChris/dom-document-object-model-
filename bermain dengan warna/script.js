const tUbahWarna = document.getElementById('ubahwarna');
tUbahWarna.onclick = function() {
    document.body.classList.toggle('gantiWarna');
}


const tAcakWarna = document.createElement("button")
const textAcakWarna = document.createTextNode("acak warna");

tAcakWarna.appendChild(textAcakWarna);

tAcakWarna.setAttribute('type','button');

tUbahWarna.after(tAcakWarna);

tAcakWarna.addEventListener('click',function() {
    // math.random itu menghasil angka acak dari 0 sampe satu
    const r = Math.round(Math.random() * 255 + 1);
    const g = Math.round(Math.random() * 255 + 1);
    const b = Math.round(Math.random() * 255 + 1);

    // math.round itu untuk pembulatan ada floor ceil juga
    console.log(r);
    document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});


const merah = document.querySelector("input[name=merah]");
const hijau = document.querySelector("input[name=hijau]");
const biru = document.querySelector("input[name=biru]");
merah.addEventListener('input',function() {
    
    // mengambil value atau nilai pada element 
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})
hijau.addEventListener('input',function() {
    
    // mengambil value atau nilai pada element 
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})
biru.addEventListener('input',function() {
    
    // mengambil value atau nilai pada element 
    const r = merah.value;
    const g = hijau.value;
    const b = biru.value;

    document.body.style.backgroundColor = 'rgb(' + r + ',' + g + ',' + b + ')';

})


// bermain dengan kursor
document.body.addEventListener('mousemove',function(event){
    // mencari posisi x dari mouse dengan clientx
    // console.log(event.clientX);
    const xPost = Math.round((event.clientX / window.innerWidth) * 255);
    const yPost = Math.round((event.clientY / window.innerHeight) * 255);
    document.body.style.backgroundColor = 'rgb(' + xPost + ',' + yPost + ',100)';

})