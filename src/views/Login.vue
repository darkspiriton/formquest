<template>
  <div>
    <form>
      <h1>Bienvenido</h1>
      <fieldset>
        <label for="name">Usuario:</label>
        <input type="text" name="user_name" v-model="user">
        <label for="age">Contraseña:</label>
        <input type="password" name="user_pass" v-model="pass">
        <div v-if="hasError">Error</div>
      </fieldset>
      <button @click.prevent="login()">login</button>
    </form>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: null,
      pass: null,
      hasError: false
    }
  },
  methods: {
    ...mapMutations(['SET_LOGIN_USER']),
    login () {
      const exist = this.users.filter(user => {
        return user.name === this.user && user.pass === this.pass
      })
      const isValid = exist.length > 0
      if (isValid) {
        this.$store.commit('SET_LOGIN_USER')
        this.$router.push('/dashboard')
      } else {
        this.hasError = true
      }
    }
  },
  computed: mapState(['users'])
}
</script>>
