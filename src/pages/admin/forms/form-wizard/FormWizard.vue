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
              hide-default-actions
              no-outside-dismiss size="large">
      <div class="add-meal" style="width: 100%">
        <div style="min-width: 600px">
          <va-input
            class="md-1"
            v-model="addmeal.name"
          >
            <template #prepend>
              <p style="width: 4rem">菜品名称</p>
            </template>
          </va-input>
        </div>

        <div class="row row-equal" style="margin-top: 10px">
          <div class="flex xs12 lg7">
            <va-file-upload v-model="addmeal.img" type="single"
                            file-types="image/*"/>
          </div>
          <div class="flex xs12 lg5">
            <va-select class="mt-2" v-model="category" :options="options">
              <template #prepend>
                <p style="width: 2rem">类别</p>
              </template>
            </va-select>
            <va-checkbox class="mt-4" v-model="isHot" :label="label"/>
            <va-input
              class="md-1"
              v-model="addmeal.price"
              style="margin-top: 10px"
            >
              <template #prepend>
                <p style="width: 2rem">价格</p>
              </template>
            </va-input>
          </div>
        </div>

        <div style="margin-top: 10px">
          <va-input
            class="mb-4"
            v-model="addmeal.detail"
            type="textarea"
            autosize>
            <template #prepend>
              <p style="width: 2rem">描述</p>
            </template>
          </va-input>
        </div>

        <div style="margin-top: 10px">
          <va-button class="mr-4" @click="cancelMeal">取消</va-button>
          <va-button class="mr-4" @click="submitAddMeal">确定</va-button>
        </div>
      </div>
    </va-modal>

    <div class="row row-equal">
      <div class="flex xs12 lg4" v-for="meal in meals" :key="meal.id">
        <va-card>
          <va-image src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/cover/(1).jpg.webp"
                    @click="mealDetail = !mealDetail"/>
          <va-card-title>
            {{meal.name}}
          </va-card-title>
          <va-modal v-model="mealDetail" :overlay="false"
                    hide-default-actions
                    no-outside-dismiss size="large">
            <meal-detail/>
          </va-modal>
          <va-card-actions align="stretch" vertical>
            <va-button @click="deleteMeal = !deleteMeal">删除</va-button>
            <va-modal v-model="deleteMeal" :message="deleteMessage"
                      hide-default-actions overlay-opacity="0.2"
                      no-outside-dismiss size="large" >
              <template #footer>
                <va-button @click="deletemeal(meal.id)">
                  确定
                </va-button>
              </template>
            </va-modal>
          </va-card-actions>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
  import MealDetail from './MealDetail.vue'
  import AddMeal from './AddMeal.vue'
  import {computed} from "vue";
  import {useStore} from "vuex";

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
        isHot: false,
        label: '是否为热销菜',
        options: ['热菜', '凉菜', '小吃', '饮品'],
        addmeal:{
          name:'',
          type:'',
          isGood:null,
          img:'',
          detail:'',
          price:null,
        }
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
      deletemeal(id) {
        this.axios.delete("http://localhost:8081/meal/"+ id ).then(res=> {
          console.log("删除成功");
          console.log(res.data);
          this.deleteMeal = !this.deleteMeal;
          this.getAll();
        })
      },
      submitAddMeal() {
        this.addmeal.img = "https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/cover/(3).jpg.webp";
        if(this.isHot) {
          this.addmeal.isGood = 1;
        }
        else {this.addmeal.isGood = 0;}
        this.axios.post("http://localhost:8081/meal/",this.addmeal).then(res=>{
          console.log(res.data)

          this.getAll();
        })
        this.addMeal = !this.addMeal;
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
