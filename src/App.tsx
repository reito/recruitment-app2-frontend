// import React from 'react';
// import logo from './logo.svg';
// import './App.css';
// import Header from './components/Header';
// import { BrowserRouter, Route} from "react-router-dom";

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           {/* Learn React */}
//            <BrowserRouter>
//             <Header />
//            </BrowserRouter>
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import JobPostForm from './components/JobPostForm';
// import NotFound from './pages/NotFound';
import Header from './components/Header';

function App() {
  const handleFilterChange = (category: string, salary: number) => {
    console.log(`選択したカテゴリ: ${category}, 選択した年収: ${salary}`);
    // フィルタリング処理をここで実装
  };

  const handleOnPostJob = (job: { title: string; category: string; salary: number })  => {
    // console.log(`選択したカテゴリ: ${category}, 選択した年収: ${salary}`);
    // // フィルタリング処理をここで実装
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<SideBar onFilterChange={handleFilterChange} />} />
        <Route path="/post" element={<JobPostForm onPostJob={handleOnPostJob} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="*" element={<Header />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
