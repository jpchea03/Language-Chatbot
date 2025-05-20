/*
db.js
Author: Joseph Cheatham
*/

import { lowdb } from "lowdb";
import { JSONFile } from "lowdb/node";
import { lodash } from "lodash-es";

//Construct file path for message database
const file = "./db.json";
const adapter = new JSONFile(file);
const db = new Low(adapter);

// Load database and add default structure
await db.read();
db.data ||= { users: [] };

//Add lodash shortcuts
db.chain = lodash.chain(db.data);
