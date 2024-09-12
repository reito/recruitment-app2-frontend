import React, { useState } from 'react';
import Header from './Header';
import {Link} from "react-router-dom";

type JobPostFormProps = {
  onPostJob: (job: { title: string; category: string; salary: number }) => void;
};

const JobPostForm: React.FC<JobPostFormProps> = ({ onPostJob }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [salary, setSalary] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onPostJob({ title, category, salary });
    setTitle('');
    setCategory('');
    setSalary(0);
  };

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">求人カテゴリを選択</label>
        {/* <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        /> */}
        <select value={category} onChange={(e) => setCategory(e.target.value)} className="w-full p-2 border">
        <option value={0}>カテゴリを選択</option>
        <option value={'エンジニア'}>エンジニア</option>
        <option value={'デザイン'}>デザイン</option>
        <option value={'マーケティング'}>マーケティング</option>
        <option value={'人事'}>人事</option>
        <option value={'財務・経理'}>財務・経理</option>
        <option value={'医療・介護'}>医療・介護</option>
      </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">年収 (万円)</label>
        <input
          type="number"
          value={salary}
          onChange={(e) => setSalary(Number(e.target.value))}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">求人タイトル</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        <Link to="/">投稿</Link>
      </button>
    </form>
    </div>
  );

};

export default JobPostForm;
