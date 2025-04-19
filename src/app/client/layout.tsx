'use client';

import { ClientAuthProvider } from './context/client-auth-context';
import { AppSidebar } from '@/components/layouts/sidebar-client/app-sidebar-client';
import { usePathname } from 'next/navigation';
import { HomeIcon, Signature, File } from 'lucide-react';
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { Separator } from '@/components/ui/separator';
import { ProjectApi } from '@/services/services/project-api';
import React from 'react';
const ClientLayout = ({ children }: { children: React.ReactNode }) => {
  const [formattedPathName, setFormattedPathName] = React.useState<string>('');
  const [menuItems, setMenuItems] = React.useState<
    {
      title: string;
      href: string;
      icon: React.ReactNode;
    }[]
  >([
    {
      title: 'Projects',
      href: '/client',
      icon: <File />,
    },
  ]);
  const pathname = usePathname();

  React.useEffect(() => {
    const formatPathName = async () => {
      console.log(pathname);
      if (pathname.startsWith('/client') && pathname.split('/').length === 3) {
        const pathParts = pathname.split('/');
        const projectId = pathParts.pop();
        const projectApi = new ProjectApi();
        const response = await projectApi.getPopulatedProjectById(
          projectId as string,
        );
        let newFormattedPathName =
          pathParts.join('/') + '/' + response.data.name;
        setFormattedPathName(newFormattedPathName);
      } else {
        setFormattedPathName(pathname);
      }
    };
    formatPathName();
  }, [pathname]);

  return (
    <ClientAuthProvider>
      <SidebarProvider>
        <AppSidebar menuItems={menuItems} activePath={pathname || ''} />
        <SidebarInset>
          <header className="flex h-16 shrink-0 items-center gap-2 border-b">
            <div className="flex items-center gap-2 px-3">
              <SidebarTrigger />
              <Separator orientation="vertical" className="mr-2 h-4" />
              <Breadcrumb>
                <BreadcrumbList>
                  {formattedPathName.split('/').map((segment, index) => {
                    if (index === 0) return null;
                    const href = `/${pathname
                      .split('/')
                      .slice(1, index + 1)
                      .join('/')}`;
                    return (
                      <React.Fragment key={segment}>
                        <BreadcrumbItem className="hidden md:block">
                          <BreadcrumbLink href={href}>{segment}</BreadcrumbLink>
                        </BreadcrumbItem>
                        {index < formattedPathName.split('/').length - 1 && (
                          <BreadcrumbSeparator className="hidden md:block" />
                        )}
                      </React.Fragment>
                    );
                  })}
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </header>
          <div className="flex flex-1 flex-col gap-4 p-4">{children}</div>
        </SidebarInset>
      </SidebarProvider>
    </ClientAuthProvider>
  );
};

export default ClientLayout;
