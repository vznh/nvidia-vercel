// [START views/main/index.tsx]
import { FC, useState, useEffect } from 'react';
import PaperRect from '../../components/PaperRect';
import Search from '../../components/Search';
import Boards from '../../components/Boards';
import { getRecommendations } from '../../helpers/recommendations';
import { researchPapers } from '@/data/names';

const defaultPapers = researchPapers.slice(0, 10);

const MainDashboard: FC = () => {
  const [researchPapers, setResearchPapers] = useState<string[]>(defaultPapers);
  const [keywords, setKeywords] = useState<string[]>([]);

  useEffect(() => {
    const fetchRecommendations = async () => {
      if (keywords.length === 0) {
        setResearchPapers(defaultPapers);
      } else {
        const recommendations = await getRecommendations(keywords);
        setResearchPapers(recommendations);
      }
    };
    fetchRecommendations();
  }, [keywords]);

  const addToBoard = (paper: string) => {
    const savedBoard = localStorage.getItem('userBoard');
    const board = savedBoard ? JSON.parse(savedBoard) : [];
    if (!board.includes(paper)) {
      const updatedBoard = [...board, paper];
      localStorage.setItem('userBoard', JSON.stringify(updatedBoard));
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <main className="mx-auto max-w-8xl">
        <div className="grid h-[calc(100vh-8rem)] grid-cols-5 gap-4">
          {/* Research paper grid */}
          <div className="col-span-3 overflow-y-auto p-4">
            <div className="grid grid-cols-3 gap-4">
              {researchPapers.map((paper, i) => (
                <div key={i} onClick={() => addToBoard(paper)}>
                  <PaperRect title={paper} />
                </div>
              ))}
            </div>
          </div>

          {/* Right side panels */}
          <div className="col-span-2 grid grid-rows-2 gap-4">
            <Search setKeywords={setKeywords} />
            <Boards />
          </div>
        </div>
      </main>
    </div>
  );
};

export default MainDashboard;
// [END views/main/index.tsx]
