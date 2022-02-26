<template>
  <div class="auth-layout row align-content--center">
    <div class="flex xs12 pa-3 flex-center">
      <router-link class="py-5 flex-center" to="/">
<!--        <vuestic-logo height="32"/>-->
        <img class="mlogo" src="https://cdn.jsdelivr.net/gh/Samuluo/MealOrderSysRear@master/devicedemo%E5%90%8E%E7%AB%AF%E5%88%86%E5%B1%82%E6%A8%A1%E5%9E%8B%E5%8F%82%E8%80%83-%E6%BA%90%E7%A0%81/MealOrderSys/img.png
">
      </router-link>
    </div>

    <div class="flex xs12 pa-3">
      <div class="d-flex justify--center">
        <va-card class="auth-layout__card">
          <va-card-content>
            <va-tabs v-model="tabIndex" center>
              <template #tabs>
                <va-tab name="login">{{ $t("登录") }}</va-tab>
<!--                <va-tab name="signup">{{ $t("auth.createNewAccount") }}</va-tab>-->
              </template>
            </va-tabs>

            <va-separator />

            <div class="pa-3">
              <router-view />
            </div>
          </va-card-content>
        </va-card>
      </div>
    </div>
  </div>
</template>

<script>
import VuesticLogo from "@/components/vuestic-logo";

export default {
  name: "AuthLayout",
  components: { VuesticLogo },
  data() {
    return {
      selectedTabIndex: 0
    };
  },
  computed: {
    tabIndex: {
      set(tabName) {
        this.$router.push({ name: tabName });
      },
      get() {
        return this.$route.name;
      }
    }
  }
};
</script>

<style lang="scss">
.auth-layout {
  min-height: 100vh;
  background-image: linear-gradient(to right, var(--va-background), var(--va-white));

  &__card {
    width: 100%;
    max-width: 600px;
  }

  .mlogo{
    height: 120px;
    /*margin-top: 100px;*/
  }
}
</style>
