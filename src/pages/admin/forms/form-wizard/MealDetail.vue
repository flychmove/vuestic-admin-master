<template>
  <div class="meal-detail">
    <va-input
      class="mb-4"
      v-model="value"
    >
      <template #prependInner>
        <p>
          菜品名称
        </p>
      </template>
      <template #appendInner>
        <va-button style="margin-right: 0;width: 80px"
                   flat @click="onselect">{{ $t('搜索') }}
        </va-button>
      </template>
    </va-input>
  </div>
</template>

<script>
  export default {
    name: "meal-detail",
  }
</script>

<style scoped>

</style>
