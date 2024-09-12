import React, { useState } from 'react';
import Header from './Header';
import {useNavigate} from "react-router-dom";

type JobPostFormProps = {
  onPostJob: (job: { title: string; category: string; salary: number }) => void;
};

const JobPostForm: React.FC<JobPostFormProps> = ({ onPostJob }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [salary, setSalary] = useState(0);

  const [error, setError] = useState<string>('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title || !category || salary <= 0) {
      setError('すべてのフィールドを正しく入力してください。');
      return; // 送信を中断
    }

    // エラーがなければ投稿処理を続行
    onPostJob({ title, category, salary });
    setTitle('');
    setCategory('');
    setSalary(0);
    setError(''); // エラーをクリア
    navigate('/');
  };
  

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit} className="p-4 bg-white shadow-md rounded">

      {error && <p className="text-red-500">{error}</p>}
      
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">求人カテゴリを選択</label>
     
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
        投稿
      </button>
    </form>
    </div>
  );

};

export default JobPostForm;
