import React, { useState } from 'react';

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
    <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">求人タイトル</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">カテゴリ</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-2 border rounded"
        />
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

      <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
        投稿
      </button>
    </form>
  );
};

export default JobPostForm;
