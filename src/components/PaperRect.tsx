// [START components/PaperRect.tsx]
import { FC } from 'react';

const PaperRect: FC<{ title: string }> = ({ title }) => (
  <div
    className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md"
    style={{ width: '297.5px', height: '421px' }}
  >
    <p className="text-center text-sm font-medium text-gray-800">
      {title.substring(0, 25)}
    </p>
  </div>
);

export default PaperRect;
// [END components/PaperRect.tsx]
