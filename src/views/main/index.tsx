// [START views/main/]
import { FC } from 'react'


// should be replaced

const PaperRect: FC<{ title: string }> = ({ title }) => (
  <div
    className="flex items-center justify-center rounded-lg bg-white p-4 shadow-md"
    style={{ width: "297.5px", height: "421px" }}
  >
    <p className="text-center text-sm font-medium text-gray-800">{title}</p>
  </div>

)

export default function MainDashboard() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <main className="mx-auto max-w-8xl">
        <div className="grid h-[calc(100vh-8rem)] grid-cols-5 gap-4">
          {/* Research paper grid (60% width, 100% height) */}
          <div className="col-span-3 overflow-y-auto p-4">
            <div className="grid grid-cols-3 gap-4">
              {researchPapers.map((paper, i) => (
                <div
                  key={i}

                >
                  <PaperRect title={paper} />
                </div>
              ))}
            </div>
          </div>

          {/* Two squares on the right */}
          <div className="col-span-2 grid grid-rows-2 gap-4">
            <div className="aspect-square flex w-3/4 items-center justify-center rounded-sm bg-gray-900 p-2 text-white shadow-lg">
              <h2 className="text-2xl font-bold">Search</h2>
            </div>
            <div className="aspect-square flex w-3/4 items-center justify-center rounded-sm bg-gray-800 p-4 text-white shadow-lg">
              <h2 className="text-2xl font-bold">Boards</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}


// [END views/main/]
