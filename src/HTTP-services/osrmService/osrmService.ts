import { type ResponseRoutesProps } from '../../types'
import { instance } from '../instanse/instanse'

export const osrmService = {
  async getRoutes (urlCoordinates: string) {
    return await instance.get<ResponseRoutesProps>(`${urlCoordinates}?overview=full&geometries=geojson`)
  }
}
