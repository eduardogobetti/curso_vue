new Vue({
  el: "#desafio",
  data: {
      nome: 'Eduardo',
      idade: 39,
      imagem: "https://dublagembrasileira.com.br/wp-content/uploads/2022/07/pepelegal.jpg"
  },
  methods: {
      maestro_zezinho_uma_nota() {
          return Math.random()
      }
  }
})