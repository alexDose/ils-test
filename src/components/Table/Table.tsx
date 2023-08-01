import {Table} from "antd";
import {useAppDispatch, useAppSelector} from "../../redux/store";
import {Key} from "antd/es/table/interface";
import {getRoutes} from "../../redux/selectors/routesSelectors";
import {RoutesProps} from "../../types";
import {setSelectedRoute} from "../../redux/slices/routesSlice";
import {getCoordinatesAction} from "../../redux/actions/getCoordinatesAction";
import {columns} from "../../mocks/columns";
import {addCoordinatesUrl} from "../../common/helpers/helpers";

export const TableComponent = () => {
    const routes = useAppSelector(getRoutes)
    const dispatch = useAppDispatch()

    const handleRouteSelection = (selectedRouteKeys: Key[], selectedRoutes: RoutesProps[]) => {
        dispatch(setSelectedRoute(selectedRouteKeys[0]))
        dispatch(getCoordinatesAction(addCoordinatesUrl(selectedRoutes[0].routes)))
    }

    return (
        <Table
            size="small"
            columns={columns}
            dataSource={routes}
            tableLayout="fixed"
            bordered={true}
            rowSelection={{
                type: 'radio',
                onChange: handleRouteSelection }}
            scroll={{ x: 'max-content' }}
        />
    )
}
