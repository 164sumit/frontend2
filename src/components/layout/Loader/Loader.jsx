import React from 'react'
const productLoaders = Array(8).fill(null);
import Loaderlayout from "./Loderlayout"
function Loader() {
  return (
    <div>
      {
        <div className="container2" style={{paddingTop:"6vh"}} >
        { productLoaders.map((product,index) => (
          <Loaderlayout key={index} />

        ))}

      </div>
      }
      
      
    </div>
  )
}

export default Loader
