let gameContainer = document.getElementById("game-container");

function startGame() {
    // 遊戲邏輯，例如初始化遊戲對象、事件處理等
    gameContainer.innerHTML = "<p>遊戲正在進行中...</p>";
}

// 模擬一個簡單的遊戲循環
let gameInterval = setInterval(function() {
    if (gameContainer.innerHTML === "<p>遊戲正在進行中...</p>") {
        gameContainer.innerHTML += "<p>還有30秒！</p>";
    }
}, 1000);

document.getElementById("end-btn").addEventListener("click", function() {
    clearInterval(gameInterval);
    gameContainer.innerHTML = "<p>遊戲結束！</p>";
});