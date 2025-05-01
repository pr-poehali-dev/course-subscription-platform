
import { useState } from 'react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/Button';
import { toast } from '@/components/ui/use-toast';

const formSchema = z.object({
  name: z.string().min(2, {
    message: 'Имя должно содержать минимум 2 символа',
  }),
  email: z.string().email({
    message: 'Пожалуйста, введите корректный email',
  }),
});

type FormValues = z.infer<typeof formSchema>;

export default function SubscriptionForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
    },
  });

  function onSubmit(values: FormValues) {
    setIsSubmitting(true);
    
    // Имитация отправки на сервер
    setTimeout(() => {
      toast({
        title: "Подписка оформлена!",
        description: `${values.name}, спасибо за подписку! Мы отправили письмо на ${values.email}`,
      });
      
      form.reset();
      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md max-w-md w-full">
      <h3 className="text-2xl font-bold mb-4 text-center">Подпишитесь на новости</h3>
      <p className="text-gray-600 mb-6 text-center">Получайте уведомления о новых курсах и специальных предложениях</p>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Имя</FormLabel>
                <FormControl>
                  <Input placeholder="Введите ваше имя" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="example@mail.ru" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <Button 
            type="submit" 
            className="w-full bg-purple-600 hover:bg-purple-700"
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Отправка...' : 'Подписаться'}
          </Button>
        </form>
      </Form>
    </div>
  );
}
