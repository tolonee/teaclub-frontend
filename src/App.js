import * as React from "react";
import { Admin, Resource } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';
import { TeaList } from "./teas";

const LOCAL_REST_ENDPOINT = 'http://localhost:8080';

const dataProviderLocalhost = jsonServerProvider(`${LOCAL_REST_ENDPOINT}/tea`);
const App = () => (
  <Admin dataProvider={dataProviderLocalhost}>
    <Resource name="findall" list={TeaList} />
  </Admin>

);

export default App;