const Controller = require('./controllers/controller')
const comand = process.argv[2]
const input = process.argv.slice(3)
const input1 = process.argv.slice(4)


if(comand === 'show'){
    Controller.showList()
}else if(comand === 'add'){
    Controller.add(input)
}else if (comand === 'delete'){
    Controller.deleteById(input)
}else if(comand === 'editAuthor'){
    Controller.editAuthor(input, input1)
}else if(comand === 'showTable'){
    Controller.showTable()
}