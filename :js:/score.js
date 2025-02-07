let score = 0;

function updateScore(points) {
    score += points;
    console.log("當前分數：" + score);
}

function resetScore() {
    score = 0;
    console.log("分數已重置");
}