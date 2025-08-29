const body = document.getElementsByTagName("body")[0];

function setColor(name) {
    body.style.backgroundColor = name;
}

// r-g-b = 0-255

function setRandomColor() {
    const r = Math.round(Math.random() * 255); // 0-255
    const g = Math.round(Math.random() * 255); // 0-255
    const b = Math.round(Math.random() * 255); // 0-255

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    RdmBtn = document.getElementById("random");
    RdmBtn.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

