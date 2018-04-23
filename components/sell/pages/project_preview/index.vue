<template>
    <div class="l-screenshot">
       <button @click="project_done">Upload the project</button>
    
    </div>
</template>

<script>
import Explainer from '@/components/others/explainer.vue'
import Input from '@/components/UI/sell/form/element'
import LZString from 'lz-string'
import ErrorPanel from '@/components/UI/error/error_panel.vue'
import Mixins from '@/mixins/sell.js'

export default {
  data () {
    return {
        images: []
    }
  },
  methods: {
    project_done() {
      this.$emit('submit')
    }
  },
  components: {
    'os-input': Input,
    'os-explainer': Explainer,
    'os-error-panel': ErrorPanel
  },
  mixins: [Mixins]
}
</script>

<style lang='scss' scoped>

@import '~assets/sass/grid.scss';
@import '~assets/sass/default.scss';


.l-screenshot {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    min-height: 500px;
}

.screenshot {
    width: 80%;
    margin: auto;
    padding-bottom: 50px;
    text-align: center;
    border-bottom: 2px solid #eaeaea;
}

.screenshot-title {
    padding: 5px;
    font-size: 1.7em;
    @include sourceSans_extra-light;
    color: #666666;
}


.upload_button {
    width: 200px;
    color: #FFFFFF;
    padding: 10px;
    margin: auto;
    border: none;
    border-radius: 2px;
    background: #3dc053;
    text-align: center;
    text-transform: uppercase;
}




.l-project_items-buttons {
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  margin: 10% auto 10% auto;
}

.project_items-buttons {
  width: 40%;
  margin: 10px 0;
  background: #3dc053;
  color: #FFFFFF;
  text-align: center;
  border: none;
  border-radius: 3px;
  padding: 12px;
}

.left {
    margin-left: 0;
    margin-right: auto;
}

.right {
    margin-right: 0;
    margin-left: auto;
}

.project_items-full {
    width: 100%;
}


.l-project_errors {
  margin-top: 10%;
  width: 80%;
}

</style>
