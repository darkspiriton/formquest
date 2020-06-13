<template>
    <form>

    <h1>“Fortaleciendo mi conocimiento, prevengo la tuberculosis”</h1>

    <fieldset>
      <legend>DATOS GENERALES</legend>
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
    </fieldset>

    <fieldset>
      <legend><span class="number">A</span>Nivel de conocimiento conceptual de la tuberculosis:</legend>
      <ol>
        <div class="question-group" v-for="(question, index) in questionsA" :key="index">
          <li class="question-group-title">{{question.question}} </li>
          <ol>
            <div class="question-group-option" v-for="(alternative, key) in question.alternatives" :key="key">
              <li>
                <input type="radio" :name="question.question" @click="calculateA(question.id, alternative.value)">
                <label class="light">{{alternative.text}}</label><br>
              </li>
            </div>
          </ol>
        </div>
      </ol>
    </fieldset>

    <fieldset>
      <legend><span class="number">B</span>Nivel de conocimiento práctico de la tuberculosis:</legend>
      <ol start="21" >
        <div class="question-group" v-for="(question, index) in questionsB" :key="index">
          <li class="question-group-title">{{question.question}} </li>
          <ol>
            <div class="question-group-option" v-for="(alternative, key) in question.alternatives" :key="key">
              <li>
                <input type="radio" :name="question.question" @click="calculateB(question.id, alternative.value)">
                <label class="light">{{alternative.text}}</label><br>
              </li>
            </div>
          </ol>
        </div>
      </ol>
    </fieldset>

    <button @click.prevent="getResult()">Calificar</button>
  </form>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
