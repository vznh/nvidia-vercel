// [START pages/boards.tsx]
import { useEffect, useState } from 'react';
import Boards from '@/components/Boards';
import Link from 'next/link';

const BoardsPage = () => {
  const [board, setBoard] = useState<string[]>([]);

  useEffect(() => {
    const savedBoard = localStorage.getItem('userBoard');
    if (savedBoard) {
      setBoard(JSON.parse(savedBoard));
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <main className="mx-auto max-w-6xl">
        <div className="mb-4">
          <Link href="/">
            <span className="text-blue-500 cursor-pointer">← Back to Home</span>
          </Link>
        </div>
        <h1 className="mb-4 text-3xl font-bold">My Board</h1>
        <Boards />
      </main>
    </div>
  );
};

export default BoardsPage;
// [END pages/boards.tsx]
