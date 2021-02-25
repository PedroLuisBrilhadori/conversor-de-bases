var KEY_ENTER = 13;
var SHIFT_QKEY = 47; 
var numero 
var resto
var base 
var NumeroFinal = new Array()
var string = ''
var numeroINICIAL = numero
var expoente

function Converter(){

    numeroINICIAL = numero
    if (base >16){
        console.log('A base é maior que o permitido!')

    }if  (base > 10 & base <= 16){
        for(numero = numero; numero >= 1;){
            resto = numero % base
            numero = Math.floor(numero / base)
            
            if (resto == 10){
                resto = "A"
            } if (resto == 11){
                resto = "B"
            } if (resto == 12){
                resto = "C"
            } if  (resto == 13){
                resto = "D"
            } if (resto == 14){
                resto = "E"
            } if (resto == 15){
                resto = "F"
            } else {
                resto = resto
            }
            NumeroFinal.push(resto)    
        }         
        NumeroFinal.reverse()
        
        for (let i = 0; i < NumeroFinal.length; i++){
                string += NumeroFinal[i]
        }

    } if (base < 10 && base >= 2){

        for (numero = numero ; numero >= 1 ;){
            resto = numero % base
            numero = Math.floor(numero / base)
            NumeroFinal.push(resto)
        }
        NumeroFinal.reverse()
        
        for (let i = 0; i < NumeroFinal.length; i++){
            string += NumeroFinal[i]
        }
    } 
}

indicador = 0

function BotaoConverter(){
    
    return PegaValor();
    
    function PegaValor(){
        numero = document.getElementById('NUMERO').value
        base = document.getElementById('BASE').value
        numeroINICIAL = numero 
    
        if (base <= 0 | numero <= 0){
            alert("Algo deu errado!")
        } else{
            Converter();
            MostraValor();
           ApagaValores();
        }
    }

    function MostraValor(){
        if(base <= 16){
            var texto = document.createElement('div')
            let historico = document.createElement('h2')
            texto.textContent = `O numero "${numeroINICIAL}" na base "${base}" fica: ${string}`;
            texto.id = 'textoDivStr'
            indicador +=1
    
            if (indicador == 1){
                historico.textContent = 'Historico: '
                textDiv.appendChild(historico)
            } else {
                console.log('o historico já ta ai')
            }
            textDiv.appendChild(texto)
        } else{
            alert('A base é maior que o permitido! (16)')
        }
    }
    
    function ApagaValores(){
        numero = undefined
        base = undefined
        string = ''
        resto = undefined
        NumeroFinal = []
        numeroINICIAL = undefined
    }
}

function LimpaHistorico() { 
    // let node = document.getElementById('textoDivStr')
    // if (node.parentNode){
    //     console.log(node.parentNode)
    //     node.parentNode.removeChild(node)
        
    // }
    document.location.reload();
}

function press(key){
        if (key == KEY_ENTER){
            BotaoConverter();
        } if (key == SHIFT_QKEY){
            LimpaHistorico();
        }
        // alert(key)
}