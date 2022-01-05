import axios from "axios";
const UpdateData = async (id, lastGameScore) => {
  try {
    await axios.put(
      `https://61d3f514b4c10c001712bb68.mockapi.io/playersData/${id}`,
      {
        lastGameScore,
      }
    );
  } catch (error) {
    console.log("the error is : " + error);
  }
};

export default UpdateData;
