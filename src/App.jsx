import './App.scss'
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/layout'
import HomePage from './pages/HomePage/HomePage';
// import {  ref, get, child } from "firebase/database";
// import { database } from './firebase';
function App() {

  // const dbRef = ref(database);
  // get(child(dbRef, `product`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });
 
return (
  <>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
      </Route>

    </Routes>
  </>
)
}

export default App
