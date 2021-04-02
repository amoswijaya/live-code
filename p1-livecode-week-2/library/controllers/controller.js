const Model = require('../models/model')
const View = require('../views/view')

class Controller{
    static showList(){
        let data = Model.list()
        View.read(data)
    }

    static showTable(){
        let data = Model.table()
        View.showTable(data)
    }

    static add(arrData){
        Model.addBook(arrData[0], arrData[1], arrData[2], arrData[3], arrData[4], arrData[5])
        View.ShowSuccessAdd(arrData[1], arrData[2])

    }

    static deleteById(id){
        let data = Model.del(id)
        if(data.length === 0){
            View.ShowFailedDell()
        }else{
            View.ShowSuccessDel(data)
        }
    }

    static editAuthor(id,arrData){
        let result = Model.edit(id,arrData)
        if(result[0] === 'error'){
            View.ShowFailedDell()
        }else{
            View.ShowSuccessEdit(result)
        }

        
    }
}

module.exports = Controller