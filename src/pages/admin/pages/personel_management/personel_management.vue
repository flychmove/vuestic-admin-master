<template>
  <div class="va-table-responsive">
    <table class="va-table va-table--clickable">
      <thead>
        <tr>
          <th>Name</th>
          <th>Avatar</th>
          <th>Status</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="user in users" :key="user.id">
          <td>{{user.name}}</td>
          <td>{{user.avatar}}</td>
          <td>{{user.status}}</td>
          <td>{{user.phone}}</td>
        <!--          <td>-->
        <!--            <va-badge-->
        <!--              :text="user.status"-->
        <!--              :color="user.status"-->
        <!--            />-->
        <!--          </td>-->
        </tr>
      </tbody>
    </table>

  </div>
</template>

<script>
  // import users from 'vuestic-ui/src/data/Users'

  export default {
    data () {
      // const users = [
      //   {
      //     id: 1,
      //     name: "付洋",
      //     password: "12345678",
      //     status: 1,
      //     avatar: "",
      //     phone: null
      //   },
      //   {
      //     id: 2,
      //     name: 'Ervin Howell',
      //     password: 'Antonette',
      //     status: 'Shanna@melissa.tv',
      //     avatar: '010-692-6593 x09125',
      //     phone: null
      //   },
      //   {
      //     id: 3,
      //     name: 'Ervin Howell',
      //     password: 'Antonette',
      //     status: 'Shanna@melissa.tv',
      //     avatar: '010-692-6593 x09125',
      //     phone: null
      //   },
      //   {
      //     id: 4,
      //     name: 'Ervin Howell',
      //     password: 'Antonette',
      //     status: 'Shanna@melissa.tv',
      //     avatar: '010-692-6593 x09125',
      //     phone: null
      //   },
      //   {
      //     id: 5,
      //     name: 'Ervin Howell',
      //     password: 'Antonette',
      //     status: 'Shanna@melissa.tv',
      //     avatar: '010-692-6593 x09125',
      //     phone: null
      //   },
      // ]
      return {
        // users : users
        // users: users.slice(0, 4),
        // user:{
        //   id:null,
        //   name:"",
        //   password:"",
        //   status:null,
        //   avatar:"",
        //   phone:""
        // },
        users:{}
      }
    },
    methods:{
      getAll(){
        this.axios.get("http://localhost:8081/user/list").then(res =>{
          console.log(res.data)
          this.users=res.data.data
        })
      }
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
