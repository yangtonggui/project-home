<template>
  <div class="example-list">
    <sidebar :menu-data="configData" :menu-type="type" @on-selected='scorllToExample'></sidebar>
    <div class="list" ref="list">
      <div v-for="data in configData" :key="data.name">
        <template v-for="(child,index) in data.children">
          <p class="label" :class="child.name" :key="index">
            <img :src="getMenuImage(data.name)" class="imgsize" style="margin-right:10px" />
            <span>{{data.label+' - '}}</span>
            <a href="#">{{child.label}}</a>
          </p>
          <div class="cards" :key="child.name">
            <Card v-for="(item,index) in child.examples" :key="index" class="card-item">
              <div @click.prevent="gotoEidtor(child.name,item.key)">
                <img :src="getImagePath(child.name,item)" />
              </div>
              <p slot="title" style="text-align:center">{{item.label}}</p>
            </Card>
          </div>
        </template>

        <template v-if="!data.children">
          <p class="label" :class="data.name">
            <img :src="getMenuImage(data.name)" class="imgsize" style="margin-right:10px" />
            {{data.label}}
          </p>
          <div class="cards">
            <Card v-for="(item,index) in data.examples" :key="index" class="card-item">
              <p slot="title" style="text-align:center">{{item.label}}</p>
              <div @click.prevent="gotoEidtor(data.name,item.key)">
                <img :src="getImagePath(data.name,item)" />
              </div>
            </Card>
          </div>
        </template>
      </div>
    </div>

  </div>
</template>
<script>
import Sidebar from '@/components/sidebar'
import { Card } from 'iview'
import * as axios from 'axios'
const name = 'ExampleList'
export default {
  name,
  data() {
    return {
      configData: [],
      type: '',
      selectedExample: ''
    }
  },
  components: {
    Sidebar,
    Card
  },
  watch: {
    $route(to, from) {
      this.type = to.params.type
      this.configData = []
      this.$nextTick(() => {
        this.getConfigData()
      })
    },
    selectedExample(newVal, oldVal) {
      this.selectedExample = newVal
      this.$nextTick(() => {
        let el = document.getElementsByClassName(this.selectedExample)[0]
        this.$refs['list'].scrollTop = el.offsetTop - 50
      })
    }
  },
  methods: {
    scorllToExample(name) {
      this.selectedExample = name
    },
    getConfigData() {
      axios
        .get(global.config.url[this.type + '-examples'] + '/config/menu.json')
        .then(response => {
          this.configData = response.data
        })
        .catch(() => {
          this.configData = []
        })
    },
    getMenuImage(name) {
      if (this.configData && !this.configData.length) {
        return false
      }
      return global.config.url[this.type + '-examples'] + '/images/menu/' + name + '_b.png'
    },
    getImagePath(folder, item) {
      if (this.configData && !this.configData.length) {
        return false
      }
      return global.config.url[this.type + '-examples'] + '/images/' + folder + '/' + item.key + '.' + (item.img_suffix || 'png' || 'jpg')
    },
    gotoEidtor(folder, key) {
      if (this.type === 'api') {
        window.open('./#/editor?examples-type=' + this.type + '&type=' + folder + '&page=' + key)
      } else if (this.type === 'comps') {
        window.open(global.config.url['comps-examples'] + '/#/' + key)
      }
    }
  },
  mounted() {
    this.type = this.$route.params.type
    this.$nextTick(() => {
      this.getConfigData()
    })
  }
}
</script>
<style lang="scss">
.example-list {
  .ivu-card-body {
    padding: 0px;
  }
}
</style>

<style lang="scss" scoped>
.example-list {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 60px;
  overflow: hidden;
  background: #f3f3f3;
  .imgsize {
    display: inline-block;
    width: 16px;
    height: 16px;
  }
  .list {
    width: calc(100% - 300px);
    height: 100%;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 0 15px;

    p.label {
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding-left: 10px;
      font-size: 16px;
      font-weight: bold;
      user-select: none;

      a {
        pointer-events: none;
      }
    }
    .cards {
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding-bottom: 20px;
      background: rgba(255, 255, 255, 1);
      box-shadow: 8px 0px 8px rgba(122, 122, 122, 0.2);
      cursor: pointer;
      .card-item {
        width: 250px;
        height: 250px;
        margin: 40px;
        text-align: center;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