export default {
  name: 'FormComponent',
  data () {
    return {
      result: {
        puntosA: [],
        puntosB: [],
        finalA: null,
        finalB: null,
        notaA: null,
        notaB: null
      },
      questionsA: [
        {
          id: 1,
          question: '¿Qué es la tuberculosis?',
          alternatives: [
            {
              text: 'Enfermedad alérgica que se produce por el cambio de clima.',
              value: 0
            },
            {
              text: 'Es un resfrió no contagioso.',
              value: 0
            },
            {
              text: 'Enfermedad contagiosa que ataca especialmente al hígado.',
              value: 0
            },
            {
              text: 'Enfermedad contagiosa que ataca especialmente a los pulmones.',
              value: 1
            }
          ]
        },
        {
          id: 2,
          question: '¿La tuberculosis es causado por un ... ?',
          alternatives: [
            {
              text: 'Virus.',
              value: 0
            },
            {
              text: 'Bacteria.',
              value: 1
            },
            {
              text: 'Hongo.',
              value: 0
            },
            {
              text: 'Fungí.',
              value: 0
            }
          ]
        },
        {
          id: 3,
          question: '¿El agente que origina la tuberculosis es llamada?',
          alternatives: [
            {
              text: 'Salmonella.',
              value: 0
            },
            {
              text: 'Mycobacterium.',
              value: 0
            },
            {
              text: 'Bacilo de koch.',
              value: 1
            },
            {
              text: 'Klebsiellapneumoniae.',
              value: 0
            }
          ]
        },
        {
          id: 4,
          question: '¿Cómo se trasmite la tuberculosis?',
          alternatives: [
            {
              text: 'Al abrazar y dar la mano al enfermo.',
              value: 0
            },
            {
              text: 'Por transfusión de sangre.',
              value: 0
            },
            {
              text: 'A través de gotitas de saliva al toser, estornudar o hablar.',
              value: 1
            },
            {
              text: 'Dando la mano a la persona infectada.',
              value: 0
            }
          ]
        },
        {
          id: 5,
          question: '¿Quiénes pueden enfermarse de la tuberculosis pulmonar?',
          alternatives: [
            {
              text: 'Personas que realizan actividad física.',
              value: 0
            },
            {
              text: 'Personas con una alimentación saludable.',
              value: 0
            },
            {
              text: 'Personas con un sistema inmune débil, que se encuentran en contacto. frecuente con una persona de TBC, frecuentes enfermedades respiratorias y que vivan en hacinamiento.',
              value: 1
            }
          ]
        },
        {
          id: 6,
          question: '¿Cuál es el síntoma principal de la tuberculosis?',
          alternatives: [
            {
              text: 'Tos y flema frecuente por más de 15 días.',
              value: 1
            },
            {
              text: 'Tos frecuente por las de 10 días.',
              value: 0
            },
            {
              text: 'Tos frecuente por más de 7.',
              value: 0
            }
          ]
        },
        {
          id: 7,
          question: '¿Cuáles serían otros síntomas de la tuberculosis?',
          alternatives: [
            {
              text: 'Incremento de la sed e irritabilidad.',
              value: 0
            },
            {
              text: 'Diarrea continua y dolor de estómago.',
              value: 0
            },
            {
              text: 'Debilidad, cansancio, sudores nocturnos, pérdida de peso, apetito y fiebre.',
              value: 1
            }
          ]
        },
        {
          id: 8,
          question: '¿Qué haría si presenta tos con flema por más de 15 días?',
          alternatives: [
            {
              text: 'Comprar medicamento de la farmacia más cercana.',
              value: 0
            },
            {
              text: 'Acudir al establecimiento de salud más cercano.',
              value: 1
            },
            {
              text: 'Descansar, abrigarse, alimentarse bien y luego ir a una clínica.',
              value: 0
            },
            {
              text: 'Consumir infusiones de hierbas medicinales contra la tos.',
              value: 0
            }
          ]
        },
        {
          id: 9,
          question: '¿Cómo se diagnostica la tuberculosis?',
          alternatives: [
            {
              text: 'Examen de sangre.',
              value: 0
            },
            {
              text: 'Examen de orina.',
              value: 0
            },
            {
              text: 'Examen de esputo o baciloscopia, radiografía de tórax, prueba cutánea de la tuberculina.',
              value: 1
            }
          ]
        },
        {
          id: 10,
          question: '¿La prueba de esputo tiene algún costo económico?',
          alternatives: [
            {
              text: 'Si, se paga.',
              value: 0
            },
            {
              text: 'No, es gratuito.',
              value: 1
            },
            {
              text: 'Ninguna es correcta.',
              value: 0
            }
          ]
        },
        {
          id: 11,
          question: '¿Dónde se consigue frascos para la prueba de esputo?',
          alternatives: [
            {
              text: 'En la Farmacia.',
              value: 0
            },
            {
              text: 'En la Tienda.',
              value: 0
            },
            {
              text: 'En el centro de salud o Puesto de Salud.',
              value: 1
            }
          ]
        },
        {
          id: 12,
          question: '¿Qué datos debe tener el frasco de la prueba de esputo?',
          alternatives: [
            {
              text: 'Nombre, apellido y la fecha en que se realiza la prueba.',
              value: 1
            },
            {
              text: 'Solo nombre.',
              value: 0
            },
            {
              text: 'Solo fecha.',
              value: 0
            }
          ]
        },
        {
          id: 13,
          question: '¿Cuántas muestras de esputo se debe entregar al centro de salud?',
          alternatives: [
            {
              text: 'Solo 1 muestra.',
              value: 0
            },
            {
              text: '2 muestras.',
              value: 1
            },
            {
              text: 'Ninguna es correcta.',
              value: 0
            }
          ]
        },
        {
          id: 14,
          question: '¿Cuáles son los factores de riesgo para desarrollar la tuberculosis?',
          alternatives: [
            {
              text: 'Falta de ventilación e iluminación dentro de las viviendas y aulas.',
              value: 0
            },
            {
              text: 'Alimentación inadecuada, desnutrición, defensas bajas.',
              value: 1
            },
            {
              text: 'a y b son correctas.',
              value: 0
            },
            {
              text: 'Ninguna es correcta.',
              value: 0
            }
          ]
        },
        {
          id: 15,
          question: '¿El tratamiento de la tuberculosis es?',
          alternatives: [
            {
              text: 'Gratuito.',
              value: 1
            },
            {
              text: 'Lo asume la familia.',
              value: 0
            },
            {
              text: 'Ninguna es correcta.',
              value: 0
            }
          ]
        },
        {
          id: 16,
          question: '¿Dónde se administra el tratamiento para la tuberculosis?',
          alternatives: [
            {
              text: 'En un policlínico.',
              value: 0
            },
            {
              text: 'En el hogar.',
              value: 0
            },
            {
              text: 'En el centro de salud de tu comunidad.',
              value: 1
            }
          ]
        },
        {
          id: 17,
          question: '¿Quién administra el tratamiento para la tuberculosis?',
          alternatives: [
            {
              text: 'Administrado por algún familiar en casa.',
              value: 0
            },
            {
              text: 'Administrado por el paciente en casa bajo indicación médica.',
              value: 0
            },
            {
              text: 'Administrado por un personal de salud bajo supervisión.',
              value: 1
            }
          ]
        },
        {
          id: 18,
          question: '¿El tratamiento puede interrumpirse cuando los síntomas desaparecen?',
          alternatives: [
            {
              text: 'Si, se puede interrumpir.',
              value: 0
            },
            {
              text: 'No, se debe interrumpir.',
              value: 1
            },
            {
              text: 'Ninguna es correcta.',
              value: 0
            }
          ]
        },
        {
          id: 19,
          question: '¿La enfermedad se cura tomando remedios naturales o caseros?',
          alternatives: [
            {
              text: 'Si, se cura.',
              value: 0
            },
            {
              text: 'No, se cura.',
              value: 1
            },
            {
              text: 'Ninguna es correcta.',
              value: 0
            }
          ]
        },
        {
          id: 20,
          question: '¿Cuáles son las complicaciones durante la enfermedad de la tuberculosis?',
          alternatives: [
            {
              text: 'Resistencia a los medicamentos.',
              value: 0
            },
            {
              text: 'Tuberculosis resistente.',
              value: 1
            },
            {
              text: 'Tuberculosis Extremadamente resistente.',
              value: 0
            }
          ]
        }
      ],
      questionsB: [
        {
          id: 1,
          question: '¿Se debe abrir las ventanas durante el día para que ingrese el aire y la luz del sol?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 2,
          question: '¿La cocina debe ubicarse en un lugar cercano a una ventana o puerta para liberar el humo fuera de la vivienda?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 3,
          question: '¿Se debe contar con recipientes adecuados para el manejo de residuos orgánicos e inorgánicos?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 4,
          question: '¿Los recipientes de residuos sólidos deben contener tapa?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 5,
          question: '¿El lavado de manos debe hacerse solo con agua?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 0
            },
            {
              text: 'Falso.',
              value: 1
            }
          ]
        },
        {
          id: 6,
          question: '¿El lavado de manos debe hacerse antes de manipular los alimentos?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 7,
          question: '¿El lavado de manos debe hacerse antes y después de atender a familiares enfermos en casa?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 8,
          question: '¿El lavado de manos debe hacerse después de usar los servicios higiénicos?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 9,
          question: '¿El lavado de manos debe hacerse después de manipular a los animales?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 10,
          question: '¿El lavado de manos debe hacerse después de tocar objetos o superficies contaminadas (Ej. residuos sólidos, dinero, pasamano de las unidades de transporte, etc.)?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 11,
          question: '¿Se debe consumir solo 2 comidas principales al día: almuerzo y cena?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 0
            },
            {
              text: 'Falso.',
              value: 1
            }
          ]
        },
        {
          id: 12,
          question: '¿Se debe consumir los grupos de alimentos: ¿Cereales carnes, verduras y grasas no saturadas?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 13,
          question: '¿Se debe consumir solo 1 fruta al día?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 0
            },
            {
              text: 'Falso.',
              value: 1
            }
          ]
        },
        {
          id: 14,
          question: '¿Se debe cubrir al momento de estornudar o toser?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 15,
          question: '¿Se debería llevar papel higiene en la mochila para cubrirse al toser o estornudar?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 16,
          question: '¿De no tener papel higiénico deberá cubrirse al toser o estornudar con la flexura del antebrazo?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 17,
          question: '¿El papel higiénico utilizado para estornudar o toser debe desecharse en el piso o dejarlo en cualquier lugar?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 0
            },
            {
              text: 'Falso.',
              value: 1
            }
          ]
        },
        {
          id: 18,
          question: '¿Se debe lavar la mano después de estornudar o toser?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 19,
          question: '¿Se debe realizar actividad física durante la semana?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        },
        {
          id: 20,
          question: '¿Se debe realizar como mínimo 1 hora de actividad física?',
          alternatives: [
            {
              text: 'Verdadero.',
              value: 1
            },
            {
              text: 'Falso.',
              value: 0
            }
          ]
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['GET_USER'])
  },
  methods: {
    ...mapMutations(['SET_RESULT_USER']),
    ...mapActions(['SAVE_RESULT']),
    calculateA (id, value) {
      this.result.puntosA[id] = value
    },
    calculateB (id, value) {
      this.result.puntosB[id] = value
    },
    isValidToEvaluate () {
      return this.result.puntosA.length === 21 && this.result.puntosB.length === 21
    },
    async getResult () {
      // const isValid = this.isValidToEvaluate()
      // if (!isValid) {
      //   window.swal('Preguntas Incompletas', 'Porfavor, responda todas las preguntas.', 'error')
      //   return
      // }
      let successA = 0
      this.result.puntosA.forEach(element => {
        successA = successA + element
      })

      let finalA
      switch (true) {
        case (successA < 7):
          finalA = 'Conocimiento Bajo'
          break
        case (successA < 15):
          finalA = 'Conocimiento Medio'
          break
        case (successA <= 20):
          finalA = 'Conocimiento Alto'
          break
      }
      const notaA = successA

      this.result.finalA = finalA
      this.result.notaA = notaA

      let successB = 0
      this.result.puntosB.forEach(element => {
        successB = successB + element
      })

      let finalB
      switch (true) {
        case (successB < 11):
          finalB = 'Practica Incorrecta'
          break
        case (successB <= 20):
          finalB = 'Practica Correcta'
          break
      }
      const notaB = successB

      this.result.finalB = finalB
      this.result.notaB = notaB

      this.$store.commit('SET_RESULT_USER', this.result)
      const save = {
        user: this.GET_USER.user,
        name: this.GET_USER.name,
        age: this.GET_USER.age,
        grade: this.GET_USER.grade,
        gender: this.GET_USER.gender,
        origen: this.GET_USER.origen,
        finalA: this.result.finalA,
        finalB: this.result.finalB,
        notaA: this.result.notaA,
        notaB: this.result.notaB
      }
      await this.$store.dispatch('SAVE_RESULT', save)
      this.$router.push('/result')
    }
  }

}
</script>
