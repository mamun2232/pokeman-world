import React from "react";
import { useState } from "react";
import pokemonImg from "../pictures/38061-search.gif";
const Pokemon = () => {
      const [searchText , setSearchText] = useState("")
      const [searchResult , setSearchResult] = useState()
      // charmander

      const searchHendelr = () => {
            const text = searchText.toLowerCase()
            console.log(text);
            fetch(`https://pokeapi.co/api/v2/pokemon/${text}`)
            .then(res => res.json())
            .then(data => setSearchResult(data))
      }
      console.log(searchResult)

    
  return (
    <div>
      <div className="">
        <div className="grid  grid-cols-1 lg:grid-cols-2 gap-5 mt-20 max-w-7xl m-auto px-2 ">
          <div className="max-w-2xl flex  items-center justify-center px-8 py-4 mx-auto  rounded-lg shadow-md bg-[#354259] h-[450px] w-full">
            <div>
              <div className="">
                <h1 className="lg:text-3xl text-xl mb-4 text-white ">
                  Wellcome to Pokemon World
                </h1>
              </div>

              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-5 h-5 text-gray-400"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    ></path>
                  </svg>
                </span>

                <div className="w-full">
                  <input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 text-gray-700 bg-white border rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Search"
                    onChange={(e) => setSearchText(e.target.value)}
                  />
                </div>
              </div>
           
           <div className="text-center">
           <button onClick={() => searchHendelr()} className="bg-[#1363DF] py-3 px-8 rounded font-medium text-white mt-2 ">
                Search Pokemon
              </button>
           </div>
              
            </div>
          </div>
          <div className="w-full max-w-sm   mx-auto  rounded-md shadow-md h-[450px] ">

            {
                  searchResult ?   <div className="bg-[#354259] px-4 py-5 rounded-lg">
                  <p className="text-xl text-white text-center">Pokemon Information</p>

                  <div className="px-4">
                        <div className=" flex justify-center">
                        <img className="w-36"  src={searchResult?.sprites.front_default} alt="" />
                        </div>
                       <div className=" text-white">
                       <p className="mt-1 text-[17px]">Name:   {searchResult?.name}</p>
                        <p className="mt-1 text-[17px]">Species: {searchResult?.species.name}</p>
                        <p className="mt-1 text-[17px]">Species: {searchResult?.moves[0].move?.name}</p>
                        <p className="mt-1 text-[17px]">Stats: {searchResult?.stats[0].base_stat}</p>
                        <p className="mt-1 text-[17px]">attack: {searchResult?.stats[1].base_stat}</p>
                        <p className="mt-1 text-[17px]">Types: {searchResult?.types[0].type.name}</p>
                        <p className="mt-1 text-[17px]">Weight: {searchResult?.weight}</p>
                        <p className="mt-1 text-[17px]">Height: {searchResult?.height}</p>
                       </div>

                  </div>
                </div>

                :
                <div className="flex justify-center items-center h-[450px] bg-white">
                <img src={pokemonImg} alt="" />
              </div>
            }
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
