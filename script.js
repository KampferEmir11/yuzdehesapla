document.querySelector(".hesap").addEventListener("click" , function(){
    let sayi = Number(document.querySelector(".sayi").value);
    let yuzde = Number(document.querySelector(".yuzde").value);
    let result = Number((sayi*yuzde) / 100);
    document.querySelector(".result").textContent = result;
    if (yuzde < 0) {
        alert("Yüzde 0 dan Büyük Olmalı.");
        document.querySelector(".result").textContent = "!";
    }
});
document.querySelector(".clear").addEventListener("click" , function(){
    document.querySelector(".sayi").value = "";
    document.querySelector(".yuzde").value = "";
    document.querySelector(".result").textContent = "Sonuç";
});