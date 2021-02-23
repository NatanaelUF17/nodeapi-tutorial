const app = require('./app')

const puerto = 1337;

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto http://localhost:${puerto}`)
})
