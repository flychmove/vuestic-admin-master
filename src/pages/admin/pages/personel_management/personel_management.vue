<template>
  <div class="va-table-responsive">
    <table class="va-table va-table--clickable va-table--striped" >
      <thead>
        <tr>
          <th >Name</th>
          <th>Status</th>
          <th>Phone</th>
          <th width="180px">操作</th>

        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.status}}</td>
          <td>{{user.phone}}</td>
          <td>
            <template >
              <va-button color="warning" size="small" flat icon="edit" @click="onchange(user.id)">修改</va-button>
              <va-button color="danger" class="mr-4" size="small" flat icon="delete" @click="onDelete(user.id)">删除</va-button>
            </template>
          </td>
        </tr>
      </tbody>
    </table>
<!--    <va-button color="warning" size="small" flat icon="edit" @click="onchange(1)">修改</va-button>-->
    <va-pagination
      v-model="value"
      :pages="20"
      input
    />
    <!--表单弹框-->
<!--    <va-modal-->
<!--      message="修改信息"-->
<!--      v-model="showModal"-->
<!--    >-->
<!--      <va-form-->
<!--        style="width: 300px;"-->
<!--        tag="form"-->
<!--        @submit.prevent="handleSubmit"-->
<!--      >-->
<!--        <va-input-->
<!--          v-model="userInfo.usernameInfo"-->
<!--          label="Username"-->
<!--        />-->

<!--        <va-input-->
<!--          class="mt-2"-->
<!--          v-model="userInfo.userpasswordInfo"-->
<!--          type="password"-->
<!--          label="Password"-->
<!--        />-->

<!--        <va-input-->
<!--          class="mt-2"-->
<!--          v-model="userInfo.userstatusInfo"-->
<!--          label="Status"-->
<!--        />-->

<!--&lt;!&ndash;        <va-button type="submit" class="mt-2">&ndash;&gt;-->
<!--&lt;!&ndash;          修改&ndash;&gt;-->
<!--&lt;!&ndash;        </va-button>&ndash;&gt;-->

<!--      </va-form>-->
<!--    </va-modal>-->


    <va-modal
      v-model="showModal"
      hide-default-actions
      overlay-opacity="0.2"
    >
      <template #header>
        <h2>修改信息</h2>
      </template>
      <slot>
        <div>
          <va-form
            style="width: 300px;"
            tag="form"
          >
            <va-input
              class="mt-3"
              v-model="userInfo.usernameInfo"
              label="Username"
            />

            <va-input
              class="mt-3"
              v-model="userInfo.userpasswordInfo"
              type="password"
              label="Password"
            />

            <va-input
              class="mt-3"
              v-model="userInfo.userstatusInfo"
              label="Status"
            />

          </va-form>
        </div>
      </slot>
      <template #footer>
        <va-button @click="handleSubmit">
          提交修改
        </va-button>
      </template>
    </va-modal>



  </div>
</template>

<script>
  export default {
    data () {

      return {
        value: 3,
        users:{},
        useridInfo:1,
        userInfo:{
          usernameInfo:"",
          userpasswordInfo:"",
          userstatusInfo: 0,
        },
        showModal: false,
      }
    },
    methods:{
      getAll(){
        this.axios.get("http://localhost:8081/user/list").then(res =>{
          console.log(res.data)
          this.users=res.data.message.data
        })
      },
      onchange(id) {
        this.showModal = !this.showModal
        this.useridInfo = id
        this.userInfo.usernameInfo = this.users[id].name
        this.userInfo.userpasswordInfo = this.users[id].password
        this.userInfo.userstatusInfo = this.users[id].status
      },
      onDelete(id){
        this.axios.post("http://localhost:8081/user/"+id).then(res =>{
          if(res.data.code===200){
            console.log("删除成功")
            this.getAll();
          }else {
            console.log("删除失败")
            this.getAll();
          }
        })
      },
      handleSubmit (e) {
        alert('-- 提交成功 --')
        this.axios.post("http://localhost:8081/user/"+this.useridInfo,this.userInfo).then(res =>{


        })
        this.showModal = !this.showModal
        this.userInfo.usernameInfo = ""
        this.userInfo.userpasswordInfo = ""
        this.userInfo.userstatusInfo = 0
        this.getAll();
      },
    },
    created() {
      this.getAll();
    },

  }
</script>

<style lang="scss" scoped>
  .va-table-responsive {
    overflow: auto;
  }
</style>
