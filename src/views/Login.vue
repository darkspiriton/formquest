<template>
  <div>
    <form>
      <h1>Bienvenido</h1>
      <fieldset>
        <label for="name">Usuario:</label>
        <input type="text" name="user_name" v-model="user">
        <label for="age">Contraseña:</label>
        <input type="password" name="user_pass" v-model="pass">
        <ul class="error" v-if="hasError">
          <li> {{textError}} </li>
        </ul>
      </fieldset>
      <button @click.prevent="login()" :disabled="isLoading">Ingresar</button>
    </form>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: null,
      pass: null,
      hasError: false,
      textError: null,
      isLoading: false
    }
  },
  methods: {
    ...mapMutations(['SET_LOGIN_USER', 'SET_USER_DATA']),
    async login () {
      if (this.isLoading) {
        return
      }
      this.isLoading = true
      let isValid = false
      const users = await this.getUsers(this.user)
      if (users) {
        let userData = null
        for (const value of users) {
          isValid = value.pass === this.pass
          if (isValid) {
            userData = value
            break
          }
        }
        if (isValid) {
          const isAdmin = userData.admin === true
          this.$store.commit('SET_LOGIN_USER')
          this.$store.commit('SET_SUPER_ADMIN', isAdmin)
          this.$store.commit('SET_USER_DATA', userData)
          this.$router.push('/dashboard')
        } else {
          this.hasError = true
          this.textError = 'Contraseña invalida'
        }
      } else {
        this.hasError = true
        this.textError = 'Usuario no registrado'
      }
      this.isLoading = false
    },
    async getUsers (query) {
      if (query === null) return null
      const response = await window.database.ref().child('users').orderByChild('user').equalTo(query.toLowerCase()).once('value')
      let users = null
      if (response.val() !== null) {
        users = Object.values(response.val())
      }
      return users
    }
  }
}
</script>>
