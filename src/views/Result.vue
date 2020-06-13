<template>
  <div>
    <form>
      <h1>Resultado</h1>
      <fieldset>
      <label for="name">Nombres y Apellidos del estudiante:</label>
      <input type="text" v-model="GET_USER.name" name="user_name" disabled>

      <label for="age">Edad:</label>
      <input type="number" v-model="GET_USER.age" name="user_age" disabled>

      <label for="age">Grado y Sección:</label>
      <input type="text" v-model="GET_USER.grade" name="user_grade" disabled>

      <label for="gender" >Sexo:</label>
      <select name="gender" v-model="GET_USER.gender" disabled>
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="masculino">Masculino</option>
          <option value="femenino">Femenino</option>
      </select>

      <label for="procedencia">Lugar de procedencia:</label>
      <select name="procedencia" v-model="GET_USER.origen" disabled>
          <option value="" disabled selected hidden>Selecciona tu opcion</option>
          <option value="costa">Costa</option>
          <option value="sierra">Sierra</option>
          <option value="selva">Selva</option>
      </select>

      <div class="group_result">
        <label for="age">Resultado de conocimiento conceptual de la tuberculosis:</label>
        <div class="result" :class="getClassNotaA()">
          {{GET_USER_RESULT.finalA}} - {{GET_USER_RESULT.notaA}} puntos
        </div>

        <label for="age">Resultado de conocimiento practico de la tuberculosis:</label>
        <div class="result" :class="getClassNotaB()">
          {{GET_USER_RESULT.finalB}} - {{GET_USER_RESULT.notaB}} puntos
        </div>
      </div>

    </fieldset>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.group_result {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  label {
    font-size: 20px;
  }
  .result {
    background: green;
    min-height: 60px;
    font-size: 25px;
    border-radius: 5px;
    align-items: center;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 400px;
    margin-bottom: 30px;
    &.yellow {
      background: green;
      color: #384047;
    }
    &.yellow {
      background: yellow;
      color: #384047;
    }
    &.red {
      background: red;
    }
  }
}
</style>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['GET_USER_RESULT', 'GET_USER'])
  },
  methods: {
    getClassNotaA () {
      switch (true) {
        case (this.GET_USER_RESULT.notaA < 7):
          return 'red'
        case (this.GET_USER_RESULT.notaA < 15):
          return 'yellow'
        case (this.GET_USER_RESULT.notaA <= 20):
          return 'green'
      }
    },
    getClassNotaB () {
      switch (true) {
        case (this.GET_USER_RESULT.notaB < 11):
          return 'red'
        case (this.GET_USER_RESULT.notaB <= 20):
          return 'green'
      }
    }
  }
}
</script>>
