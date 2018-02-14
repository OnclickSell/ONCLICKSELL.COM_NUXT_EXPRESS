 <template>
    <div class='questions'>
        <h1 class='questions__title'>Laravel 5.5</h1>
        <os-question-box class="questions__comment--box" @reply="reply()" v-for="comment in comments" :key="comment" :comment="comment">Born on May 14, 1984, in White Plains, New York, Mark Zuckerberg co-founded the social-networking website Facebook</os-question-box>

        <os-reply--box class="questions__reply--box"/>
    </div>
</template>
<script>

import CommentBox from './comment.vue'
import ReplyBox from './reply--box.vue'

export default {
  data () {
    return {
      moreOptions: false,
      modal: false,
      currentPanel: 'os-tickets',
      comments: [
        {
          name: 'Aliakbar Sultani',
          date: '12/02/2017'
        },
        {
          name: 'Mark Zuckerburg',
          date: '12/02/2017'
        },
        {
          name: 'Bill Gates',
          date: '12/02/2017'
        }
      ]
    }
  },
  components: {
    // 'os-footer': OSFooter,
    'os-question-box': CommentBox,
    'os-reply--box': ReplyBox
  },
  methods: {
    reply (id) {
      console.log(id)
      alert('Replied')
    }
  },
  created () {
  }
}
</script>

<style lang='scss'>
@import '~assets/sass/CSS-Layout-system.scss';
@import '~assets/sass/OnclickSell.com--css--config.scss';


.questions {
  padding: 45px 12px 12px 12px;

  
}

.questions__title {
    border-top: 5px solid #60A4C0;
    margin: 0 0 25px 0;
    color: #666666;
    font-weight: bold;
    padding: 5px 1px;
}

.questions__comment--box {
  margin: 15px 0;

  @media all and (min-width: 599px) {
    width: 80%;
  }

  @media all and (min-width: 960px) {
    width: 70%;
  }

  @media all and (min-width: 1200px) {
    width: 50%;
  }
}

.questions__reply--box {
  width: 95%;
  margin: 80px 0 0 auto;

  @media all and (min-width: 960px) {
    width: 80%;
  }

  @media all and (min-width: 1200px) {
    width: 70%;
  }
}



</style>