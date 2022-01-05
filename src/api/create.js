import axios from "axios";
const Create = async (name,avatar,lastGameScore)=>{

    try {
        await axios.post(
          `https://61d3f514b4c10c001712bb68.mockapi.io/playersData`,
          {
            name,
            avatar,
            lastGameScore,
          }
        );
        
  
      } catch (error) {
        console.log("the error is : " + error);
      }

}

export default Create  ; 