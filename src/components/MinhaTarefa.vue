<template>
  <div>
    <v-list-item :class="{'blue lighten-4': tarefa.finalizada}" @click="tarefa.finalizada = !tarefa.finalizada; atualizaPai()">
        <template v-slot:default="{ }">
        <v-list-item-action>
            <v-checkbox
            :input-value="tarefa.finalizada"
            color="primary"
            ></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
            <v-list-item-title :class="{'text-decoration-line-through': tarefa.finalizada}">{{ tarefa.titulo }}</v-list-item-title>
        </v-list-item-content>

        <v-list-item-action>
          <v-btn icon @click.stop="removeWork(tarefa.id)"><v-icon color="red lighten-1">mdi-trash-can</v-icon></v-btn>
        </v-list-item-action>
        
        </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: {
    work: {
      type: Object,
      required: true
    }
  },
  methods: {
    atualizaPai() {
      this.$emit('interface', this.tarefa) // emitimos um evento que altera o dado no componente pai baseado no componente filho alterado
    },
    removeWork(id) {
      this.$store.commit('removeWork', id)
    }
  },
  data: () => ({
    tarefa: null
  }),
  beforeMount() {
    this.tarefa = this.work; // basicamente depois que o componente filho é montado
    // passamos o dado do props para um dado local do filho para manipularmos no 
    // componente filho
  },
}
</script>

<style>

</style>