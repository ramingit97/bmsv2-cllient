import '../src/assets/styles/index.css'
import { useRoutes } from 'react-router-dom';
// @ts-ignore
import router from "./router.tsx";
import { Provider } from 'react-redux';
// @ts-ignore
import {setupStore} from "./common/store/store.tsx";


function App() {
  const content = useRoutes(router);
  const store = setupStore();

  return (
      <Provider store={store}>
        <>
          {content}
        </>
      </Provider>
  )
}

export default App