<template>
  <form>

    <h1>Crear tu cuenta</h1>

    <fieldset>
      <!-- <legend>DATOS GENERALES</legend> -->
      <label for="name">Usuario:</label>
      <input type="text" v-model="user.user" name="user">

      <label for="name">Nombres y Apellidos:</label>
      <input type="text" v-model="user.name" name="user_name">

      <label for="age">Edad:</label>
      <input type="number" v-model="user.age" name="user_age">

      <label for="age">Grado y Sección:</label>
      <input type="text" v-model="user.grade" name="user_grade">

      <label for="gender" >Sexo:</label>
      <select name="gender" v-model="user.gender">
          <option value="" disabled selected hidden>Selecciona tu opción</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
      </select>

      <label for="procedencia">Lugar de procedencia:</label>
      <select name="procedencia" v-model="user.origen">
          <option value="" disabled selected hidden>Selecciona tu opción</option>
          <option value="costa">Costa</option>
          <option value="sierra">Sierra</option>
          <option value="selva">Selva</option>
      </select>

      <label for="age">Nueva Contraseña:</label>
      <input type="password" v-model="passNew" name="user_pass_new">

      <label for="age">Confirmar Contraseña:</label>
      <input type="password" v-model="passNewRe" name="user_pass_re">
      <ul class="error" v-if="hasError">
          <li> Complete todos los datos o verifique que ambas contraseñas sean iguales </li>
        </ul>
    </fieldset>
    <button @click.prevent="createUser()" :disabled="isLoading">Crear Usuario</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      user: {
        user: null,
        name: null,
        age: null,
        grade: null,
        gender: '',
        origen: '',
        pass: null
      },
      passNew: null,
      passNewRe: null,
      hasError: false,
      isLoading: false
    }
  },
  methods: {
    ...mapActions(['SAVE_USER']),
    async createUser () {
      if (this.isLoading) {
        return
      }
      this.isLoading = true
      const isValid = this.isValidUser(this.user, this.passNew, this.passNewRe)
      if (isValid) {
        this.user.pass = this.passNew
        await this.$store.dispatch('SAVE_USER', this.user)
        this.$router.push('/')
      } else {
        this.hasError = true
      }
      this.isLoading = false
    },
    isValidUser (user, firstPass, secondPass) {
      const isValidPass = firstPass !== null & firstPass === secondPass
      let isValidUser = true
      for (const [key, value] of Object.entries(this.user)) {
        if (key !== 'pass' && value === null) isValidUser = false
      }
      return isValidPass && isValidUser
    }
  }
}
</script>>
