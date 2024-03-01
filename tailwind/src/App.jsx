import './index.css'
import tree from './assets/tree.png';
import tree1 from './assets/tree1.png'
export default function App() { 
  return (
    <>
    <div class=" text-3xl font-bold underline animate-bounce">Hello, Tree</div>
   <div class="flex justify-between"> <img className="tree-image" src={tree} alt="My Image" />
   <div class="bg-blue-200 animate-bounce w-16 h-16 rounded-full mr-20">
  <img class="w-16 h-16 rounded-full" src={tree1} alt="My Image" />
</div></div>
   <br /> 
    <br />
   <div  class="flex space-x-4">
    
   <div class="bg-pink-200  animate-bounce duration-500">Trees are some of the longest-living organisms on Earth</div>
   <div class="bg-green-300  animate-pulse ">Trees play a vital role in producing oxygen.</div>
   </div>
   <br />
   <br />
   <div  class="flex space-x-4">
    
   <div class="bg-orange-200 animate-pulse ">Trees provide habitats for numerous plant and animal species.</div>
   <div class="bg-red-300  animate-bounce"> Trees can communicate with each other.</div>
   </div>
   </>
  )
}
