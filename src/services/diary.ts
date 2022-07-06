import { DiaryEntry } from '../types'
import diaryData from './diary.json'

const diary: DiaryEntry[] = diaryData as unknown as DiaryEntry[]

export const getAllEntries = (): DiaryEntry[] => diary

export const addEntry = (): undefined => undefined
