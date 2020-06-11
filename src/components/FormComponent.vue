<template>
    <form action="index.html" method="post">

    <h1>“Fortaleciendo mi conocimiento, prevengo la tuberculosis”</h1>

    <fieldset>
      <legend>DATOS GENERALES</legend>
      <label for="name">Nombres y Apellidos del estudiante:</label>
      <input type="text" id="name" name="user_name">

      <label for="mail">Edad:</label>
      <input type="email" id="mail" name="user_email">

      <label for="job">Sexo:</label>
      <select id="job" name="user_job">
          <option value="php_developor">Seleccionar</option>
          <option value="frontend_developer">Masculino</option>
          <option value="php_developor">Femenino</option>
      </select>

      <label for="job">Lugar de procedencia:</label>
      <select id="job" name="user_job">
          <option value="php_developor">Seleccionar</option>
          <option value="frontend_developer">Costa</option>
          <option value="php_developor">Sierra</option>
          <option value="php_developor">Selva</option>
      </select>
    </fieldset>

    <fieldset>
      <legend><span class="number">A</span>Nivel de conocimiento conceptual de la tuberculosis</legend>

      <div>
        <label>1. ¿Qué es la tuberculosis?</label>
        <input type="radio" id="under_13" value="1a" name="user_age"><label for="under_13" class="light">Enfermedad alérgica que se produce por el cambio de clima</label><br>
        <input type="radio" id="over_13" value="1b" name="user_age"><label for="over_13" class="light">Es un resfrió no contagioso</label><br>
        <input type="radio" id="over_13" value="1c" name="user_age"><label for="over_13" class="light">Enfermedad contagiosa que ataca especialmente al hígado</label><br>
        <input type="radio" id="over_13" value="1d" name="user_age"><label for="over_13" class="light">Enfermedad contagiosa que ataca especialmente a los pulmones</label><br>
      </div>

    </fieldset>

    <fieldset>
      <legend><span class="number">B</span>Nivel de conocimiento práctico de la tuberculosis:</legend>

      <div>
        <label>21. ¿Se debe abrir las ventanas durante el día para que ingrese el aire y la luz del sol?</label>
        <input type="radio" id="under_13" value="1a" name="user_age"><label for="under_13" class="light">Verdadero</label><br>
        <input type="radio" id="over_13" value="1b" name="user_age"><label for="over_13" class="light">Falso</label><br>
      </div>

    </fieldset>

    <button type="submit">Calificar</button>
  </form>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
