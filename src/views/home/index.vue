<template>
  <div class="home">
    <!-- banner -->
    <div class="banner">
      <div class="bgc">
        <div class="bgccontent">
          <h1 class="bgctitle">G.Space</h1>
          <p class="bgctext ">三维地理信息工程技术框架</p>
          <div class="bgcclik" @click="gotoGuide">了解更多</div>
        </div>
        <div class="roundish"></div>
      </div>
    </div>
    <div class="functional">
      <Row type="flex" class="row">
        <i-Col class="one base" :xs="24" :md="12" :lg="6">
          <div class="content">
            <div class="onelogo"></div>
            <h1 class="functionaltitle">核心引擎</h1>
            <p class="functionaltext">
              开发者可以利用核心引擎实现三维地理信息工程
            </p>
          </div>
        </i-Col>
        <i-Col class="two base" :xs="24" :md="12" :lg="6">
          <div class="content">
            <div class="base twologo"></div>
            <h1 class="functionaltitle">插件仓库</h1>
            <p class="functionaltext">以核心引擎为基础，针对各行业提供可复用的功能和效果插件</p>
          </div>
        </i-Col>
        <i-Col class="three base" :xs="24" :md="12" :lg="6">
          <div class="content">
            <div class="base threelogo"></div>
            <h1 class="functionaltitle">辅助工具</h1>
            <p class="functionaltext">产品级独立系统，提供标准和更易用的数据去支撑项目</p>
          </div>
        </i-Col>
        <i-Col class="four base" :xs="24" :md="12" :lg="6">
          <div class="content">
            <div class="base fourlogo"></div>
            <h1 class="functionaltitle">共性应用</h1>
            <p class="functionaltext">根据每个行业的共性需求，形成产品级应用</p>
          </div>
        </i-Col>
      </Row>
    </div>

    <!-- 特性  character-->
    <div class="character">
      <div class="vspot"></div>
      <div class="content">
        <h1 class="charactertitle">特性</h1>
        <p class="subhead">GSpace的特性</p>
      </div>
      <Row type="flex" class="row">
        <i-Col v-for="index in characterlog" :key="index.id" class="base" :xs="24" :sm="10" :lg="7">
          <div id="logo" :class="[index.logclass]"></div>
          <h1 class="title">{{ index.title }}</h1>
          <p class="text">{{ index.text }}</p>
        </i-Col>
      </Row>
      <!-- <div class="cspot"></div> -->
    </div>

    <!-- project 方案 -->
    <div class="project">
      <h1 class="title">解决方案</h1>

      <Row type="flex" class="row">
        <i-Col :xs="{ span: 20 }" :xl="{span:10}">
          <div class="logo3d"></div>
        </i-Col>
        <i-Col class="projectRight" :xs="{ span: 20 }" :xl="{span:10}">
          <div class="projectCente">
            <h3 class="projectrtitle">
              <span class="round"></span>
              广义场景
            </h3>
            <br />
            <p class="projectltext">应用于城市级三维地图展现，主要采用倾斜摄影和白模构建城市地理的解决方案</p>
            <h3 class="projectrtitle">
              <span class="round"></span>
              区域场景
            </h3>
            <br />
            <p class="projectltext">应用于厂区或园区部分的精细模型三维展示，利用高精度模型建模方式加强模型单点的交互性</p>
            <h3 class="projectrtitle">
              <span class="round"></span>
              特殊场景
            </h3>
            <br />
            <p class="projectltext">应用于BIM模型、VR虚拟现实等特殊应用场景、用于客户特殊业务需求满足数据挖掘和分析诉求</p>
          </div>
        </i-Col>
      </Row>
    </div>
    <!-- caseshow案例 -->
    <div class="caseshow">
      <p>.</p>
      <h1 class="caseshowtitle">案例</h1>
      <p class="caseshowtext">基于GSpace三维框架开发的系列产品</p>
      <Carousel :height="420" radius-dot loop dots="outside" autoplay>
        <CarouselItem>
          <Row type="flex" class="row"> </Row>
        </CarouselItem>
        <CarouselItem>
          <Row type="flex" class="row"> </Row>
        </CarouselItem>
        <CarouselItem>
          <Row type="flex" class="row"> </Row>
        </CarouselItem>
      </Carousel>
    </div>
    <!-- 合作  -->
    <div class="cooperative">
      <h1 class="cooperativetitle">合作单位</h1>
      <div class="logo-vspot"></div>
      <Row type="flex" class="row">
        <i-Col class="cooperativeitem" :xs="{ span: 20, offset: 2 }" :sm="{ span: 10 }" :lg="{ span: 7 }" :xxl="{ span: 4, offset: 1 }">
          <img src="../../assets/images/cop/szga.png" />
        </i-Col>
        <i-Col class="cooperativeitem" :xs="{ span: 20, offset: 2 }" :sm="{ span: 10 }" :lg="{ span: 7 }" :xxl="{ span: 4 }">
          <img src="../../assets/images/cop/ws.png" />
        </i-Col>
      </Row>
      <div class="logo-cspot"></div>
    </div>
    <ly-footer></ly-footer>
  </div>
