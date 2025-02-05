async function cargarCSV () {
    try{
        const respuesta = await fetch("csv/datos.csv"); //cargar el archivo csv
        const texto =await respuesta.text() //leer el contenido como texto

        const lineas = texto.split("\n"); //dividir el contenido por lineas 
        const encabezados = lineas [0].split(",") //obtener los encabezados (primera linea) 
        const cuerpo=lineas.slice(1) //obtener las filas de datos

        const tbody = document.querySelector('#tabla')
        //recorrer cada linea de datos
        cuerpo.forEach((linea)=>{
            const columnas = linea.split(",")  //dividir las columnar por coma
            //verificar que la linea tenga el numero correcto de columnas
            if(columnas.length=== encabezados.length){
                const fila= document.createElement('tr')

                //crear celdas para cada columna
                columnas.forEach((dato)=>{
                const celda= document.createElement('td')
                celda.textContent= dato.trim()
                fila.appendChild(celda)
                })
            tbody.appendChild(fila) //añair la fila al cuerpo de la tabla

            }
        })
        
    } catch(error){
        console.error("Error al cargar el archivo CSV: ", error); 
    }
}
//llamar a la fincion para cargar el CSV
cargarCSV()