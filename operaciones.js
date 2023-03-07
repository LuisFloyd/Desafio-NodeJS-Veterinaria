const fs = require('fs')

const registrar = (nombre, edad, animal, color, enfermedad) => {
    const citas = fs.readFileSync('citas.json', 'utf8')
    const arrCitas = JSON.parse(citas)
    arrCitas.push({ nombre: nombre,
                             edad: edad,
                             animal: animal,
                             color: color,
                             enfermedad: enfermedad
                             })
    fs.writeFileSync('citas.json', JSON.stringify(arrCitas) )
    console.log('Se ha grabado la cita!')
}

const leer = () => {
    const citas = fs.readFileSync('citas.json', 'utf8')
    JSON.parse(citas).forEach(cita => {
        console.log(cita)
    })
}

module.exports = {registrar, leer}
