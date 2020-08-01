/* eslint-disable no-mixed-operators */
(() => {
  const sec = document.querySelector('.second-hand');
  const min = document.querySelector('.minute-hand');
  const hour = document.querySelector('.hour-hand');

  function setClock() {
    // 取得完整時間物件
    const data = new Date();

    const secDeg = data.getSeconds() * 6; // (360/60) 整個圓是 360 度，每 1s 是 6 度
    // (360/60) 整個圓是 360 度，每 1m 是 6 度，6 度又切成 60 格（s）
    const minDeg = data.getMinutes() * 6 + data.getSeconds() * 6 / 60;
    // (360/12) 整個圓是 360 度，每 1h 是 30 度，30 度裡要切成 60 格 (m)
    const hourDeg = data.getHours() * 30 + data.getMinutes() * 30 / 60;

    sec.style.transform = `translate(-50%, -3%) rotate(${secDeg - 180}deg)`;
    min.style.transform = `translate(-50%, 0) rotate(${minDeg}deg)`;
    hour.style.transform = `translate(-4%, -98%) rotate(${hourDeg - 90}deg)`;
  }

  setClock(); // 初始化

  // function timeoutHandler() {
  //   setClock();
  //   setTimeout(timeoutHandler, 1000); // 要自己呼叫自己，在設定延遲
  // }

  // function animationHandler() {
  //   setClock();
  //   window.requestAnimationFrame(animationHandler);
  // }

  setInterval(setClock, 1000); // 設定次與次的間隔，持續執行
  // setTimeout(timeoutHandler, 1000); // 設定延遲，執行一次

  // 計時器在畫面更新時，瀏覽器（硬體效能）的差異下會有些延遲
  // 刷新頻率會跟隨硬體頻率來變動，做到最佳化
  // window.requestAnimationFrame(animationHandler); // 像專門處理畫面更新的 setTimeout
})();
