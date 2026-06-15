import pgPromise from "pg-promise";

const initOptions = {
  schema: ["portal"],
};

const pgp = pgPromise(initOptions);
const dbConnectionString: string = process.env.API_DEV_DATABASE_URL || "";

const db = pgp(dbConnectionString);

export default db;
