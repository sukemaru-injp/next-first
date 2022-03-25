import { Client } from '@notionhq/client'
import type { QueryDatabaseResponse } from '@notionhq/client/build/src/api-endpoints'

export const notion = new Client({ auth: process.env.NOTION_API_KEY })

export const pageId: string = process.env.NOTION_PAGE_ID || ''
export const databaseId: string = process.env.NOTION_DATABASE_ID || ''

export interface DatabaseResType extends QueryDatabaseResponse {}