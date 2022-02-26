<template>
  <div class="form-wizard">
    <div class="search" style="width: 100%;">
      <va-input
        class="mb-4"
        v-model="value"
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

    <div class="row row-equal">

      <div class="flex xs12 lg4">
        <va-card>
          <va-card-title>
            {{ $t('菜品添加详情') }}
          </va-card-title>
          <va-card-content>
            这是一个卡片
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
        value: '',
      }
    },
    method: {
      onsubmit() {
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
