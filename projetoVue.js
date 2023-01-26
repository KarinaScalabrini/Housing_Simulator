
const createApp = new Vue ({
    el:'#app',
    data:{
        parcela: 0,
        aplicarCor:false,
        corLight: 'btn-primary',
        formulario: true,
        parcelasFor: ['12x R$', '24x R$', '36x R$', '48x R$', '60x R$', '72x R$' ],
        verificarList: false,
        valorImovel:0,
        valorEntrada:0,
        total: '',
        
    },
    //  computed existe um cachê que apenas irá reexecutar a função caso alguma dependência seja 
    //alterada(o valor de uma variável por exemplo), caso nada tenha sido alterado, ele não precisa executar a função novamente, pois já tem no cache o resultado
    computed:{
        resultado(){
             this.total = (this.valorImovel - this.valorEntrada) / this.parcela 
             console.log(this.parcela, this.total)
             
            return this.parcela  <= 0 ? '': `${this.parcela}x  ${this.total}`
            
            

        },
        //alterando cores com :class , funciona como toggleClass
        estilo(){
            return{
                corDark: !this.aplicarCor,
                corLight: this.aplicarCor
            }
        }
        
    },
    watch:{
        parcela(novo, antigo){
            if(this.parcela >= 72){
                this.parcela = 72
            }if (this.parcela <= 0){
                this.parcela = 0
            }
        }
    },
    methods: {
        aumentar(){
            this.parcela = this.parcela + 12
        },
        diminuir(){
            this.parcela = this.parcela - 12
        }
    },
})
    