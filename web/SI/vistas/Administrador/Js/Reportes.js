$(document).ready(function () {
    datosReporte1();
    datosReporte2();
    datosReporte3();


});
//seccion de codigo para capturar la fecha del dia en curso
var d = new Date();

var month = d.getMonth() + 1;
var day = d.getDate();
var output = (('' + day).length < 2 ? '0' : '') + day + '/' + (('' + month).length < 2 ? '0' : '') + month + '/' + d.getFullYear();
//function para crear el reporte de ventas por mes
var datosReporte1 = function () {
    var data = "";
    $.ajax({
        method: "POST",
        url: "../../processVenta?action=reportVentasMes",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {
                var objeto = {name: field.mes, y: parseInt(field.ventasMes)};
                options.series[0].data.push(objeto);               
            });
            chart = new Highcharts.Chart(options);            
        }
    });
}

//funcion para crear el reporte de cantidad de producto vendido por tipo de telaje mes a mes
var datosReporte2 = function () {
    var data = "";
   
    $.ajax({
        method: "POST",
        url: "../../processVenta?action=Reporte2",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {              
                var objeto = {name: field.telaje, data: field.ventasMes.split(',').map(Number)};
                options1.series.push(objeto);
            });
             chart1 = new Highcharts.Chart(options1);
        }
    });
}
var datosReporte3 = function () {
    var data = "";
   
    $.ajax({
        method: "POST",
        url: "../../processVenta?action=Reporte3",
        data: data,
        dataSrc: "datos",
        dataType: "json",
        success: function (data) {
            $.each(data.datos, function (i, field) {              
                var objeto = {name: field.telaje, data: field.ventasMes.split(',').map(Number)};
                options2.series.push(objeto);
            });
             chart2 = new Highcharts.Chart(options2);
        }
    });
}



var options = {

    chart: {

        events: {
            load: function (event) {
                this.renderer.image('https://raw.githubusercontent.com/Christiam23/sycomt3Java/master/web/SI/img/LogoSycomt3FondoBlanco.png', 50, 30, 140, 70).add();

            }
        },
        // Edit chart spacing
        spacingBottom: 15,
        spacingTop: 150,
        spacingLeft: 10,
        spacingRight: 10,
        fontSize: 200,

        // Explicitly tell the width and height of a chart
        width: null,
        height: null,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie',
        renderTo: 'container',
        type: 'pie',
        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    exporting: {
        scale: 0
    },
    title: {
        text: '<strong>Ventas Por Mes</strong><br><div></div>'+ output + ''
    },
    subtitle: {
        text: '<h3 style="font-size: 15px;color:black;margin-top:25px;">El siguiente gráfico muestra la cantidad de ventas realizadas mes a mes permitiendo ver de manera ágil y rápida el mes con más ventas hasta la fecha</h3>'
    },
    tooltip: {
        pointFormat: '{series.name}: <b>{point.y}</b>'
    },
    plotOptions: {
        pie: {
            allowPointSelect: true,
            cursor: 'pointer',
            dataLabels: {
                enabled: true,
                format: '<b style="font-size:15px;">{point.name}</b>: {point.y} '
            },
            showInLegend: true
        }
    },
    legend: {
        itemStyle: {fontSize: '15px'}
    },
    series: [{
            name: 'Ventas',
            colorByPoint: true,

            data: []
        }]

}
var options1 = {

    chart: {
        events: {
            load: function (event) {
                this.renderer.image('https://raw.githubusercontent.com/Christiam23/sycomt3Java/master/web/SI/img/LogoSycomt3FondoBlanco.png', 50, 30, 140, 70).add();

            }
        },
        // Edit chart spacing
        spacingBottom: 15,
        spacingTop: 150,
        spacingLeft: 10,
        spacingRight: 10,
        fontSize: 200,

        // Explicitly tell the width and height of a chart
        width: null,
        height: null,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'column',
        renderTo: 'container1',

        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    exporting: {
        scale: 0
    },
    title: {
        text: '<strong>Cantidad De Producto En Metros Vendidos<br>' + output + '</strong>'
    },
    subtitle: {
        text: '<h4 style="color:black;font-size:15px;">En este reporte se evidencia cantidad de producto en metros  por tipo de telaje vendidos mes a mes</h4>'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ],
        crosshair: true
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Metros Vendidos'
        }
    },
    tooltip: {
        headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
        pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y} mt</b></td></tr>',
        footerFormat: '</table>',
        shared: true,
        useHTML: true
    },
    plotOptions: {
        column: {
            pointPadding: 0.2,
            borderWidth: 0
        }
    },
    series: []

}

var options2 ={
    chart: {
        events: {
            load: function (event) {
                this.renderer.image('https://raw.githubusercontent.com/Christiam23/sycomt3Java/master/web/SI/img/LogoSycomt3FondoBlanco.png', 50, 30, 140, 70).add();

            }
        },
        // Edit chart spacing
        spacingBottom: 15,
        spacingTop: 150,
        spacingLeft: 10,
        spacingRight: 10,
        fontSize: 200,

        // Explicitly tell the width and height of a chart
        width: null,
        height: null,
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'areaspline',
        renderTo: 'container2',

        options3d: {
            enabled: true,
            alpha: 45
        }
    },
    exporting: {
        scale: 0
    },
    title: {
        text: '<strong>Cantidad De Ventas Por Tipo De Producto<br>' + output + '</strong>'
    },
    subtitle: {
        text: '<h4 style="color:black;font-size:15px;">En este reporte se evidencia el numero de ventas totales mes a mes por cada tipo de tela registrada</h4>'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 150,
        y: 100,
        floating: true,
        borderWidth: 1,
        backgroundColor:
            Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF'
    },
    xAxis: {
        categories: [
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
            'Sep',
            'Oct',
            'Nov',
            'Dec'
        ]
        
    },
    yAxis: {
        title: {
            text: 'Cant. Ventas'
        }
    },
    tooltip: {
        shared: true,
        valueSuffix: ' Ventas'
    },
    credits: {
        enabled: false
    },
    plotOptions: {
        areaspline: {
            fillOpacity: 0.5
        }
    },
    series: []
}




