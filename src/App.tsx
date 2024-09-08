import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SideBar from './components/SideBar';
import JobPostForm from './components/JobPostForm';
// import NotFound from './pages/NotFound';
import Header from './components/Header';
import JobList from './components/JobList'
import { useState } from 'react';


const initialJobs = [
  { id: 1, title: 'ソフトウェアエンジニア', category: 'エンジニア', salary: 500 },
  { id: 2, title: 'デザイナー', category: 'デザイン', salary: 400 },
  // 他の求人情報も追加可能
];

function HomePage() {

  const [jobs, setJobs] = useState(initialJobs); // 状態としての求人リスト
  const [filteredJobs, setFilteredJobs] = useState(initialJobs); // フィルタリングされた求人リスト

  // フィルタの変更処理
  const handleFilterChange = (selectedCategories: string[], selectedSalary: number) => {
    const filtered = jobs.filter((job) => 
      (selectedCategories.length === 0 || selectedCategories.includes(job.category)) &&
      job.salary >= selectedSalary
    );
    setFilteredJobs(filtered);
  };

  return (
    <div>
      <Header />
      <div className="flex">
      <SideBar onFilterChange={handleFilterChange} />
      <JobList jobs={filteredJobs} />
    </div>
    </div>
  );
}

function App() {

  // const handleFilterChange = (category: string[], salary: number) => {
  //   console.log(`選択したカテゴリ: ${category}, 選択した年収: ${salary}`);
  //   // フィルタリング処理をここで実装
  // };

  

  const handleOnPostJob = (job: { title: string; category: string; salary: number })  => {
    // console.log(`選択したカテゴリ: ${category}, 選択した年収: ${salary}`);
    // // フィルタリング処理をここで実装
  };

  return (
    <Router>
      {/* <Header /> */}
      <Routes>
        {/* <Route path="/" element={<SideBar onFilterChange={handleFilterChange} />} /> */}
        <Route path="/post" element={<JobPostForm onPostJob={handleOnPostJob} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
        {/* <Route path="/" element={<JobList jobs={jobs} />} /> */}
        {/* <JobList jobs={jobs} /> */}
        <Route path="/" element={<HomePage />} />
      </Routes>
      {/* <JobList jobs={jobs} /> */}
    </Router>
  );
}

export default App;

// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import SideBar from './components/SideBar';
// import JobPostForm from './components/JobPostForm';
// import Header from './components/Header';
// import JobList from './components/JobList';

// // 仮のデータとしての求人リスト
// const initialJobs = [
//   { id: 1, title: 'エンジニア', category: 'エンジニア', salary: 500 },
//   { id: 2, title: 'デザイナー', category: 'デザイン', salary: 400 },
//   // 他の求人データを追加
// ];

// function HomePage() {
//   const [jobs, setJobs] = useState(initialJobs); // 状態としての求人リスト
//   const [filteredJobs, setFilteredJobs] = useState(initialJobs); // フィルタリングされた求人リスト

//   // フィルタの変更処理
//   const handleFilterChange = (selectedCategories: string[], selectedSalary: number) => {
//     const filtered = jobs.filter((job) => 
//       (selectedCategories.length === 0 || selectedCategories.includes(job.category)) &&
//       job.salary >= selectedSalary
//     );
//     setFilteredJobs(filtered);
//   };

//   return (
//     <div className="flex">
//       <SideBar onFilterChange={handleFilterChange} />
//       <JobList jobs={filteredJobs} />
//     </div>
//   );
// }

// function App() {
//   const handleOnPostJob = (job: { title: string; category: string; salary: number }) => {
//     // 新しい求人の処理をここで実装
//   };

//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/" element={<HomePage />} />
//         <Route path="/post" element={<JobPostForm onPostJob={handleOnPostJob} />} />
//         {/* <Route path="*" element={<NotFound />} /> */}
//       </Routes>
//     </Router>
//   );
// }

// export default App;
