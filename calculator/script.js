function calculateLove() {
    let name1 = document.getElementById("name1").value;
    let name2 = document.getElementById("name2").value;

    if (name1 === "" || name2 === "") {
        document.getElementById("result").innerHTML = "Please enter both names 💔";
        return;
    }

    let loveScore = Math.floor(Math.random() * 100) + 1;

    document.getElementById("result").innerHTML =
        `${name1} ❤️ ${name2} <br> Love Percentage: ${loveScore}%`;
    
    document.body.style.backgroundColor = "yellow";
}
