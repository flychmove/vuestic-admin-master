<template>
  <div class="form-wizard">
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
                     flat @click="onsubmit">{{ $t('搜索') }}
          </va-button>
        </template>
      </va-input>
    </div>

    <div class="row row-equal" >

      <div class="flex xs12 lg4" v-for="meal in meals" :key="meal.id">
        <va-card>
          <va-image src="https://cdn.jsdelivr.net/gh/honjun/cdn@1.6/img/cover/(1).jpg.webp" />
          <va-card-title>
            {{ meal.name }}
          </va-card-title>
          <va-card-content>
<!--            {{meal.img}}-->

          </va-card-content>
        </va-card>
      </div>

    </div>

    <div></div>

  </div>
</template>

<script>
  export default {
    name: 'form-wizard',
    data() {
      return {
        meals: {},
        searchInfo:"",
      }
    },
    methods:{
      getAll(){
        this.axios.get("http://localhost:8081/meal/list").then(res =>{
          console.log(res.data)
          this.meals=res.data.data
        })
      },
      onsubmit(){
        this.axios.post("http://localhost:8081/meal/search",this.searchInfo).then(res=>{
          console.log(this.searchInfo)
          this.meals = res.data.data
        })
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
