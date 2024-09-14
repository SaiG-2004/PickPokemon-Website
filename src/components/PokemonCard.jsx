import React from 'react'

const PokemonCard = ({pokemonData}) => {
  return (
   <li className='border shadow-xl rounded-2xl p-4 text-center bg-white hover:bg-purple-100 transition-transform duration-300 ease-out transform hover:scale-110'> 
      <figure className='bg-purple-300 rounded-full w-40 h-40 flex items-center mx-auto'>
         <img src={pokemonData.sprites.other.dream_world.front_default} alt={pokemonData.name}  
         className='w-28 h-28 mx-auto transition-transform duration-500 ease-in-out transform hover:scale-110'/>
      </figure>
      <h1 className='text-xl text-blue-600 capitalize font-bold mt-2 font-[Poppins]'>{pokemonData.name}</h1>
      <div className='w-fit mx-auto mt-2 bg-purple-500 rounded-full px-2 py-1 '>
         <p className='text-md text-white' >
            {pokemonData.types.map((pokemonType)=> pokemonType.type.name).join(", ")}
         </p>
      </div>

      <div className='grid grid-cols-3 mt-3'>
         <p className=''>
            <span className='text-gray-700 text-sm'>Height: </span> {pokemonData.height}
         </p>
         <p>
            <span className='text-sm text-gray-700 '>Weight: </span> {pokemonData.weight}
         </p>
         <p><span className='text-gray-700 text-sm'> Speed: </span> {pokemonData.stats[5].base_stat} </p>
      </div>

      <div className='grid grid-cols-3 mt-4'>
      <div>
      <p>{pokemonData.base_experience}</p>
      <span className='text-sm text-gray-700 '>Experience</span> 
      </div>
    
      <div>
      <p>{pokemonData.stats[1].base_stat}</p>
      <span className='text-gray-700 text-sm'>Attack</span> 
      </div>
    
      <div >
      <p>{pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0, 1).join(", ")}</p>
      <span className='text-gray-700  text-sm'>Ability</span> 
      </div>
    
      </div>
   </li>
  )
}

export default PokemonCard;