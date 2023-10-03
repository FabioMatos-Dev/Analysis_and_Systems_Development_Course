<script language="javascript">
        function myFunction(){
            let nDigitados, nNegativos, cont;
            nDigitados = 0;
            nNegativos = 0;
            cont = 0;

            let nDigitados = document.getElementById("Digite um número: ").nDigitados;
            if(nDigitados < 0){
                nNegativos++
            }
            cont++
           }while(cont<5)
           document.getElementById("exe").innerHTML= "O total de números digitados é: " + nNegativos;
</script>
