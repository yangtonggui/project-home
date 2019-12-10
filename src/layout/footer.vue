<template>
  <div class="footer">
    <div class="content">
      <div class="logo"></div>
      <div class="msg">
        <div>江苏省苏州市工业园区新平街388号腾飞创新园12号楼</div>
        <div>（+86）0512 65123335</div>
        <div>http://www.gaeainfo.com</div>
      </div>
      <!-- <p class="location">江苏省苏州市工业园区新平街388号腾飞创新园12号楼 <br> （+86）0512 65123335<br> http://www.gaeainfo.com</p> -->
    </div>
  </div>
</template>
<style lang="scss">
/* footer部分 */
.footer {
  height: 213px;
  background: rgba(40, 64, 182, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  .content {
    height: 160px;
    text-align: center;
    .logo {
      width: 102px;
      height: 25px;
      position: absolute;
      left: 50%;
      transform: translateX(-50%);
      background: url('../assets/images/home/logo.png');
    }
    .msg {
      padding-top: 40px;
      font-size: 20px;
      font-weight: 500;
      color: rgba(255, 255, 255, 1);
    }
  }
}
</style>
<script>
const name = 'Footer'
export default {}
</script>
