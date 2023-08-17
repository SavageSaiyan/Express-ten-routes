const express = require('express')

const app = express();
const port = 3000;

app.get('/', (req, res)=>{
    res.send(`Anime`)
})

app.get('/FMAB', (req, res)=>{
    res.send(`World's favorite anime`)
})

app.get('/DBZ', (req, res)=>{
    res.send(`But Can they beat Goku?`)
})

app.get('/OnePiece', (req, res)=>{
    res.send(`Im gonna be King of The Pirates`)
})

app.get('/Bleach', (req, res)=>{
    res.send(`IchiGoat is cool`)
})

app.get('/JJK', (req, res)=>{
    res.send(`All the girls love Gojo`)
})

app.get('/DemonSlayer', (req, res)=>{
    res.send(`Animation Carries but im okay with that! `)
})

app.get('/HajimeNoIppo', (req, res)=>{
    res.send('Goat OG Boxing anime')
})

app.get('/AttackOnTitan', (req, res)=>{
    res.send(`YAMEROOOOOO`)
})

app.get('/Inuyasha', (req, res)=>{
    res.send(`Sesshomaru is Him`)
})

app.get('DrStone', (req, res)=>{
    res.send(`O hai yo sekai Good morning Wooorrlld!!`)
})




app.listen(port,(req, res)=>{
   console.log(`listening on port ${port}`)
})