import { type RoutesProps } from '../types'

export const routes: RoutesProps[] = [
  {
    key: '1',
    name: 'Маршрут №1',
    routes: [
      [59.84660399, 30.29496392],
      [59.82934196, 30.42423701],
      [59.83567701, 30.38064206]
    ],
    isSelected: true
  },
  {
    key: '2',
    name: 'Маршрут №2',
    routes: [
      [59.82934196, 30.42423701],
      [59.82761295, 30.41705607],
      [59.84660399, 30.29496392]
    ],
    isSelected: false
  },
  {
    key: '3',
    name: 'Маршрут №3',
    routes: [
      [59.83567701, 30.38064206],
      [59.83660399, 30.29496492],
      [59.82761295, 30.41705607]
    ],
    isSelected: false
  }
]
