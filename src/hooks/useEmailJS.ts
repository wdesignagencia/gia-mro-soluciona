import { useState } from 'react';
import emailjs from '@emailjs/browser';

interface EmailData {
  name: string;
  whatsapp: string;
}

interface QuickLeadData {
  name: string;
  whatsapp: string;
  product: string;
}

interface ContactLeadData {
  nomeCompleto: string;
  empresa: string;
  telefone: string;
  email: string;
  produtoInteresse: string;
  quantidadeEspecificacoes?: string;
  mensagem: string;
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

  const sendQuickLead = async (data: QuickLeadData) => {
    setIsLoading(true);
    setError(null);

    try {
      const templateParams = {
        from_name: data.name,
        name: data.name,
        whatsapp: data.whatsapp,
        product: data.product,
        to_email: 'vendas@giamro.com.br',
        message: `Novo lead - Formulário Rápido!\n\nNome: ${data.name}\nWhatsApp: ${data.whatsapp}\nProduto: ${data.product}\n\nOrigem: Formulário Rápido Homepage`
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

  const sendContactLead = async (data: ContactLeadData) => {
    setIsLoading(true);
    setError(null);

    try {
      const templateParams = {
        from_name: data.nomeCompleto,
        name: data.nomeCompleto,
        empresa: data.empresa,
        telefone: data.telefone,
        email: data.email,
        whatsapp: data.telefone,
        product: data.produtoInteresse,
        quantidadeEspecificacoes: data.quantidadeEspecificacoes || '',
        to_email: 'vendas@giamro.com.br',
        message: `Novo lead - Formulário Completo!\n\nNome: ${data.nomeCompleto}\nEmpresa: ${data.empresa}\nTelefone: ${data.telefone}\nEmail: ${data.email}\nProduto: ${data.produtoInteresse}\nEspecificações: ${data.quantidadeEspecificacoes || 'Não informado'}\nMensagem: ${data.mensagem}\n\nOrigem: Página de Contato`
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

  return { sendLead, sendQuickLead, sendContactLead, isLoading, error };
};