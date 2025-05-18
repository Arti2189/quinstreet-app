import { useState } from 'react';
import type { FormData } from '../schemas/formSchema';

export const useFormSubmit = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submitForm = async (data: FormData) => {
    setIsSubmitting(true);
    setError(null);
    
    const timeoutPromise = new Promise<Response>((_, reject) => {
      setTimeout(() => {
        reject(new Error('Request timed out after 60 seconds'));
      }, 6000);
    });

     try {
      await Promise.race([
        fetch(
          'https://formsws-hilstaging-com-0adj9wt8gzyq.runscope.net/solar',
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          }
        ),
        timeoutPromise
      ]);
      
      // We're ignoring errors as per requirements
      setIsSubmitted(true);
    } catch  {
      // Ignore any errors as per requirements
      setIsSubmitted(true); // Still mark as submitted even if there's an error
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    submitForm,
    isSubmitting,
    isSubmitted,
    error,
  };
};