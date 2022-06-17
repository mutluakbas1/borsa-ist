function satislarData() {

    let table = "<table class=table table-dark>"
            + "<tr>"
            + "<th>Sirket Adi</th>"
            + "<th>Emirler</th>"
            + "<th>Lot</th>"
            + "<th>Fiyat</th>"        
            + "</tr>";


    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/satislar", false);
    xhttp.send();

    const satislar = JSON.parse(xhttp.responseText);


    for(let x=0; x< satislar.length; x++){
                                        
        let satis = satislar[x];

        console.log("Sirket Adi: " + satis.sirketAdi);
        console.log("Emirler: " + satis.emirler);
        const link = " satislar.html?id=" + satis.sirketAdi;

        table += "<tr>"
        
        + "<td ><a href=" + link + ">" + satis.sirketAdi+ "</a></td>"
        + "<td ><a href=" + link + ">" + satis.emirler+ "</a></td>"
        + "<td ><a href=" + link + ">" + satis.lot+ "</a></td>"
        + "<td ><a href=" + link + ">" + satis.fiyat+ "</a></td>"

        + "</tr>"

    }

    table += "</table>";
    let content = document.getElementById("content");
    content.innerHTML = table;
            
};