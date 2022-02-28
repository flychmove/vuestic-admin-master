<template>
  <div class="tips-all">
    <div class="allTips" style="margin-top: 20px">
      <va-h1 style="font-size: large">所有公告</va-h1>
      <va-button style="font-size: large" @click="back">返回</va-button>


      <div class="row row-equal">
        <div class="flex xs12 lg4" v-for="notice in notices" :key="notice.id">
          <va-card>
            <va-card-title>
              {{notice.title}}
            </va-card-title>
            <va-modal v-model="tipsDetail" :message="tipsDetailMessage"
              :overlay="false" ok-text="确定" cancel-text="取消"
              no-outside-dismiss size="large">
              {{notice.detail}}
            </va-modal>
            <va-card-actions align="stretch" vertical>
              <va-button @click="tipsDetail = !tipsDetail">详情</va-button>
            </va-card-actions>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'tips-all',
    data() {
      return {
        tipsContent: '',
        selection: ["all-people"],
        tipsDetail: false,
        notices: {},
      }
    },
    methods: {
      getAll() {
        this.axios.get("http://localhost:8081/notice/list").then(res => {
          console.log(res.data)
          this.notices = res.data.data
        })
      },
      back() {
        this.$router.push({name: 'tables'})
      }
    },
    created() {
      this.getAll();
    },
  }
</script>

<style lang="scss">
  .row-equal {
    height: 100%;
  }

  .flex {
    height: 100%;
  }
</style>
