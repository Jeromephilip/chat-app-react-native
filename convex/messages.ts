import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const sendMessage = mutation({
  args: { content: v.string(), group_id: v.id('groups'), user: v.string(), file: v.optional(v.string())},
  handler: async(ctx, args) => {
    await ctx.db.insert('messages', args)
  }
})

export const get = query({
  args: { chatid: v.id('groups') },
  handler: async ({db}, { chatid }) => {
      return await db
      .query('messages')
      .filter((q) => q.eq(q.field('group_id'), chatid))
      .collect();
  },
});