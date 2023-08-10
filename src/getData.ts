import { Books } from '@/types'
import data from './data.json'

export function getData(): Promise<Books> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const isError = false

      if (isError) {
        reject(new Error('Error fetching data'))
      } else {
        resolve(data)

      }
    }, 1000)
  })
}