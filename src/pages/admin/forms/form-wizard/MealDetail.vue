<template>
  <div class="meal-detail" style="width: 100%">
    <div style="min-width: 600px">
      <va-input
        class="md-1"
        v-model="mealName"
      >
        <template #prepend>
          <p style="width: 4rem">菜品名称</p>
        </template>
      </va-input>
    </div>

    <div class="row row-equal" style="margin-top: 10px">
      <div class="flex xs12 lg7">
        <va-file-upload v-model="mealImg" type="single"
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
          v-model="price"
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
        v-model="mealDetails"
        type="textarea"
        autosize>
        <template #prepend>
          <p style="width: 2rem">描述</p>
        </template>
      </va-input>
    </div>

    <div style="margin-top: 10px">
      <va-button class="mr-4" @click="cancelMeal">取消</va-button>
      <va-button class="mr-4" @click="sureMeal">确定</va-button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "meal-detail",
    data() {
      return {
        mealName: '',
        mealImg: [],
        category: '',
        isHot: false,
        label: '是否为热销菜',
        price: '',
        options: ['热菜', '凉菜', '小吃', '饮品'],
        mealDetails: '',
      }
    },
    methods: {
      cancelMeal() {
      },
      sureMeal() {
      }
    }
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
