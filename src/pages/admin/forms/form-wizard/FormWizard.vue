<template>
  <div class="form-wizard">
    <va-affix :offset-top="95">
      <div class="search" style="width: 100%;">
        <va-input
          class="mb-4"
          v-model="searchInfo"
        >
          <template #prependInner>
            <va-icon
              name="search"
            />
          </template>
          <template #appendInner>
            <va-button style="margin-right: 0;width: 80px"
                       flat @click="onselect">{{ $t('搜索') }}
            </va-button>
          </template>
        </va-input>
      </div>

      <va-button icon="add" style="margin-right: 0" size="large" class="mb-4"
                 @click="addMeal = !addMeal">
      </va-button>
    </va-affix>

    <va-modal v-model="addMeal" :overlay="false"
              ok-text="确定" cancel-text="取消"
              no-outside-dismiss size="large">
      <meal-detail/>
    </va-modal>

    <div class="row row-equal">
      <div class="flex xs12 lg4" v-for="meal in meals" :key="meal.id">
        <va-card>
          <va-image src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/cover/(1).jpg.webp"/>
          <va-card-title>
            <va-modal v-model="mealDetail" :overlay="false"
                      ok-text="确定" cancel-text="取消"
                      no-outside-dismiss size="large">
              <meal-detail/>
            </va-modal>
          </va-card-title>
        </va-card>
      </div>

      <div class="flex xs12 lg4">
        <va-card>
          <va-image src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/cover/(1).jpg.webp"
                    @click="mealDetail = !mealDetail"/>
          <va-modal v-model="mealDetail" :overlay="false"
                    ok-text="确定" cancel-text="取消"
                    no-outside-dismiss size="large">
            <meal-detail/>
          </va-modal>
          <va-card-title>
            测试部分
          </va-card-title>
          <va-card-actions align="stretch" vertical>
            <va-button @click="deleteMeal = !deleteMeal">删除</va-button>
            <va-modal v-model="deleteMeal" :message="deleteMessage"
                      :overlay="false" ok-text="确定删除" cancel-text="取消"
                      no-outside-dismiss size="large">
            </va-modal>
          </va-card-actions>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
  import MealDetail from './MealDetail.vue'

  export default {
    name: 'form-wizard',
    components: {
      MealDetail,
    },
    data() {
      return {
        meals: {},
        searchInfo: "",
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
