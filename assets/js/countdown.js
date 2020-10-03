// Tanggal dan waktu akhir countdown
// var countDownDate = new Date("Nov 10, 2019 00:00:00").getTime();
// conditional
var date = new Date();
var year = date.getFullYear();
var independentDate = new Date(year+'-08-17 00:00:00');

if (date>independentDate) {
  var countDownDate = new Date(year+1+'-08-17 00:00:00');
}else{
  var countDownDate = date;
}
document.getElementById("ke").innerHTML = year-1945;
// end conditional
// Update setiap 1 detik
var countdownfunction = setInterval(function() {

    // Ambil tanggal dan waktu sekarang
    var now = new Date().getTime();
    // Hitung selisih tanggal dan waktu
    var distance = countDownDate - now;

    // Proses perhitungan waktu per hari hingga detik
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    console.log(minutes);

    // Output hasil ke id
    document.getElementById("countdownDays").innerHTML = days;
    document.getElementById("countdownHours").innerHTML = hours;
    document.getElementById("countdownMinutes").innerHTML = minutes;
    document.getElementById("countdownSeconds").innerHTML = seconds;

    // Jika waktu countdown habis, maka
    if (distance < 0) {
        clearInterval(countdownfunction);
        document.getElementById("countdownDays").innerHTML = 0;
        document.getElementById("countdownHours").innerHTML = 0;
        document.getElementById("countdownMinutes").innerHTML = 0;
        document.getElementById("countdownSeconds").innerHTML = 0;
    }
}, 1000);
