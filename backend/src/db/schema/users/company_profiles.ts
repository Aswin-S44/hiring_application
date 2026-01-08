import { bigint, boolean, mysqlTable, varchar } from "drizzle-orm/mysql-core";
import { users } from "./users";

export const company_profiles = mysqlTable("company_profiles", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),

  userId: bigint("user_id", { mode: "number", unsigned: true })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),

  companyName: varchar("company_name", { length: 500 }).notNull(),
  companySize: bigint("company_size", { mode: "number" }).notNull(),
  industry: varchar("industry", { length: 500 }).notNull(),
  website: varchar("website", { length: 255 }),
  verified: boolean("verified").default(false).notNull(),
});
