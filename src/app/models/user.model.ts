export interface User {
    uid?: string;  // O UID pode ser opcional porque será gerado automaticamente pelo Firebase
    name: string;
    email: string;
    phone: string;
  }
  