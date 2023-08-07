import './styles/styles.scss'
import { useRoutes } from 'react-router-dom';
import Layout from './layout'
import { CollectionsPage, HomePage, ProductDetailPage, SearchPage } from './pages';
import { I18nextProvider } from 'react-i18next';
import i18n from './language/LanguageSetting';
import TestAPI from './components/TestAPI';

function App() {

  const routes = [
    {
      path: '/',
      element: <Layout />,
      children: [
        { index: true, element: <HomePage /> },
        { path: '/item/:address/:id', element: <ProductDetailPage /> },
        { path: '/NFTs', element: <CollectionsPage /> },
        { path: '/search', element: <SearchPage /> },
      ],
    },
  ];
  return (
    <I18nextProvider i18n={i18n}>
      {useRoutes(routes)}
    </I18nextProvider>
    
  )
}

export default App
