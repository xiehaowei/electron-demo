const names = [
    "白文文", "白子升", "曹佳琪", "丁雨轩", "高源源", "郭明浩", "郭语溪", "胡佳玉", "黄绍琦", "黄欣怡", "季紫嫣", "姜蓝雨", "姜梦琪", "蒋欣悦", "冷紫涵", "李晨曦", "李浩博", "李静茹", "李炯池", "李俊", "李晴语", "李宇涵", "李雨婷", "李志霏", "刘弘博", "刘锦源", "刘靖轩", "刘梦涵", "刘膨豪", "刘潇宇", "刘小萌", "刘郑", "刘子林", "芦煜", "吕梁", "吕欣怡", "毛妤晨", "孟浩宇", "祁珂馨", "任涵予", "宋明轩", "宋梓晨", "陶梦歆", "王奥超", "王文鑫", "王依凡", "王梓涵", "徐永孝", "宣紫毅", "闫贞如", "杨馨妍", "殷默涵", "袁诗晗", "詹昊龙", "詹诗涵", "张蒙恩", "张思博", "张小鑫", "张欣悦", "张荥乐", "张雨梦", "郑皓文", "郑姗姗", "祝琮博", "余小溪"
];

let intervalId = null;
let isRunning = false;

const nameBox = document.getElementById("name-box");
const startBtn = document.getElementById("start-btn");
const confirmBtn = document.getElementById("confirm-btn");

// Start button logic
startBtn.addEventListener("click", () => {
    if (isRunning) return; // Prevent multiple intervals
    isRunning = true;

    intervalId = setInterval(() => {
        const randomName = names[Math.floor(Math.random() * names.length)];
        nameBox.textContent = randomName;
    }, 100); // Update every 100ms
});

// Confirm button logic
confirmBtn.addEventListener("click", () => {
    if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
        isRunning = false;
    }
});
