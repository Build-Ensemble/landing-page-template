import { DollarSign, FileText, Folder, Settings, FileScan } from 'lucide-react';

// Define a type for the menu items
type MenuItem = {
  title: string;
  icon: React.ReactNode;
  href: string;
  children?: MenuItem[];
};

export const menuItems: {
  group: string;
  children?: MenuItem[];
}[] = [
  {
    group: 'Documents',
    children: [
      {
        title: 'Statements',
        icon: <FileText />,
        href: '/admin',
      },
      {
        title: 'Proof Documents',
        icon: <FileScan />,
        href: '/admin/proof-documents',
      },
    ],
  },
  {
    group: 'Other',
    children: [
      {
        title: 'Tax Documents',
        icon: <Folder />,
        href: '/admin/tax-documents',
      },
      {
        title: 'Financial Statements',
        icon: <DollarSign />,
        href: '/admin/financial-statements',
      },
    ],
  },
  {
    group: 'Settings',
    children: [
      {
        title: 'Settings',
        icon: <Settings />,
        href: '/admin/settings',
      },
    ],
  },
];
