<template>
  <div>
    <form>
      <h1>Resultado</h1>
      <fieldset>
      <legend>DATOS GENERALES</legend>
      <label for="name">Nombres y Apellidos del estudiante:</label>
      <input type="text" v-model="GET_USER_RESULT.name" name="user_name" disabled>

      <label for="age">Edad:</label>
      <input type="number" v-model="GET_USER_RESULT.age" name="user_age" disabled>

      <label for="gender" >Sexo:</label>
      <select name="gender" v-model="GET_USER_RESULT.gender" disabled>
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
      </select>

      <label for="procedencia">Lugar de procedencia:</label>
      <select name="procedencia" v-model="GET_USER_RESULT.origen" disabled>
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="costa">Costa</option>
          <option value="sierra">Sierra</option>
          <option value="selva">Selva</option>
      </select>

      <label for="age">Resultado de conocimiento conceptual de la tuberculosis:</label>
      <input type="text" v-model="GET_USER_RESULT.finalA" name="user_finalA" disabled>

      <label for="age">Resultado de conocimiento practico de la tuberculosis:</label>
      <input type="text" v-model="GET_USER_RESULT.finalB" name="user_finalB" disabled>
    </fieldset>
    </form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['GET_USER_RESULT'])
  }
}
</script>>
