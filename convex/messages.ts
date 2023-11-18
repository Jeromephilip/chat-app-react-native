import { mutation, query } from './_generated/server'
import { v } from 'convex/values'

export const sendMessage = mutation({
  args: { content: v.string(), group_id: v.id('groups'), user: v.string(), file: v.optional(v.string())},
  handler: async(ctx, args) => {
    await ctx.db.insert('messages', args)
  }
})

export const get = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query('groups').collect();
  },
});