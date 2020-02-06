(function(){
    var actualizarHora = function(){
        /*Variables necesario en la logica*/
        var fecha = new Date;
        var horas = fecha.getHours();
        var ampm;
        var minutos = fecha.getMinutes();
        var segundos = fecha.getSeconds();
        var diaSemana = fecha.getDay(); /*getDay se para traer del 0 - 6 por dia de semana */ 
        var dia = fecha.getDate();/* se utiliza para traer el dia en numero*/
        var mes = fecha.getMonth();
        var year = fecha.getFullYear();

        /*Incializando variables que instancian objetos del index*/

        var pHoras = document.getElementById('horas');
        var pAMPM = document.getElementById('ampm');
        var pMinutos = document.getElementById('minutos');
        var pSegundos = document.getElementById('segundos');
        var pDiaSemana = document.getElementById('diaSemana');
        var pDia = document.getElementById('dia');
        var pMes = document.getElementById('mes');
        var pYeat = document.getElementById('year');

        /*Declarando variables adicionalies*/
        var semana = ['Domingo','Lunes','Martes','Miercoles','Jueves','Viernes','Sabado'];
        var meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Setiembre','Octubre','Noviembre','Diciembre',];
        /*Asignando valores a las variables del dashboard*/
        pDiaSemana.textContent = semana[diaSemana];
        pDia.textContent = dia;
        pMes.textContent = meses[mes];
        pYeat.textContent = year;

        /*Haciendo logica del reloj*/

        if(horas >= 12){
            horas = horas - 12;
            ampm = 'PM';
        }else{
            ampm = 'AM'
        };

        if(horas == 0){
            horas = 12;
        };
        pHoras.textContent = horas;
        pAMPM.textContent = ampm;

        if(minutos < 10){
            minutos = "0" + minutos;
        };

        if(segundos < 10){
            segundos = "0" + segundos;
        };

        pMinutos.textContent = minutos;
        pSegundos.textContent = segundos;
    };

    actualizarHora();
    /*Esta variable se inicializa para tener un intervalo*/
    var intervalo = setInterval(actualizarHora, 1000);
}())