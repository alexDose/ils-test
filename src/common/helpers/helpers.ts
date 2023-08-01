import { useMap } from 'react-leaflet'

interface Props {
  coordinates: [number, number]
}

export const CenterRoute = ({ coordinates }: Props) => {
  const map = useMap()
  map.setView(coordinates, 13)
  return null
}

export const reverseCoordinates = (coordinates: Array<[number, number]>): Array<[number, number]> => {
  return coordinates.map((coord) => [coord[1], coord[0]])
}

export const addCoordinatesUrl = (coordinates: Array<[number, number]>) => {
  const coordinate = reverseCoordinates(coordinates)
  const coordinatesUrl: string[] = []
  coordinate.forEach(el => coordinatesUrl.push(el.join(',')))

  return coordinatesUrl.join(';')
}

export const MapCenter = (coordinates: Array<[number, number]>): [number, number] => {
  if (coordinates.length === 0) {
    return [59.9386, 30.3141]
  }
  const latitudes = coordinates.map(point => point[0])
  const longitudes = coordinates.map(point => point[1])
  const minLatitudes = Math.min(...latitudes)
  const maxLatitudes = Math.max(...latitudes)
  const minLongitudes = Math.min(...longitudes)
  const maxLongitudes = Math.max(...longitudes)
  const centerLatitudes = (minLatitudes + maxLatitudes) / 2
  const centerLongitudes = (minLongitudes + maxLongitudes) / 2

  return [centerLongitudes, centerLatitudes]
}
