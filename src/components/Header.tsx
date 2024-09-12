import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-950 text-white p-4 flex justify-between items-center">
      <h1 className="text-lg font-bold">
        <Link to="/">求人検索アプリ</Link>
      </h1>
      <nav>
        <ul className="flex justify-end space-x-4">
          <li><Link to="/">求人検索</Link></li>
          <li><Link to="/post">求人投稿</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
