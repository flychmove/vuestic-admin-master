<template>
  <div class="va-table-responsive">
    <!--    卡片样式-->
    <div class="flex md6 lg4">
      <va-card :bordered="false">
        <va-card-title>Bordered false</va-card-title>
        <va-card-content >

<!--          <div class="row">-->
<!--            <va-input-->
<!--              class="flex mb-2 md3"-->
<!--              type="number"-->
<!--              placeholder="Items..."-->
<!--              label="Items per page"-->
<!--              v-model.number="perPage"-->
<!--            />-->

<!--            <va-input-->
<!--              class="flex mb-2 md3"-->
<!--              type="number"-->
<!--              placeholder="Page..."-->
<!--              label="Current page"-->
<!--              v-model.number="currentPage"-->
<!--            />-->

<!--            <va-input-->
<!--              class="flex mb-2 md3"-->
<!--              placeholder="Filter..."-->
<!--              v-model="filter"-->
<!--            />-->
<!--          </div>-->

          <table class="va-table va-table--clickable">
            <thead>
              <tr>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="user in users" :key="user.id">
                <td>{{user.name}}</td>
                <td>{{user.username}}</td>
                <td>{{user.email}}</td>
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
        </va-card-content>
      </va-card>
    </div>

  </div>
</template>

<script lang="ts">

  // import users from 'vuestic-ui/src/data/Users'

  export default {
    data () {
      const users = [
        {
          id: 1,
          name: 'Leanne Graham',
          username: 'Bret',
          email: 'Sincere@april.biz',
          phone: '1-770-736-8031 x56442',
        },
        {
          id: 2,
          name: 'Ervin Howell',
          username: 'Antonette',
          email: 'Shanna@melissa.tv',
          phone: '010-692-6593 x09125',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
          username: 'Samantha',
          email: 'Nathan@yesenia.net',
          phone: '1-463-123-4447',
        },
        {
          id: 4,
          name: 'Patricia Lebsack',
          username: 'Karianne',
          email: 'Julianne.OConner@kory.org',
          phone: '493-170-9623 x156',
        },
        {
          id: 5,
          name: 'Chelsey Dietrich',
          username: 'Kamren',
          email: 'Lucio_Hettinger@annie.ca',
          phone: '(254)954-1289',
        },
      ]
      return {
        users : users,
        items: users,

        perPage: 3,
        currentPage: 1,
        filter: '',
        filtered: users,
        // users: users.slice(0, 4),
      }
    },

  }
</script>

<style lang="scss" scoped>
  .va-table-responsive {
    overflow: auto;

    text-align: center;
    text-align: -webkit-center;
  }
</style>
