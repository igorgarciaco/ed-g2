const fs = require('fs')
const http = require('http')
const server = http.createServer()

server.listen(3000)

nameTeste = 'Henrique Juliana'


server.on('request', function (request, response){
    const randomName = nameTeste

    response.write('Name: ' + nameTeste)
    response.end()
})

fs.writeFile("..\\trabalho-g2\\teste.txt",''+nameTeste, function() {

    // if(erro) {
    //     throw erro;
    // }

    console.log("Arquivo salvo.")
})

console.log('Server bombando...')