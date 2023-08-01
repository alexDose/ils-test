import {Map} from "./components/Map/Map";
import {TableComponent} from "./components/Table/Table";
import styles from "./styles/App.module.scss"
import {Layout, Spin} from "antd";
import {Content, Header} from "antd/es/layout/layout";
import {useAppSelector} from "./redux/store";
import {getIsLoading} from "./redux/selectors/appSelectors";
import {ErrorNotification} from "./components/ErrorNotification/ErrorNotification";

function App() {
    const isLoading = useAppSelector(getIsLoading)

    return(
        <Layout>
            <ErrorNotification/>
            <Header className={styles.header}>ILS-test</Header>
            {isLoading && <Spin size='large'/>}
            <Content className={styles.content}>
                <TableComponent/>
                <Map/>
            </Content>
        </Layout>
    );
}

export default App;
