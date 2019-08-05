<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <form>
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

                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserRegistrationForm',
  data: () => {
      return {
        email: undefined,
        password: undefined
      }
  }
}
</script>

<style scoped>

</style>
