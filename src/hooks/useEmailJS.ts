import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  whatsapp: string;
}

export const useEmailJS = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const sendLead = async (data: EmailData) => {
    setIsLoading(true);
    setError(null);

    try {
      const templateParams = {
        from_name: data.name,
        whatsapp: data.whatsapp,
        to_email: 'vendas@giamro.com.br',
        message: `Novo lead capturado via Exit Intent!\n\nNome: ${data.name}\nWhatsApp: ${data.whatsapp}\n\nInteresse: 10% desconto em mangueiras e correias`
      };

      await emailjs.send(
        'service_e373n3h',
        'template_azj8wic', 
        templateParams,
        'ANRLyLt0smdoe_SFk'
      );

      return true;
    } catch (err) {
      setError('Erro ao enviar. Tente novamente.');
      console.error('EmailJS Error:', err);
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  return { sendLead, isLoading, error };
};