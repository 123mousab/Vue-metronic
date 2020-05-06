import IndexProvider from "../components/Provider/IndexProvider";
import CreateProvider from "../components/Provider/CreateProvider";
import Editrovider from "../components/Provider/EditProvider";

export default  [
    { path: '/provider', component: IndexProvider, name: 'indexProvider' },
    { path: '/provider/create', component: CreateProvider, name: 'CreateProvider' },
    { path: '/provider/edit', component: Editrovider, name: 'EditProvider'},
];