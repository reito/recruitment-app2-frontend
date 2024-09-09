import React, { useState } from 'react';

type SidebarProps = {
  onFilterChange: (category: string[], salary: number) => void;
};

const Sidebar: React.FC<SidebarProps> = ({ onFilterChange }) => {
   
  // const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedSalary, setSelectedSalary] = useState(0);

  const categories = ['エンジニア', 'デザイン', 'マーケティング', '人事', '財務・経理', '医療・介護'];  

  // const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const category = e.target.value;
  //   setSelectedCategory(category);
  //   onFilterChange(category, selectedSalary);
  // };
  const handleCategoryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const category = e.target.value;
    if (e.target.checked) {
      setSelectedCategory((prevCategories) => [...prevCategories, category]);
    } else {
      setSelectedCategory((prevCategories) =>
        prevCategories.filter((c) => c !== category)
      );
    }
    // onFilterChange(selectedCategory, selectedSalary);  // フィルター変更イベントを呼び出す
    onFilterChange(
      e.target.checked
        ? [...selectedCategory, category] // チェックが入っている場合は新しいカテゴリを追加
        : selectedCategory.filter((c) => c !== category), // チェックが外れている場合はカテゴリを除外
      selectedSalary
    );
  };

  const handleSalaryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const salary = parseInt(e.target.value, 10);
    setSelectedSalary(salary);
    onFilterChange(selectedCategory, salary);
  };

  return (
    <div className="p-1">
      <aside className="w-full p-4">
        <h2 className="font-bold mb-4">求人カテゴリ</h2>
        {categories.map((category) => (
          <label key={category} className="block mb-2">
            <input
              type="checkbox"
              value={category}
              onChange={handleCategoryChange}
              className="mr-2"
            />
            {category}
          </label>
        ))}
      </aside>
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
