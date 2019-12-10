<template>
  <div class="editor">
    <div class="code" v-show="!isFull">
      <div class="title">
        <h3>代码编辑器</h3>
        <div class="btns">
          <i-button size="small" type="warning" style="margin-right:10px" @click.prevent="reset">
            <i class="fa fa-refresh"></i> 重置</i-button>
          <i-button size="small" type="success" style="margin-right:10px" @click.prevent="run">
            <i class="fa fa-bug"></i> 运行</i-button>
        </div>

      </div>
      <tabs value="html" class="tabs">
        <tab-pane label="HTML" name="html">
          <div class="html-editor" ref="html-editor"></div>
        </tab-pane>
        <tab-pane label="JS" name="js">
          <div class="js-editor" ref="js-editor"></div>
        </tab-pane>
      </tabs>
    </div>
    <div class="tools" ref="tools">
      <span class="fa fa-arrows-alt" v-if="!isFull" @click="isFull=true"> 收缩</span>
      <span class="fa fa-compress" v-if="isFull" @click="isFull=false"> 源码</span>
    </div>
    <div class="pre-view" ref="preView"></div>
  </div>
</template>

<script>
import * as monaco from 'monaco-editor'
import * as axios from 'axios'
const name = 'Editor'
import { Button, Tabs, TabPane } from 'iview'
export default {
  name,
  components: {
    IButton: Button,
    Tabs,
    TabPane
  },
  data() {
    return {
      htmlEditor: null,
      jsEditor: null,
      exampleHtml: '',
      previewHtml: '',
      htmlStr: '',
      jsStr: '',
      isFull: true
    }
  },
  watch: {
    isFull(newVal, oldVal) {
      this.$nextTick(() => {
        this.updateLayout()
      })
    }
  },
  methods: {
    initEditor() {
      return new Promise((resolve, reject) => {
        let config = {
          theme: 'vs-dark',
          formatOnPaste: true,
          fontSize: 14,
          scrollbar: {
            verticalScrollbarSize: 2
          }
        }
        this.htmlEditor = monaco.editor.create(this.$refs['html-editor'], {
          value: this.htmlStr,
          language: 'html',
          ...config
        })
        this.jsEditor = monaco.editor.create(this.$refs['js-editor'], {
          value: this.jsStr,
          language: 'javascript',
          ...config
        })
        resolve()
      })
    },
    reset() {
      this.parseHtml()
      this.htmlEditor.setValue(this.htmlStr)
      this.jsEditor.setValue(this.jsStr)
      this.loadPreview()
    },
    run() {
      this.htmlStr = this.htmlEditor.getValue()
      this.jsStr = this.jsEditor.getValue()
      if (this.htmlStr) {
        this.loadPreview()
      }
    },
    loadPreview() {
      let iFrame = this.createIFrame()
      let iframeDocument = iFrame.contentWindow.document
      iframeDocument.open()
      let content = this.htmlStr + '<script>' + this.jsStr + '<' + '/script>'
      iframeDocument.write(this.previewHtml.replace('<bodyhtml />', content))
      iframeDocument.close()
    },
    getExamplePage() {
      let obj = this.parseUrl(this.$route.fullPath)
      let anchor = obj['type'] + '/' + obj['page']
      return axios.get(global.config.url[obj['examples-type'] + '-examples'] + `/pages/${anchor}.html`)
    },
    getPreviewPage() {
      let obj = this.parseUrl(this.$route.fullPath)
      return axios.get(global.config.url[obj['examples-type'] + '-examples'] + '/pages/preview.html')
    },
    createIFrame() {
      var preViewPane = this.$refs['preView']
      preViewPane.innerHTML = ''
      var iframe = document.createElement('iframe')
      iframe.setAttribute('id', 'innerPage')
      iframe.setAttribute('name', 'innerPage')
      preViewPane.append(iframe)
      return iframe
    },
    parseUrl(url) {
      let obj = {}
      let reg = /[?&][^?&]+=[^?&]+/g
      let arr = url.match(reg)
      if (arr) {
        arr.forEach(item => {
          let tempArr = item.substr(1).split('=')
          let key = decodeURIComponent(tempArr[0])
          let val = decodeURIComponent(tempArr[1])
          obj[key] = val
        })
      }
      return obj
    },
    parseHtml() {
      this.htmlStr = ''
      this.jsStr = ''
      if (this.exampleHtml) {
        let index = this.exampleHtml.indexOf('<script>')
        if (index >= 0) {
          this.htmlStr = this.exampleHtml.substr(0, index)
          this.jsStr = this.exampleHtml.substr(index).replace(/<\/{0,1}script>\n*/g, '')
        } else {
          this.htmlStr = this.exampleHtml
        }
      }
    },
    updateLayout() {
      if (!this.jsEditor && !this.htmlEditor) {
        this.initEditor()
      }
      this.$refs['tools'].style.left = this.isFull ? '20px' : '620px'
      this.$refs['preView'].style.left = this.isFull ? '0px' : '600px'
      this.$refs['preView'].style.width = this.isFull ? '100%' : 'calc(100% - 600px)'
    }
  },
  mounted() {
    axios.all([this.getExamplePage(), this.getPreviewPage()]).then(
      axios.spread((example, preview) => {
        this.exampleHtml = example.data
        this.previewHtml = preview.data
        if (this.exampleHtml && this.previewHtml) {
          this.parseHtml()
          this.loadPreview()
        }
      })
    )
  }
}
</script>

<style lang="scss">
.editor {
  .ivu-tabs-bar {
    margin-bottom: 1px;
  }
}
</style>


<style lang="scss" scoped>
.editor {
  width: 100%;
  height: 100%;
  display: flex;
  padding-top: 60px;
  .code {
    position: absolute;
    width: 600px;
    height: 100%;
    border-right: 1px solid #cecece;
    .title {
      display: flex;
      align-items: center;
      justify-content: space-between;
      h3 {
        margin-left: 5px;
        color: #cecece;
      }
      .btns {
        text-align: right;
        padding-top: 5px;
      }
    }
    .tabs {
      width: 100%;
      height: calc(100% - 30px);
    }
    .html-editor,
    .js-editor {
      width: 600px;
      height: 820px;
    }
  }
  .pre-view {
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .tools {
    position: absolute;
    left: 20px;
    top: 70px;
    z-index: 1;
    span {
      padding: 0 10px;
      min-width: 54px;
      height: 30px;
      line-height: 30px;
      margin: 4px;
      text-align: center;
      background-color: rgba(34, 45, 50, 0.7);
      color: #fff;
      cursor: pointer;
    }
  }
}
</style>
