export default function Home() {
  const data = [
    // "https://www.bbc.com?fqwfwaaddwwwwwwaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa",
    "https://www.bbc.com",
    "https://www.bbc.com",
    "https://www.bbc.com?fqwfwa",
    "https://www.bbc.com",
    // "https://www.bbc.com?fqwfwaadwdawdawdawdafawfawfawfwafawfawfaw",
  ]
  const number = 1

  return (
    <main class="text-center mx-auto p-4">
      <h1 class="text-4xl md:text-6xl text-black uppercase m-8">B O O K M A R K S</h1>
      <div class="container mx-auto flex justify-center items-center flex-col">
        <div class="bg-white rounded px-6 py-2 mb-6">
            {data.map(url => <>
              <div class="grid grid-cols-6 gap-4 bg-gray-200 rounded p-2 m-3">
                <div class="col-span-5 ...">
                  <div class="bg-white rounded p-2">
                    {url}
                  </div>
                </div>
                <div class="col-span-1 ...">
                  <button class="bg-red-200 rounded p-2 hover:bg-red-400 h-min">
                    x
                  </button>
                </div>
              </div>
            </>)}
            <div class="grid grid-cols-3 gap-4 border-t-2 border-t-gray-200">
              <button class="col-span-1 m-1 rounded p-1/2 hover:bg-gray-200">
                {"<"}
              </button>
              <div class="col-span-1 p-2">
                {number}
              </div>
              <button class="col-span-1 m-1 rounded p-1/2 hover:bg-gray-200">
                {">"}
              </button>
            </div>
        </div>
        <div class="bg-white rounded px-6 py-2 mb-6">
          <div class="mb-3">
            Insert a new bookmark
          </div>
          <div class="grid grid-cols-6 gap-4 bg-gray-200 p-2 mb-2 rounded">
            <div class="col-span-5 ...">
              <input class="bg-white rounded p-1" />
            </div>
            <div class="col-span-1 ...">
              <button class="bg-green-200 rounded p-1 hover:bg-green-400">
                +
              </button>
            </div>
          </div>
        </div>
        <div class="bg-white rounded px-6 py-2 mb-6">
          <div class="mb-3">
            Clear all bookmarks
          </div>
          <button class="bg-red-200 rounded p-2 hover:bg-red-400 h-min mb-1">
            clear
          </button>
        </div>
        <h1 class="text-1xl text-gray-100 uppercase m-8 border-t-2 border-t-gray-100">William Fussey - 2022</h1>
      </div>
    </main>
  );
}
