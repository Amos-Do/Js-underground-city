<template>
  <div>
    <div class="wrap">
      <!-- title -->
      <div class="card title-container">
        <span class="title-line title-line-top"></span>
        <div class="title-info">
          <h1>九九乘法表</h1>
          <p>MULTIPLICATION CHART</p>
        </div>
        <span class="title-line title-line-bottom"></span>
      </div>
      <!-- mult start -->
      <div class="card card-bg" v-for="num in 8" :key="num">
      <ul>
        <li class="main-number">{{num+1}}</li>
        <li v-for="multNum in 9" :key="multNum">
          {{num+1}} x {{multNum}} = {{(num + 1) * (multNum)}}
        </li>
      </ul>
      </div>
    </div>

    <footer>
      <div class="footer-info">
        <p>Copyright © 2019 HexSchool. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style lang="scss" scopedSlots>
$primary-color: #2eb738;

body {
  font-family: -apple-system, "Microsoft JhengHei", "Segoe UI", "Helvetica Neue",
    Arial, sans-serif;
  color: $primary-color;
  background-color: #f0f0f0;
}

.wrap {
  max-width: 1280px;
  margin: 0 auto;
  padding: 80px 85px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
}

.card {
  width: 350px;
  height: 366px;
  margin-bottom: 40px;
}

.title-container {
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  h1 {
    font-family: PingFang TC;
    font-size: 56px;
    line-height: 84px;
    font-weight: 500;
  }
  p {
    font-size: 24px;
    line-height: 36px;
  }
  .title-line {
    width: 80%;
    height: 1px;
    background-color: $primary-color;
  }
}

.title-line-top,
.title-line-bottom {
  &:before,
  &:after {
    content: "x";
    position: absolute;
  }
  &:before {
    left: 0;
  }
  &:after {
    right: 0;
  }
}
.title-line-top {
  &:before,
  &:after {
    top: -2.5%;
  }
}
.title-line-bottom {
  &:before,
  &:after {
    bottom: -1.5%;
  }
}

.card-bg {
  background-color: white;
  border-radius: 100px 0px 30px 0px;
  box-shadow: 0px 3px 10px #d8d8d8;
}

.card ul {
  height: 366px;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: space-around; //
  font-size: 24px;
  line-height: 24px;
  padding: 34px 40px 56px;
  .main-number {
    font-size: 128px;
    line-height: 153px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 0;
  }
  li {
    line-height: 33px;
    margin-bottom: 8px;
  }
  li:nth-child(5) {
    margin-top: 30px; //
  }
}

footer {
  position: sticky; //
  bottom: 0;
  height: 34px;
  background-color: $primary-color;
  padding: 8px 0;
  .footer-info {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 85px;
  }
  p {
    font-size: 16px;
    line-height: 22px;
    color: #f0f0f0;
    text-align: right;
  }
}

</style>
