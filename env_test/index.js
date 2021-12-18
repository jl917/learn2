require('dotenv').config({path: function(){
    let {HOME,NODE_ENV,MODE} = process.env
    let isLocal = NODE_ENV=='devlopment'
    if(isLocal){
        return `${HOME}/env/blockey_web/.env.local`
    }else{
        return `${HOME}/.env.${MODE}`
    }
}()})
console.log(process.env)