const p3 = document.querySelector(".p3");

p3.addEventListener('click',function() {
    p3.style.backgroundColor = 'lightblue';
})

// or 
const p2 = document.querySelector(".p2");

function ubahWarna(){
    p2.style.backgroundColor = 'lightblue';
}


p2.onclick = ubahWarna;


// perbedaannya adlah event handler dia akan menimpa perubahan sebelumnya
// kalo yang eventlistener dia akan menambah perubahan


// daftar event atau event list
// https://developer.mozilla.org/en-US/docs/Web/Events