import db from "../utils/db";

const getAll = async (connectionObj = null) => {
  try {
    const transaction = connectionObj ?? db;
    const query = `select * from l_user order by updated_date desc`;
    const user = await transaction.manyOrNone(query, []);
    return user;
  } catch (error) {
    console.log("Error occurred in user getAll dao", error);
    throw error;
  }
};

export default {
  getAll,
};
