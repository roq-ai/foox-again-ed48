interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Admin'],
  customerRoles: ['Freelancer'],
  tenantRoles: ['Admin', 'Recruiter'],
  tenantName: 'Company',
  applicationName: 'Foox again',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['Manage own freelance profile', 'Apply for jobs', 'View job details', 'View own applications'],
  ownerAbilities: [
    'Manage country information',
    'Manage freelance profiles',
    'Manage job postings',
    'Manage applications',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/f35824f6-c16c-4190-8f23-a49f12367e1a',
};
