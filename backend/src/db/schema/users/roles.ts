import { bigint, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const roles = mysqlTable("roles", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),
  name: varchar("name", { length: 50 }).notNull().unique(),
});
