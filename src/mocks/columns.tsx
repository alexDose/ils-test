import { ColumnsType } from 'antd/es/table'
import {RoutesProps} from "../types";

export const columns: ColumnsType<RoutesProps> = [
    {
        title: 'Маршрут',
        dataIndex: 'name',
    },
    {
        title: 'Точка 1 (lat, lng)',
        render: (_, data) => {
            return (
                <>
                    <div>{data.routes[0][0]}</div>
                    <div>{data.routes[0][1]}</div>
                </>
            )
        },
    },
    {
        title: 'Точка 2 (lat, lng)',
        render: (_, data) => {
            return (
                <>
                    <div>{data.routes[1][0]}</div>
                    <div>{data.routes[1][1]}</div>
                </>
            )
        },
    },
    {
        title: 'Точка 3 (lat, lng)',
        render: (_, data) => {
            return (
                <>
                    <div>{data.routes[2][0]}</div>
                    <div>{data.routes[2][1]}</div>
                </>
            )
        },
    },
]
