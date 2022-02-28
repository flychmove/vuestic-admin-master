<template>
  <div class="tips-all">
    <div class="allTips" style="margin-top: 20px">
      <va-h1 style="font-size: large">所有公告</va-h1>
      <va-button style="font-size: large" @click="back">返回</va-button>


      <div class="row row-equal">
        <div class="flex xs12 lg4" v-for="count in 3">
          <va-card>
            <va-card-title>
              {{notices.title}}
            </va-card-title>
            <va-modal v-model="tipsDetail" :message="tipsDetailMessage"
                      :overlay="false" ok-text="确定" cancel-text="取消"
                      no-outside-dismiss size="large">

              <div class="noticeDetail" style="width: 100%">
                <div class="title" style="width: 100%">
                  <va-input
                    class="mb-4"
                    v-model="noticeTitle"
                  >
                    <template #prepend>
                      <va-h1 style="width: 5rem">公告标题</va-h1>
                    </template>
                  </va-input>
                </div>
                <div class="row row-equal">
                  <div class="flex xs12 lg6">
                    <va-input
                      class="mb-4"
                      v-model="noticeOrder"
                    >
                      <template #prepend>
                        <va-h1 style="width: 3rem">发送者</va-h1>
                      </template>
                    </va-input>
                  </div>
                  <div class="flex xs12 lg6">
                    <va-input
                      class="mb-4"
                      v-model="noticeTime"
                    >
                      <template #prepend>
                        <va-h1 style="width: 2rem">时间</va-h1>
                      </template>
                    </va-input>
                  </div>
                </div>
                <div>
                  <va-input
                    class="mb-4"
                    v-model="noticeContent"
                    type="textarea"
                    autosize
                  >
                    <template #prepend>
                      <va-h1 style="width: 5rem">公告内容</va-h1>
                    </template>
                  </va-input>
                </div>
              </div>

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

        noticeTitle: '',
        noticeOrder: '',
        noticeTime: '',
        noticeContent: '',
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
