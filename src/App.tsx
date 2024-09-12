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

interface Job {
  id: number;
  title: string;
  category: string;
  salary: number;
}

function HomePage({ jobs, onFilterChange }: { jobs: Job[]; onFilterChange: (selectedCategories: string[], selectedSalary: number) => void }) {

  const [filteredJobs, setFilteredJobs] = useState<Job[]>(jobs);

  // フィルタの変更処理
  const handleFilterChange = (selectedCategories: string[], selectedSalary: number) => {
    const filtered = jobs.filter((job) => 
      (selectedCategories.length === 0 || selectedCategories.includes(job.category)) &&
      job.salary >= selectedSalary
    );
    setFilteredJobs(filtered);
    onFilterChange(selectedCategories, selectedSalary);
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

  const [jobs, setJobs] = useState<Job[]>(initialJobs);

  const handleOnPostJob = (job: { title: string; category: string; salary: number })  => {

    setJobs([...jobs, { ...job, id: jobs.length + 1 }]); // 新しい求人をリストに追加
  };

  return (
    <Router>
      <Routes>
        <Route path="/post" element={<JobPostForm onPostJob={handleOnPostJob} />} />
        <Route
          path="/"
          element={<HomePage jobs={jobs} onFilterChange={(filteredJobs) => { /* Handle filter changes if needed */ }} />}
        />
      </Routes>
    </Router>
  );
}

export default App;