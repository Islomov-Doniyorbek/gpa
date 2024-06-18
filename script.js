let num = document.querySelector("#num");

let form2Wrap = document.querySelector("#form2 .wrap");
let form2 = document.querySelector("#form2");
let form1 = document.querySelector("#form1");

let go = document.querySelector("#go");
let ok = document.querySelector("#ok");
let ko = document.querySelector("#ko");

let h2 = document.querySelector("h2")
let krd = document.querySelector("h2 .kredit")
let bll = document.querySelector("h2 .ball")
let gpa = document.querySelector("h2 .gpa")

alert("Fan bahosi 2 bo'lsa, 0 deb hisoblanadi!");
go.onclick = () => {
    form1.style.display = "none";
    form2.style.display = "block"
    h2.style.display = "none"
    let n = num.value;

    form2Wrap.innerHTML = "";
    for (let i = 1; i <= n; i++) {
        form2Wrap.innerHTML += `
        <div class="fluid">
        <label for="#"><span>${i}</span>-fan krediti &nbsp; <input width="20" id="kr" type="number" min="0"></label>
        <label for="#"><span>${i}</span>-fan bahosi &nbsp; <input id="baho" type="number" min="2" max="5"></label>
        </div>
        `;
    }
}

ok.onclick = () => {
    form1.style.display = "none";
    h2.style.display = "block"
    form2.style.display = "none"
    let kredit = document.querySelectorAll("#kr");
    let baho = document.querySelectorAll("#baho");
    
    let m = num.value;
    let kr = 0, bal = 0, sum = 0;
    let k = 0, b = 0;
    for (let i = 0; i < m; i++) {
        kr = kredit[i].value;
        k += kredit[i].value * 1;
        if (baho[i].value != 2) {
            bal = baho[i].value;
        } else {
            bal = 0;
        }
        b += baho[i].value * 1;
        sum += (kr * bal);
    }

    gpa.innerHTML = sum/k;
    bll.innerHTML = sum;
    krd.innerHTML = k;
    
}

ko.onclick = () => {
    form1.style.display = "block";
    form2.style.display = "none";
    h2.style.display = "none";
}
