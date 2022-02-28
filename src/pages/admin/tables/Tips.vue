<template>
  <div class="tips">
    <div class="title" style="margin-top: 10px">
      <va-card>
        <va-card-content>
          <h1 style="font-size: large">写公告</h1>
          <va-card-actions align="between">
            <va-input
              v-model="tipsContent"
              type="textarea"
              autosize
            />
            <va-card class="flex xs12 lg2">
              <va-card-content>
                <va-h1 style="font-size: large">发送给:</va-h1>
                <div class="mb-4">{{ selection }}</div>
                <va-checkbox
                  v-model="selection"
                  array-value="all-people"
                  style="margin-top: 5px"
                  label="所有人"
                />
                <va-checkbox
                  v-model="selection"
                  array-value="manager"
                  style="margin-top: 5px"
                  label="管理员"
                />
                <va-checkbox
                  v-model="selection"
                  array-value="waiter"
                  style="margin-top: 5px"
                  label="前台服务人员"
                />
                <va-checkbox
                  v-model="selection"
                  array-value="kitchen"
                  style="margin-top: 5px"
                  label="后厨人员"
                />
                <va-button flat :rounded="false" size="large"
                           style="margin-top: 5px" @click="onsubmit">
                  发送
                </va-button>
              </va-card-content>
            </va-card>
          </va-card-actions>
        </va-card-content>
      </va-card>
    </div>

    <div class="recentTips" style="margin-top: 20px">
      <va-h1 style="font-size: large">近期公告</va-h1>
      <va-button style="font-size: large;" @click="more">更多</va-button>

      <div class="row row-equal">
        <div class="flex xs12 lg4" v-for="meal in meals" :key="meal.id">
          <va-card>
            <va-card-title>
              <va-modal v-model="mealDetail" :overlay="false"
                        hide-default-actions
                        no-outside-dismiss size="large">
                <meal-detail/>
              </va-modal>
            </va-card-title>
          </va-card>
        </div>

        <div class="flex xs12 lg4">
          <va-card>
            <va-modal v-model="mealDetail" :overlay="false"
                      hide-default-actions
                      no-outside-dismiss size="large">
              <meal-detail/>
            </va-modal>
            <va-card-title>
              测试部分
            </va-card-title>
            <va-card-actions align="stretch" vertical>
              <va-button @click="tipsDetail = !tipsDetail">详情</va-button>
              <va-modal v-model="tipsDetail" :message="tipsDetailMessage"
                        :overlay="false"
                        hide-default-actions
                        no-outside-dismiss size="large">
                neirong
              </va-modal>
            </va-card-actions>
          </va-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    name: 'tips',
    data() {
      return {
        tipsContent: '',
        selection: ["all-people"],
        tipsDetail: false,

        meals: {},
        addMeal: false,
        mealDetail: false,
        deleteMeal: false,
        deleteMessage: "是否确定删除该菜品?",
      }
    },
    methods: {
      getAll() {
        this.axios.get("http://localhost:8081/meal/list").then(res => {
          console.log(res.data)
          this.meals = res.data.data
        })
      },
      onselect() {
        this.axios.post("http://localhost:8081/meal/search", this.searchInfo).then(res => {
          console.log(this.searchInfo)
          this.meals = res.data.data
        })
      },
      more() {
        this.$router.push({name: 'tips-all'})
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
