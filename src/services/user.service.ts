import userDao from "../dao/user.dao";

/**
 * Method To Get All Users
 * @returns
 */
const getAll = async () => {
  try {
    const userData = await userDao.getAll();
    return {
      message: "success",
      status: true,
      data: userData,
    };
  } catch (error) {
    console.log("Error Occurred in user service : getAll ", error);
    throw error;
  }
};

export { getAll };
