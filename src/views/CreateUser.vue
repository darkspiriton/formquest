<template>
  <form>

    <h1>Crear tu cuenta</h1>

    <fieldset>
      <!-- <legend>DATOS GENERALES</legend> -->
      <label for="name">Nombres y Apellidos:</label>
      <input type="text" v-model="user.name" name="user_name">

      <label for="age">Grado y Seccion:</label>
      <input type="text" v-model="user.grade" name="user_grade">

      <label for="age">Edad:</label>
      <input type="number" v-model="user.age" name="user_age">

      <label for="gender" >Sexo:</label>
      <select name="gender" v-model="user.gender">
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
      </select>

      <label for="procedencia">Lugar de procedencia:</label>
      <select name="procedencia" v-model="user.origen">
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="costa">Costa</option>
          <option value="sierra">Sierra</option>
          <option value="selva">Selva</option>
      </select>

      <label for="age">Nueva Contraseña:</label>
      <input type="password" v-model="passNew" name="user_pass_new">

      <label for="age">Confirmar Contraseña:</label>
      <input type="password" v-model="passNewRe" name="user_pass_re">
      <div v-if="hasError">Error</div>
    </fieldset>
    <button @click.prevent="createUser()">Crear Cuenta</button>
  </form>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      user: {
        name: null,
        age: null,
        grade: null,
        gender: null,
        origen: null,
        pass: null
      },
      passNew: null,
      passNewRe: null,
      hasError: false
    }
  },
  methods: {
    ...mapMutations(['SET_NEW_USER']),
    createUser () {
      const isValid = this.isValidPassword(this.user, this.passNew, this.passNewRe)
      if (isValid) {
        this.user.pass = this.passNew
        this.$store.commit('SET_NEW_USER', this.user)
        this.$router.push('/')
      } else {
        this.hasError = true
      }
    },
    isValidPassword (user, firstPass, secondPass) {
      return firstPass !== null & firstPass === secondPass
    }
  }
}
</script>>
