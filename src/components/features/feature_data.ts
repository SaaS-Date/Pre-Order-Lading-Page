import { CheckCircle, Settings, Users } from "lucide-react";

export const features = [
  {
    title: "1. Preenchimento de formulário",
    description: "Siga as etapas preenchendo o formulário com seus dados",
    icon: CheckCircle,
  },
  {
    title: "2. Pagamento seguro",
    description: "Faça o pagamento de forma segura com Cartão de Crédito ou PIX",
    icon: Settings,
    hasBorder: false
  },
  {
    title: "3. Geramos seu código QR e link",
    description: "Você receberá um QR code e um link via email para acessar a página personalizada",
    icon: Users,
    hasBorder: false
  },
  {
    title: "4. Envie para sua pessoa especial",
    description: "Faça uma surpresa compartilhando o link ou o QR code",
    icon: Users,
    hasBorder: false 
  }
];
