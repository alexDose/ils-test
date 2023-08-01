import React, {useEffect} from 'react';
import {notification} from 'antd';
import {useAppSelector} from "../../redux/store";
import {getError} from "../../redux/selectors/appSelectors";

export const ErrorNotification = () => {
    const [api, contextHolder] = notification.useNotification();

    const error = useAppSelector(getError)

    const openNotification = () => {
        api.open({
            message: 'Error',
            description: error,
            duration: 0,
        });
    };

    useEffect(() => {
        if (error) {
            openNotification()
        }
    }, [error])
    return (
        <>
            {contextHolder}
        </>
    );
};
