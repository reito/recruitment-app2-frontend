import React, { useState } from 'react';

type SidebarProps = {
  onFilterChange: (category: string, salary: number) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
   
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedSalary, setSelectedSalary] = useState(0);

  const categories = ['エンジニア', 'デザイン', 'マーケティング', '人事', '財務・経理', '医療・介護'];  

  const handleCategoryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const category = e.target.value;
    setSelectedCategory(category);
    onFilterChange(category, selectedSalary);
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const salary = parseInt(e.target.value, 10);
    setSelectedSalary(salary);
    onFilterChange(selectedCategory, salary);
  };

  return (
    <div className="w-1/4 p-4 bg-gray-100">
      <h2 className="text-xl font-bold mb-4">求人カテゴリ</h2>
      <select value={selectedCategory} onChange={handleCategoryChange} className="mb-4 w-full p-2 border">
        <option value="">カテゴリを選択</option>
        {categories.map((category) => (
          <option key={category} value={category}>
            {category}
          </option>
        ))}
      </select>

      <h2 className="text-xl font-bold mb-4">年収</h2>
      <select value={selectedSalary} onChange={handleSalaryChange} className="w-full p-2 border">
        <option value={0}>全ての年収</option>
        <option value={300}>300万円以上</option>
        <option value={500}>500万円以上</option>
        <option value={700}>700万円以上</option>
      </select>
    </div>
  );
};

export default Sidebar;
