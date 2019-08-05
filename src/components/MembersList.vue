<template>
    <div class="container">
        <div class="row">
            <div class="col-sm-6">
                <ul>
                    <li v-for="member in membersList" :key="member.id">
                        {{member.username}} {{member.email}}
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: 'UserRegistrationForm',
  data: () => {
      return {
        membersList: []
      }
  }
}
</script>

<style scoped>

</style>
