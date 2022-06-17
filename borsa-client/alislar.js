function alislarData() {

    let table = "<table class=table table-dark>"
            + "<tr>"
            + "<th>Sirket Adi</th>"
            + "<th>Emirler</th>"
            + "<th>Lot</th>"
            + "<th>Fiyat</th>"        
            + "</tr>";


    const xhttp = new XMLHttpRequest();

    xhttp.open("GET", "http://localhost:3000/alislar", false);
    xhttp.send();

    const alislar = JSON.parse(xhttp.responseText);


    for(let x=0; x< alislar.length; x++){
                                        
        let alis = alislar[x];

        console.log("Sirket Adi: " + alis.sirketAdi);
        console.log("Emirler: " + alis.emirler);
        const link = " alislar.html?id=" + alis.sirketAdi;

        table += "<tr>"
        
        + "<td ><a href=" + link + ">" + alis.sirketAdi+ "</a></td>"
        + "<td ><a href=" + link + ">" + alis.emirler+ "</a></td>"
        + "<td ><a href=" + link + ">" + alis.lot+ "</a></td>"
        + "<td ><a href=" + link + ">" + alis.fiyat+ "</a></td>"

        + "</tr>"

    }

    table += "</table>";
    let content = document.getElementById("content");
    content.innerHTML = table;
            
};