var mongoose = require('mongoose');
mongoose.connect('mongodb+srv://daolang:qq111111@daolang-ndyib.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true } );

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('ok')
});


const bookschema = mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    }
})

const book = mongoose.model('book',bookschema)

book.create({
    title:'abc',
    author:233,
},(err,doc) => {
    console.log(err ? err : doc)
})

/*
let a = book.findOne({})

a.select('title')

a.exec((err,doc) => {
    console.log(doc)
})
*/


