<template>
  <form @submit.prevent="onsubmit">
    <va-input
      class="mb-3"
      v-model="ruleForm.name"
      type="name"
      :label="$t('用户名')"
      :error="!!usernameErrors.length"
      :error-messages="usernameErrors"
    />

<!--    <va-input-->
<!--      class="mb-4"-->
<!--      v-model="value"-->
<!--      label="Name"-->
<!--      placeholder="Label"-->
<!--    />-->

    <va-input
      class="mb-3"
      v-model="ruleForm.password"
      type="password"
      :label="$t('密码')"
      :error="!!passwordErrors.length"
      :error-messages="passwordErrors"
    />


<!--    <div class="auth-layout__options d-flex align&#45;&#45;center justify&#45;&#45;space-between">-->
<!--      <va-checkbox v-model="keepLoggedIn" class="mb-0" :label="$t('auth.keep_logged_in')"/>-->
<!--      <router-link class="ml-1 link" :to="{name: 'recover-password'}">{{$t('auth.recover_password')}}</router-link>-->
<!--    </div>-->

    <div class="d-flex justify--center mt-3">
      <va-button @click="onsubmit" class="my-0">{{ $t('登录') }}</va-button>
    </div>
  </form>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      // email: '',
      // password: '',
      keepLoggedIn: false,
      usernameErrors: [],
      passwordErrors: [],
      ruleForm: {
        name: '',
        password: ''
      }
    }
  },
  computed: {
    formReady () {
      return !this.usernameErrors.length && !this.passwordErrors.length
    },
  },
  methods: {
    onsubmit () {
      this.usernameErrors = this.ruleForm.name ? [] : ['Username is required']
      this.passwordErrors = this.ruleForm.password ? [] : ['Password is required']
      if (!this.formReady) {
        return
      }

      alert('submit!');
      this.axios.post("http://localhost:8081/login", this.ruleForm).then(res =>{
        console.log(res)
        const jwt = res.data.data.token
        const userInfo = res.data.data

        if(res.data.code===0){
          alert(res.data.message)
        }else {
          alert('登录成功!');
          this.$store.commit("SET_TOKEN",jwt)
          this.$store.commit("SET_USERINFO",userInfo)

        }
      })
      this.$router.push({ name: 'dashboard' })
      // console.log(this.$store.getters.getUser)
    }       // this.$router.push({ name: 'dashboard' })
  }

}
</script>
