// [START components/Boards.tsx]
import { FC } from 'react';
import { useRouter } from 'next/router';

const Boards: FC = () => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    router.push('/boards');
  };

  return (
    <div
      onClick={handleClick}
      className="aspect-square flex w-3/4 flex-col items-center justify-center rounded-sm bg-gray-800 p-4 text-white shadow-lg cursor-pointer"
    >
      <h2 className="mb-4 text-2xl font-bold">Boards</h2>
      <p>Click to view all saved papers</p>
    </div>
  );
};

export default Boards;
// [END components/Boards.tsx]
