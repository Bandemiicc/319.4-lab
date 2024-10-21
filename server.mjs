// imports 
import express from 'express'
import dotenv from 'dotenv'
import bodyParser from 'body-parser'
import gradesRoutes from '../lecture2/routes/gradesRoutes.mjs'

const app =express()
dotenv.config()
let PORT = process.env.PORT || 3001


// middlware
app.use(bodyParser.urlencoded({ extended: true}))
app.use(bodyParser.json({extended: true}))

//routes
app.use('/grades', gradesRoutes)

//listener
app.listen(PORT, ()=>{
    console.log(`Server is running on port: ${PORT}`)
    })