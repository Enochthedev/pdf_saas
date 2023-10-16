import {integer, pgEnum, pgTable, serial, text,timestamp,varchar} from 'drizzle-orm/pg-core'

export const userSystemEnum = pgEnum('user_system_enum',['user','system'])


export const chats =pgTable('chats',{
    id: serial('id').primaryKey(),
    chatName: text('chat_name').notNull(),
    pdfUrl: text('pdf_url').notNull(),
    createdAt: timestamp('created_at').notNull().defaultNow(),
    userId: varchar('user_id',{length:256}).notNull(),
    fileKey: text('file_key').notNull(),
})
//schema explained
//the id column is a serial column, which means that it is an auto-incrementing integer. The chatName column is a text column, which means that it is a string. The pdfUrl column is also a text column. The createdAt column is a timestamp column, which means that it is a timestamp. The userId column is a varchar column, which means that it is a string with a maximum length of 256 characters. The fileKey column is a text column.
// the id is the main identifier for the chat. The chatName is the name of the chat. The pdfUrl is the url of the pdf. The createdAt is the time the chat was created. The userId is the id of the user who created the chat. The fileKey is the key of the file in the file storage.


export const messages = pgTable("messages", {
    id: serial("id").primaryKey(),
    chatId: integer("chat_id").references(()=>chats.id).notNull(),
    content: text("content").notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
    userId: varchar("user_id", {length: 256}).notNull(),
    role: userSystemEnum("role").notNull(),
})




