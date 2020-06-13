<template>
  <form>
      <h1>“Fortaleciendo mi conocimiento, prevengo la tuberculosis”</h1>
      <fieldset class="intro">
        <p>Estudiantes del Colegio Ramiro Priale Priale, le solicitamos de su participación ante este proyecto de tesis para saber cuánto conocen sobre la tuberculosis pulmonar y la medida preventiva que tienen ante ello, los resultados que se obtengan será de mucha ayuda para enfatizar ante este tema. Les pido sinceridad en sus respuestas, le agradecemos su participación.</p>
      </fieldset>
      <div class="video">
        <iframe width="560" height="315" src="https://www.youtube.com/embed/RaSJUcv78Yk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <button @click.prevent="getForm()">Ingresar a Cuestionario</button>
    </form>
</template>

<script>
export default {
  methods: {
    getForm () {
      this.$router.push('/form')
    }
  }
}
</script>>

<style lang="scss" scopped>
.intro {
  p {
    text-align: center;
    font-size: 20px;;
  }
}
.video {
  margin-bottom: 50px;
  display: flex;
  justify-content: center;
}
</style>
