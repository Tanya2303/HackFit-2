import {Client, Account, Databases, Storage } from 'appwrite'

const client = new Client();

const project_id = "{process.env.APPWRITE_PROJECTID}"

client.setEndpoint("https://cloud.appwrite.io/v1").setProject(project_id)

export const account = new Account(client)

const db_id = "{process.env.APPWRITE_DB}"

export const databases = new Databases(client, db_id)

const storage_id = "{process.env.APPWRITE_STORAGE}"

export const storage = new Storage(client, storage_id)
