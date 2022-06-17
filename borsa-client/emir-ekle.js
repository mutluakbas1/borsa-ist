function alisEmriEkle() {

    let alisEmri = {};

    const sirketTextBox = document.getElementById('sirket');
    const sirketAdi = sirketTextBox.value;

    const emirTextBox = document.getElementById('emir');
    const emirler = emirTextBox.value;

    const lotTextBox = document.getElementById('lot');
    const lot = lotTextBox.value;

    const fiyatTextBox = document.getElementById('fiyat');
    const fiyat = fiyatTextBox.value;


    
    

    alisEmri.sirketAdi = sirketAdi;
    alisEmri.emirler = emirler;
    alisEmri.lot = lot;
    alisEmri.fiyat = fiyat;
   



    const alisEmriJson = JSON.stringify(alisEmri);
    console.dir("send alis emri: " + alisEmriJson);


    const xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:3000/alislar-ekle", true);

    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', "*");
    xhttp.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With');

    xhttp.send(alisEmriJson);


};

function satisEmriEkle() {

    let satisEmri = {};

    const sirketTextBox = document.getElementById('sirket2');
    const sirketAdi = sirketTextBox.value;

    const emirTextBox = document.getElementById('emir2');
    const emirler = emirTextBox.value;

    const lotTextBox = document.getElementById('lot2');
    const lot = lotTextBox.value;

    const fiyatTextBox = document.getElementById('fiyat2');
    const fiyat = fiyatTextBox.value;


    
    

    satisEmri.sirketAdi = sirketAdi;
    satisEmri.emirler = emirler;
    satisEmri.lot = lot;
    satisEmri.fiyat = fiyat;
   



    const satisEmriJson = JSON.stringify(satisEmri);
    console.dir("send satis emri: " + satisEmriJson);


    const xhttp = new XMLHttpRequest();

    xhttp.open("POST", "http://localhost:3000/satislar-ekle", true);

    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    xhttp.setRequestHeader('Access-Control-Allow-Origin', "*");
    xhttp.setRequestHeader('Access-Control-Allow-Headers', 'X-Requested-With');

    xhttp.send(satisEmriJson);


};