</template>

<script>
import LyFooter from '@/layout/footer.vue'
export default {
  name: 'home',
  components: {
    LyFooter
  },
  data() {
    return {
      characterlog: [
        {
          logclass: 'trianglelogo',
          title: '赋能性',
          text: '赋能三维地理信息工程技术为客户降本增效'
        },
        { logclass: 'linklogo', title: '通用性', text: '被嵌入与信息化系统，无缝对接' },

        {
          logclass: 'linelogo',
          title: '轻量级',
          text: '无插件、通用浏览器展示、无特殊依赖'
        },
        {
          logclass: 'starlogo',
          title: '挖掘性',
          text: '细化数据颗粒度为客户 提供数据分析的依据'
        },
        {
          logclass: 'gearlogo',
          title: '扩展性',
          text: '用于不同前沿技术 5G、VR、AI、IOT 应用场景'
        },
        {
          logclass: 'screenlogo',
          title: '多端性',
          text: '一套程序同时支持手机、PC、大屏端'
        }
      ],
      cooperative: [{ id: '1' }, { id: '2' }, { id: '3' }]
    }
  },
  methods: {
    gotoGuide() {
      this.$router.push('guide')
    }
  }
}
</script>
<style lang="scss" scoped>
.home {
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-y: auto;
  position: relative;
  .right-fl {
    float: right;
  }
  .left-fl {
    float: left;
  }
  /* banner  */
  .banner {
    width: 100%;
    height: 100%;
    position: relative;
    top: 0;
  }
  .banner .roundish {
    background: url('../../assets/images/home/roundish.png');
    z-index: 1;
    width: 681px;
    height: 681px;
    position: absolute;
    right: 160px;
    top: 229px;
  }
  .banner .bgc {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    background: url('../../assets/images/home/bgc.png');
  }

  .banner .bgccontent {
    // width: 800px;
    height: 400px;
    margin-left: 5%;
  }
  .banner .bgctitle {
    font-size: 60px;

    font-weight: 400;
    line-height: 77px;
    color: rgba(255, 255, 255, 1);
  }
  .banner .bgctext {
    font-size: 50px;
    font-weight: 300;
    line-height: 72px;

    color: rgba(255, 255, 255, 1);
    margin: 20px 0 30px 0;
  }
  .banner .bgcclik {
    width: 228px;
    height: 64px;
    background: rgba(221, 76, 76, 1);
    border-radius: 32px;
    font-size: 20px;
    font-weight: 500;
    line-height: 64px;
    color: rgba(255, 255, 255, 1);
    text-align: center;
    cursor: pointer;
  }

  /* functional  功能部分*/
  .functional .row {
    width: 100%;
    // height: 318px;
  }
  .functional .content {
    width: 80%;
    height: 80%;
    margin: 70px auto;
  }
  .functional .content .base {
    width: 36px;
    height: 36px;
    margin: 20px;
  }
  .onelogo {
    width: 55px;
    height: 23px;
    margin: 20px;
    background: url('../../assets/images/home/sdk.png');
  }

  .twologo {
    background: url('../../assets/images/home/stor.png');
  }
  .threelogo {
    background: url('../../assets/images/home/toolbar.png');
  }
  .fourlogo {
    background: url('../../assets/images/home/apply.png');
  }
  .functionaltitle {
    width: 96px;
    height: 33px;
    font-size: 24px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    line-height: 33px;
    margin: 20px;
  }
  .functionaltext {
    height: 58px;
    font-size: 20px;
    font-weight: 300;
    line-height: 30px;
    color: rgba(242, 242, 242, 1);
    opacity: 0.7;
    margin: 20px;
    line-height: 30px;
  }

  .functional .one {
    background: rgba(40, 64, 182, 1);
  }
  .functional .two {
    background: rgba(35, 56, 160, 1);
  }
  .functional .three {
    background: rgba(30, 49, 140, 1);
  }
  .functional .four {
    background: rgba(28, 44, 127, 1);
  }
  /* character 部分*/
  .character {
    // border: 1px red solid;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;

    // position: absolute;
  }
  .character .vspot {
    background: url('../../assets/images/home/vspot.png');
    height: 140px;
    width: 141px;
    z-index: -24;
    margin: 40px;
    position: absolute;
    left: 7%;
    top: 10%;
  }

  .character .content {
    width: 100%;
    text-align: center;
  }
  .character .row {
    width: 100%;
    justify-content: center;
  }
  .character .base {
    margin-bottom: 20px;
    // width: 25%;
    height: 250px;
  }

  .charactertitle {
    height: 50px;
    text-align: center;
    font-size: 36px;
    font-weight: 500;
    color: rgba(41, 41, 58, 1);
    margin-top: 40px;
  }
  .character .title {
    width: 180px;
    height: 50px;
    text-align: center;
    font-size: 24px;
    font-weight: 500;
    color: rgba(41, 41, 58, 1);
  }
  .character .subhead {
    height: 37px;
    font-size: 26px;
    font-weight: 500;
    color: rgba(51, 51, 51, 1);
    margin-bottom: 50px;
  }
  .character #logo {
    height: 82px;
    width: 80px;
    margin: 20px auto;
  }
  .character .trianglelogo {
    background: url('../../assets/images/home/triangle.png');
  }
  .character .linklogo {
    background: url('../../assets/images/home/link.png');
  }
  .character .starlogo {
    background: url('../../assets/images/home/star.png');
  }
  .character .linelogo {
    background: url('../../assets/images/home/line.png');
  }
  .character .gearlogo {
    background: url('../../assets/images/home/gear.png');
  }
  .character .screenlogo {
    background: url('../../assets/images/home/screen.png');
  }
  .character .title {
    margin: 15px auto;
    font-size: 24px;
    font-weight: 500;
    line-height: 29px;
    color: rgba(0, 0, 0, 1);
  }
  .character .text {
    width: 260px;
    height: 58px;
    margin: 0 auto;
    font-size: 20px;
    font-weight: 400;
    // line-height: 30px;
    color: rgba(0, 0, 0, 1);
    text-align: center;
  }
  .cspot {
    height: 180px;
    width: 300px;
    background: url('../../assets/images/home/cspot.png') no-repeat;
    z-index: -24;
  }

  // /* project */
  .project {
    width: 100%;
    padding: 20px 0;
    background: #f5f5f5;
  }
  .project .title {
    display: flex;
    justify-content: center;
    font-size: 36px;
    margin-bottom: 40px;
    font-weight: 500;
    color: rgba(41, 41, 58, 1);
    margin-top: 20px;
  }
  .project .row {
    justify-content: center;
  }

  .logo3d {
    height: 395px;
    background: url('../../assets/images/home/logo3d.png') center center;
    background-size: cover;
  }

  .projectrtitle {
    height: 25px;
    font-size: 25px;
    color: rgba(41, 41, 58, 1);
    margin-bottom: 11px;
  }
  .projectltext {
    font-size: 20px;
    font-weight: 400;
    line-height: 30px;
    color: rgba(0, 0, 0, 1);
    margin-bottom: 20px;
  }
  .projectrtitle .round {
    display: inline-block;
    width: 12px;
    height: 12px;
    background: rgba(57, 90, 226, 1);
    border-radius: 50%;
  }
  // /* caseshow 部分 */
  .caseshow {
    position: relative;
    width: 100%;
    // height: 680px;
    background: rgba(44, 75, 183, 1);
  }
  .caseshowtitle {
    // height: 50px;
    font-size: 36px;
    font-weight: 500;
    color: rgba(255, 255, 255, 1);
    margin: 0 auto;
    text-align: center;
    margin-top: 10px;
  }
  .caseshowtext {
    // width: 632px;
    // height: 37px;
    font-size: 26px;
    font-weight: 500;
    line-height: 31px;
    color: rgba(255, 255, 255, 1);
    margin: 25px auto 50px auto;
    text-align: center;
  }
  .caseshow .row {
    justify-content: space-around;
  }
  .caseshowitem {
    width: 540px;
    height: 320px;
    background: rgba(204, 204, 204, 1);
  }
  .ivu-carousel-dots li {
    margin-left: 20px;
  }

  .caseshowbase {
    height: 37px;
    font-size: 26px;
    font-weight: 500;
    line-height: 31px;
    color: rgba(255, 255, 255, 1);
    margin: 350px auto 0 auto;
  }
  // /* cooperative 部分 */
  .cooperative {
    position: relative;
    overflow: hidden;
  }
  .cooperativeitem {
    // width: 300px;
    height: 84px;
    //background: rgba(230, 230, 230, 1);
    margin-top: 30px;
    margin-bottom: 30px;
  }
  .cooperativetitle {
    text-align: center;
    height: 50px;
    font-size: 36px;
    font-weight: 500;
    color: rgba(41, 41, 58, 1);
  }
  .logo-vspot {
    position: absolute;
    background: url('../../assets/images/home/vspot.png') no-repeat;
    top: 30px;
    left: 40px;
    height: 100px;
    width: 280px;
    z-index: -10;
  }
  .logo-cspot {
    background: url('../../assets/images/home/cspot.png') no-repeat;
    height: 100px;
    width: 140px;
    margin: 40px;
    position: absolute;
    right: -5px;
    z-index: -10;
    bottom: -20px;
  }
}
</style>
