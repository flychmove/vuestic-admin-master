<template>
<!--  <div class="va-table-responsive">

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
            <va-button color="warning" size="small" flat icon="edit" @click="onchange(user.id)">修改</va-button>
            <va-button color="danger" class="mr-4" size="small" flat icon="delete" @click="onDelete(user.id)">删除</va-button>
        </td>
      </tr>
      </tbody>
    </table>
    &lt;!&ndash;    <va-button color="warning" size="small" flat icon="edit" @click="onchange(1)">修改</va-button>&ndash;&gt;
    <va-pagination
      v-model="value"
      :pages="20"
      input
    />
    &lt;!&ndash;表单弹框&ndash;&gt;
    &lt;!&ndash;    <va-modal&ndash;&gt;
    &lt;!&ndash;      message="修改信息"&ndash;&gt;
    &lt;!&ndash;      v-model="showModal"&ndash;&gt;
    &lt;!&ndash;    >&ndash;&gt;
    &lt;!&ndash;      <va-form&ndash;&gt;
    &lt;!&ndash;        style="width: 300px;"&ndash;&gt;
    &lt;!&ndash;        tag="form"&ndash;&gt;
    &lt;!&ndash;        @submit.prevent="handleSubmit"&ndash;&gt;
    &lt;!&ndash;      >&ndash;&gt;
    &lt;!&ndash;        <va-input&ndash;&gt;
    &lt;!&ndash;          v-model="userInfo.usernameInfo"&ndash;&gt;
    &lt;!&ndash;          label="Username"&ndash;&gt;
    &lt;!&ndash;        />&ndash;&gt;

    &lt;!&ndash;        <va-input&ndash;&gt;
    &lt;!&ndash;          class="mt-2"&ndash;&gt;
    &lt;!&ndash;          v-model="userInfo.userpasswordInfo"&ndash;&gt;
    &lt;!&ndash;          type="password"&ndash;&gt;
    &lt;!&ndash;          label="Password"&ndash;&gt;
    &lt;!&ndash;        />&ndash;&gt;

    &lt;!&ndash;        <va-input&ndash;&gt;
    &lt;!&ndash;          class="mt-2"&ndash;&gt;
    &lt;!&ndash;          v-model="userInfo.userstatusInfo"&ndash;&gt;
    &lt;!&ndash;          label="Status"&ndash;&gt;
    &lt;!&ndash;        />&ndash;&gt;

    &lt;!&ndash;&lt;!&ndash;        <va-button type="submit" class="mt-2">&ndash;&gt;&ndash;&gt;
    &lt;!&ndash;&lt;!&ndash;          修改&ndash;&gt;&ndash;&gt;
    &lt;!&ndash;&lt;!&ndash;        </va-button>&ndash;&gt;&ndash;&gt;

    &lt;!&ndash;      </va-form>&ndash;&gt;
    &lt;!&ndash;    </va-modal>&ndash;&gt;


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
              v-model="userInfo.name"
              label="Username"
            />

            <va-input
              class="mt-3"
              v-model="userInfo.password"
              type="password"
              label="Password"
            />

            <va-input
              class="mt-3"
              v-model="userInfo.status"
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



  </div>-->

  <va-data-table :items="users" :columns="columns" striped>
    <template #cell(actions)="{ rowIndex }" >
      <va-button flat icon="edit" @click="onchange(rowIndex)" />
      <va-button flat icon="delete" @click="onDelete(rowIndex)" />
    </template>
  </va-data-table>

</template>

<script>
  import { defineComponent } from 'vue'
  const defaultItem = {
      id:'',
      name: '',
      phone: '',
      status: '',
    }
  export default defineComponent({

    data () {
      const columns = [
        { key: 'id', sortable: true },
        { key: 'name', sortable: true },
        { key: 'phone', sortable: true },
        { key: 'status', sortable: true },
      ]
      return {
        value: 3,
        users:[],
        columns,
        useridInfo:1,
        userInfo:{
          name:"",
          password:"",
          status: 0,
        },
        showModal: false,
        createdItem: { ...defaultItem },
      }
    },
    methods:{
      getAll(){
        this.axios.get("http://localhost:8081/user/list").then(res =>{
          console.log(res.data.data)
          this.users=res.data.data
        })
      },
      onchange(id) {
        this.showModal = !this.showModal
        this.useridInfo = id
        this.userInfo.name = this.users[id].name
        this.userInfo.password = this.users[id].password
        this.userInfo.status = this.users[id].status
      },
      onDelete(id){
        this.axios.delete("http://localhost:8081/user/"+id).then(res =>{
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
        this.axios.put("http://localhost:8081/user/"+this.useridInfo,this.userInfo).then(res =>{
          console.log("返回了");
          console.log(res.data);
        })
        this.showModal = !this.showModal
        this.userInfo.usernameInfo = ""
        this.userInfo.userpasswordInfo = ""
        this.userInfo.userstatusInfo = 0
        this.getAll();
      },
      onsubmit(){
        this.axios.post("http://localhost:8081/user/search",this.searchInfo).then(res=>{
          this.users = res.data.data
        })
      }
    },
    created() {
      this.getAll();
    },

  })
</script>

<style lang="scss" scoped>
  .va-table-responsive {
    overflow: auto;
  }
  .table-example--slot {
    th {
      padding-top: 5px;
      padding-bottom: 5px;
      vertical-align: middle;
    }
  }
</style>

