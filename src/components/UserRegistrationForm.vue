<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <form>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Username</label>
                        <input
                            type="text"
                            class="form-control"
                            id="username"
                            placeholder="Username"
                            v-model="username"
                        >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputEmail1">Email</label>
                        <input
                            type="email"
                            class="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Enter email"
                            v-model="email"
                        >
                    </div>
                    <div class="form-group">
                        <label for="exampleInputPassword1">Password</label>
                        <input
                            type="password" 
                            class="form-control" 
                            id="exampleInputPassword1" 
                            laceholder="Password"
                            v-model="password"
                        >
                    </div>

                    <button 
                        type="submit" 
                        class="btn btn-primary"
                        @click.prevent="submit">Register</button>
                </form>
                <button class="btn btn-primary" @click.prevent="loadMembers">Load Members</button>
            </div>
        </div>
    </div>
</template>

<script>
import { User } from '../models/user';
import { UsersSerivce } from '../services/users.service';

export default {
  name: 'UserRegistrationForm',
  data: () => {
      return {
        username: undefined,
        email: undefined,
        password: undefined
      }
  },
  methods: {
      async submit () {
            let usersService = new UsersSerivce();
            let user = new User();
            user.username = this.username;
            user.password = this.password;
            user.email = this.email;                
            // eslint-disable-next-line no-console
            console.log(user);
            let response = await usersService.registerUser(user);
            // eslint-disable-next-line no-console
            console.log(response);
      },
      async loadMembers () {
          let usersService = new UsersSerivce();
          const members = usersService.getMembers();
          return members;
      }
  }
}
</script>

<style scoped>

</style>
