<template>
  <div class="va-table-responsive">
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
        users : users
        // users: users.slice(0, 4),
      }
    },
  }
</script>

<style lang="scss" scoped>
  .va-table-responsive {
    overflow: auto;
    width: 2000px;
  }
</style>
