import express from 'express'
import * as diaryServices from '../services/diary'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryServices.getAllEntries())
})

router.post('/', (_req, res) => {
  res.send('Making an new entry')
})

export default router
