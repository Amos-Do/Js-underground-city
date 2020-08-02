<template>
  <div>
    <div class="wrap-2F">
      <div class="wrap">
        <div class="clock-bg">
          <div
            class="second-hand"
            :style="{ 'transform': `translate(-50%, -3%) rotate(${secDeg - 180}deg)`}"
          ></div>
          <div
            class="minute-hand"
            :style="{ 'transform': `translate(-50%, 0) rotate(${minDeg}deg)`}"
          ></div>
          <div
            class="hour-hand"
            :style="{ 'transform': `translate(-4%, -98%) rotate(${hourDeg - 90}deg)`}"
          ></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      secDeg: 0,
      minDeg: 0,
      hourDeg: 0,
    };
  },
  mounted() {
    this.timeoutHandler();
  },
  methods: {
    setClock() {
      const data = new Date();
      const sec = data.getSeconds();
      const min = data.getMinutes();
      const hour = data.getHours();
      this.timeToDeg(sec, min, hour);
    },
    timeToDeg(sec, min, hour) {
      this.secDeg = sec * 6;
      this.minDeg = min * 6 + (sec * 6) / 60;
      this.hourDeg = hour * 30 + (min * 30) / 60;
    },
    timeoutHandler() {
      this.setClock();
      setTimeout(this.timeoutHandler, 1000);
    },
  },
};
</script>

<style scoped lang="scss">
.wrap-2F {
  background: #293b29;
}

.wrap {
  max-width: 1280px;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.clock-bg {
  position: relative;
  width: 525px;
  height: 525px;
  background: url("../assets/images/2F-clock/clock-bg.svg") no-repeat;
  background-position: center;
  background-size: auto;
  div {
    position: absolute;
  }
}

.second-hand {
  width: 12px;
  height: 126px;
  background: url("../assets/images/2F-clock/second-hand.svg") no-repeat;
  background-size: auto;
  background-position: center;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -3%) rotate(180deg);
  transform-origin: 50% 0%;
  z-index: 2;
}

.minute-hand {
  width: 8px;
  height: 96px;
  background: url("../assets/images/2F-clock/minute-hand.svg") no-repeat;
  background-size: auto;
  background-position: center;
  top: unquote("calc(50% - 96px)");
  left: 50%;
  transform: translate(-50%, 0) rotate(0deg);
  transform-origin: 50% 96%;
  z-index: 1;
}

.hour-hand {
  width: 72px;
  height: 8px;
  background: url("../assets/images/2F-clock/hour-hand.svg") no-repeat;
  background-size: auto;
  background-position: center;
  top: 50%;
  left: 50%;
  transform: translate(-4%, -98%) rotate(-90deg);
  transform-origin: 4% 50%;
}
</style>
