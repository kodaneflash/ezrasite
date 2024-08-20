import { v } from 'convex/values';

import { mutation, query } from './_generated/server';

export const createSubscriber = mutation({
  args: {
    email: v.string(),
  },
  handler: async (ctx, args) => {
    const existingSubscriber = await ctx.db
      .query('subscribers')
      .filter((q) => q.eq(q.field('email'), args.email))
      .first();

    // If the email does not exist, insert the new subscriber
    if (!existingSubscriber) {
      await ctx.db.insert('subscribers', {
        email: args.email,
      });
      return { success: true, message: 'Subscribed successfully!' };
    } else {
      // Return a message or handle as necessary when the email already exists
      return { success: false, message: 'Already added this email.' };
    }
  },
});
