'use client';

import React from 'react';

import { Form, FormControl, FormField, FormItem } from '@/components/ui/form';
import { api } from '@/convex/_generated/api';
import { zodResolver } from '@hookform/resolvers/zod';
import { useMutation } from 'convex/react';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';

const formSchema = z.object({
  email: z.string().email(),
});

export default function Subscribe() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
    },
  });
  const createSubscriber = useMutation(api.subscribers.createSubscriber);
  return (
    <div className="bg-neutral-800/20 rounded-lg pt-6 pb-8 px-6 flex flex-col space-y-4 mt-4 animate-slide-from-down-and-fade-6">
      <span className="text-neutral-300/80 text-sm sm:text-base">
        Your Saturday issue to find startup ideas, launch fast, and get profitable. Join 25,000+ solo entrepreneurs.
      </span>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(async (values) => {
            const { success, message } = await createSubscriber({
              email: values.email,
            });
            if (success) {
              toast.success(message);
            } else {
              toast.error(message);
            }
            form.reset();
          })}
          className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 items-center"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <input
                    {...field}
                    type="email"
                    placeholder="Email Address"
                    className="w-full h-10 px-3 text-sm py-2 rounded-lg border border-neutral-800 bg-neutral-800/50 text-neutral-400 focus:outline-none focus:ring-0.5 focus:ring-secondary/20 focus:ring-offset-0.5 focus:ring-offset-secondary-800 focus:border-secondary/20"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <button
            type="submit"
            className="w-full sm:w-auto h-10 rounded-lg bg-secondary font-medium px-6 text-neutral-800 hover:bg-secondary/80 text-sm"
          >
            Join
          </button>
        </form>
      </Form>
    </div>
  );
}