function updateTime() {

    const now = new Date();

    const time = now.toLocaleTimeString("vi-VN");

    document.getElementById("time").innerText =
        "⏰ Thời gian hiện tại: " + time;
}

function changeBackground() {

    const colors = [
        "#111827",
        "#172554",
        "#3b0764",
        "#164e63",
        "#422006"
    ];

    const randomIndex =
        Math.floor(Math.random() * colors.length);

    document.body.style.background =
        colors[randomIndex];
}

updateTime();

setInterval(updateTime, 1000);