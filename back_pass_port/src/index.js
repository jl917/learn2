import express from 'express'
import passport from 'passport'
import {Strategy} from 'passport-local'
import bodyParser from 'body-parser'
import session from 'express-session'
import ejs from 'ejs'

const app = express()

const _id = "dao"
const _pw = "123"

app.set('views', './src/views');
app.set('view engine', 'ejs');

passport.use(new Strategy(
  function(username, password, done) {
    console.log(username)
    console.log(password)
    return done(null,{id:username,pw:password})
  }
));
passport.serializeUser(function (user, done) {//保存user对象
  done(null, user.id);//可以通过数据库方式操作
});

passport.deserializeUser(function (id, done) {//删除user对象
  done(null, {id:id,_id,_pw});//可以通过数据库方式操作
});


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(passport.initialize())
// app.use(passport.session())



app.use(session({
  secret: 'this_reac',
  resave: false,
  rolling: true,
  saveUninitialized: true,
  cookie: {
    maxAge: 1000 * 60 * 60, // 섹션 유효시간
  },
}))


app.use((req, res, next) => {
  next();
})


app.get('/', (req, res) => {
  res.render('index', { title: 'exp' })
})

app.get('/mypage', (req, res) => {
  if(req.session.userid){
    return res.render('mypage', {
      name: req.session.userid
    })
  }

  return res.redirect('/')
})


app.post('/login',passport.authenticate('local',{successRedirect: '/users',failureRedirect: '/'}), (req, res) => {

  res.send('123')
  // const { id, pw } = req.body;
  // if (id === _id && pw === _pw) {
  //   req.session.userid = id
  //   return res.redirect('/mypage')
  // }

  // return res.send('id or pw error relogin')
})

app.listen(8080, () => console.log(123))