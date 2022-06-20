var dataCorrente = new Date();
document.getElementById('dataCorrente').innerHTML = dataCorrente;

document.write(dataCorrente);
document.write("<br>" + dataCorrente.getFullYear());
document.write("<br>" + dataCorrente.getMonth());
document.write("<br>" + dataCorrente.getDate());  
document.write("<br>" + dataCorrente.getHours());
document.write("<br>" + dataCorrente.getMinutes());
document.write("<br>" + dataCorrente.getSeconds());

var dataEurope = new Date().toLocaleString();
document.write("<br>" + dataEurope);


var giorniSettimana = ['Domenica', 'Lunedi', 'Martedi', 'Mercoledi', 'Giovedi', 'Venerdi', 'Sabato']; 

var mesi = ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Agosto", "Settembre", "Ottobre", "Novembre", "Settembre"];
document.write("<br>" + dataCorrente() + " - " + mesi[dataCorrente.getMonth()] + " - " + dataCorrente.getFullYear());

