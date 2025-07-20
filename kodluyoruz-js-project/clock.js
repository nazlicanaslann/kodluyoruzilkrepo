
let myName = document.querySelector("#myName")
myName.innerHTML = prompt("Lütfen Adinizi Giriniz:")
console.log(myName.innerHTML)


let myclock = document.querySelector("#myClock")
function updateClock() {
    let now = new Date();
    let days = ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"];
    let day = days[now.getDay()];
    let hours = now.getHours().toString().padStart(2, '0');           // 2 haneli yapmak için
    let minutes = now.getMinutes().toString().padStart(2, '0');
    let seconds = now.getSeconds().toString().padStart(2, '0');

    let timeString = `${hours}:${minutes}:${seconds} - ${day}`;
    document.getElementById("myClock").textContent = timeString;
}

setInterval(updateClock, 1000);                                       // Her saniye güncelle
updateClock();                                                        // Sayfa yüklenince çalıştır