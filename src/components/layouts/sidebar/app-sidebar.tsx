import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from '@/components/ui/sidebar';
import { Icons } from '../../icons';
import { NavUser } from './nav-user';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import { useAuth } from '@/app/admin/context/auth-context';

export function AppSidebar({
  menuItems,
  activePath,
}: {
  menuItems: Array<{
    group: string;
    children?: Array<{
      title: string;
      href: string;
      icon: React.ReactNode;
    }>;
  }>;
  activePath: string;
}) {
  const { user, logout } = useAuth();

  const isPathActive = (href: string) => {
    return activePath === href;
  };

  return (
    <Sidebar collapsible="icon">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg">
                  <Icons.logo />
                </div>
                <div className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-semibold">Ensemble AI</span>
                  <span className="truncate text-xs">Enterprise</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        {menuItems.map((menuGroup) => (
          <SidebarGroup key={menuGroup.group}>
            <SidebarGroupLabel>{menuGroup.group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuGroup.children?.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton
                      asChild
                      isActive={isPathActive(item.href)}
                      className={cn({ 'bg-gray-100': isPathActive(item.href) })}
                    >
                      <Link href={item.href}>
                        {item.icon}
                        <span>{item.title}</span>
                      </Link>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        {user && user.email !== 'demo@tryensemble.com' ? (
          <NavUser user={user} logout={logout} />
        ) : (
          <SidebarContent>
            <TooltipProvider disableHoverableContent>
              <Tooltip delayDuration={100}>
                <TooltipTrigger asChild>
                  <Link href="/admin/login">
                    <Button
                      variant="outline"
                      className="w-full justify-center h-10 mt-5"
                    >
                      <span className={cn('mr-4')}>
                        <LogOut size={18} />
                      </span>
                      <p className={cn('whitespace-nowrap', 'opacity-100')}>
                        Log in
                      </p>
                    </Button>
                  </Link>
                </TooltipTrigger>
                <TooltipContent side="right">Log in</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </SidebarContent>
        )}
      </SidebarFooter>
    </Sidebar>
  );
}
