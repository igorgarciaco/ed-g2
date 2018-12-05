const fs = require('fs')
const http = require('http')
const server = http.createServer()
const lineReader = require('line-reader');

const file = '..\\trabalho-g2\\teste-v2.txt'
const ids = '..\\trabalho-g2\\ids.txt'

server.listen(3000)

nameTeste = 'Vini'



server.on('request', function (request, response) {
    const randomName = nameTeste

    response.write('Name: ' + nameTeste)
    response.end()
})

// abre arquivo nomes
fs.open(file, 'a', function (err, fd) {
    if (err) {
        if (err.code === 'EEXIST') {
            console.error('Já tem')
            return
        }

        throw err
    }
    // console.log(fd)
    lineAdd(idAdd(),fd)

})

//abre arquivo IDs

function idAdd() {
    id = 0 
    fileIn = '';
    fs.open(ids, 'a', function (err, fd) {
        if (err) {
            if (err.code === 'EEXIST') {
                console.error('Já existe')
                return
            }
            throw err
        }
        // console.log(id)
        // fd = fd.split('\n')
        lineReader.eachLine(ids, function (line, last, cb) {

            // cb()
            fileIn = line
            // console.log(line)
        })
        // fileIn = fileIn
        id = parseInt(fileIn[fileIn.lenght])+1
        // console.log(fileIn)
        // console.log(id)

        fs.writeFile(ids, `1;`, { flag: 'a+' }, function (err) {


        })

    })

    return id

}

function lineAdd(id,line) {
    fs.writeFile(file, `${id} ${nameTeste} \n`, { flag: 'a+' }, function (err) {
        // if(err) {
        //         throw err;
        //     }
        console.log("Arquivo Atualizado.")
    })



}


lineReader.eachLine(file, function (line, last, cb) {
    // console.log(line)

    cb()

})

// fs.rename('..\\trabalho-g2\\teste-v2.txt', '..\\trabalho-g2\\G2Node.txt', (err) => {
//     if (err) throw err;
//     console.log('renamed complete');
//   });


console.log('Server bombando...')