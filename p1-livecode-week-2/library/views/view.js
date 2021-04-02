class View{
    static read(data){
        console.log(data);
    }

    static ShowSuccessAdd(title, type){
        console.log('============');
        console.log('ADD-SUCCESS');
        console.log('============');
        console.log(`Success Adding ${type} "${title}"`);
    }

    static ShowSuccessDel(data){
        console.log('===============');
        console.log('DELETE-SUCCESS');
        console.log('===============');
        console.log(`Success deleting ${data[0].id} with Title: ${data[0].title}`);
    }

    static ShowFailedDell(){
        console.log('======');
        console.log('ERROR');
        console.log('======');
        console.log('Error : Delete - 404 - Not found');
    }

    static ShowSuccessEdit(data){
        console.log('==============');
        console.log('EDIT - SUCCESS');
        console.log('==============');
        console.log(`Success editing ${data[0].type} "${data[0].title}" with ${data[0].author.length} Author(s)`);
    }

    static showTable(arrData){
        console.log('=======');
        console.log('Fiction');
        console.log('=======');
        console.table(arrData[0]);
        console.log('=======');
        console.log('Non - Fiction');
        console.log('=======');
        console.table(arrData[1])
    }
}

module.exports = View