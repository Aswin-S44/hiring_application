import {
  bigint,
  float,
  json,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";
import { users } from "./users";

export const candidate_profiles = mysqlTable("candidate_profiles", {
  id: bigint("id", { mode: "number", unsigned: true })
    .autoincrement()
    .primaryKey(),

  userId: bigint("user_id", { mode: "number", unsigned: true })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" })
    .unique(),

  fullName: varchar("full_name", { length: 150 }).notNull(),

  experienceYear: bigint("experience_year", { mode: "number" })
    .notNull()
    .default(0),

  experienceMonth: bigint("experience_month", { mode: "number" })
    .notNull()
    .default(0),

  resumeUrl: varchar("resume_url", { length: 200 }),

  expectedSalary: float("expected_salary").default(0),

  skills: json("skills").$type<string[]>(),
});
