import express from 'express'
import diaryRoutes from './routes/diary'

const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping', (_req, res) => {
  console.log('someone pinged here')
  res.send('pong')
})

app.use('/api/diary', diaryRoutes)

app.listen(PORT, () => {
  console.log('App is running on PORT 3000')
})
