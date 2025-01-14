import express from 'express'
import { PrismaClient } from '@prisma/client'



function SomaNumeros(){
    console.log (3+8)
}


const prisma = new PrismaClient()

const app = express()
app.use(express.json())

const listUsers = []

app.post('/user',async (req,res)=> {
    SomaNumeros();
    await prisma.user.create({
        data: {
          name:  req.body.nome ,
          email: req.body.email,
          age: req.body.idade
          }
      })
        
    listUsers.push(req.body)
    res.status(201).json('Cadastrado com sucesso!!!') 

})

app.get('/users',async(req,res)=> {

    const allUsers = await prisma.user.findMany()
    res.status(200).json(allUsers)
})


app.put('/user/:id',async (req,res)=> {

    await prisma.user.update({
        where:{
            id: req.params.id
        },
        data: {
          name:  req.body.nome,
          age: req.body.idade, 
          email: req.body.email
          }
      })
      
      res.status(201).json(req.body)
})

app.delete('/user/:id',async (req,res)=> {

    await prisma.user.delete({
        where:{
            id: req.params.id
        },
      })
      
      res.status(201).json('Deletado com sucesso!!!')
})

app.listen(3000)

/*
Senha do banco mongodb na cloud do Atlas

usuario - app_user_owner
senha: jzaSOuyJQnt3wnAL
*/