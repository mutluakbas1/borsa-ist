function alisEmri() {

    const urlParams = new URLSearchParams(window.location.search);
    const sirketAdi = urlParams.get('sirket');

    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/gezegen/" + sirketAdi, false);
    xhttp.send();


    const gezegenDetayi = document.getElementById("content");

    if (xhttp.responseText == "") {
        gezegenDetayi.innerHTML = "<h1>Gezegen secilmedi</h1>";
    }

    else {
        const gezegenBilgisi = JSON.parse(xhttp.responseText);
        let table = "<table>"

            + "<tr>"
            + "<th>Gezegen Id</th>"
            + "<th>Gezegen Adi</th>"
            + "<th>Gezegen Yasi</th>"
            + "<th>Capi</th>"
            + "<th>Ortalama Sicakligi</th>"
            + "<th>Gunes Etrafindaki Donusu</th>"
            + "<th>Kendi Etrafindaki Donusu</th>"
            + "<th>Uydu Sayisi</th>"
            + "<th>Yasam</th>"
            + "<th>Rengi</th>"
            + "</tr>";

        table += "<tr>"
            + "<td>" + gezegenBilgisi.id + "</td>"
            + "<td>" + gezegenBilgisi.gezegenAdi + "</td>"
            + "<td>" + gezegenBilgisi.gezegenYasi + "</td>"
            + "<td>" + gezegenBilgisi.capi + "</td>"
            + "<td>" + gezegenBilgisi.ortalamaSicakligi + "</td>"
            + "<td>" + gezegenBilgisi.gunesEtrafindakiDonusu + "</td>"
            + "<td>" + gezegenBilgisi.kendiEtrafindakiDonusu + "</td>"
            + "<td>" + gezegenBilgisi.uyduSayisi + "</td>"
            + "<td>" + gezegenBilgisi.yasam + "</td>"
            + "<td>" + gezegenBilgisi.rengi + "</td>"
            + "</tr>";

            
    

    





        table += "</table>";

        gezegenDetayi.innerHTML = table;
    }

    const gezegenBaslik = document.getElementById("gezegen");
    gezegenBaslik.innerText = "Merhaba ben " + gezegenBilgisi.gezegenAdi;

}