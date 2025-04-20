// import {
//   Sidebar,
//   SidebarContent,
//   SidebarFooter,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarHeader,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from '@/components/ui/sidebar';
// import { Icons } from '../../icons';
// import { NavUser } from './nav-user';
// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
// import { Button } from '@/components/ui/button';
// import { cn } from '@/lib/utils';
// import { LogOut } from 'lucide-react';
// import Link from 'next/link';

// export function DemoAppSidebar({
//   menuItems,
//   activePath,
// }: {
//   menuItems: Array<{
//     title: string;
//     href: string;
//     icon: React.ReactNode;
//   }>;
//   activePath: string;
// }) {
//   const getTabMatch = (item: { href: string }) => {
//     // Find the longest matching href that matches the active path
//     const matchingHrefs = menuItems
//       .filter((menuItem) => activePath.startsWith(menuItem.href))
//       .map((item) => item.href);
//     return (
//       matchingHrefs.length > 0 &&
//       item.href ===
//         matchingHrefs.reduce((a, b) => (a.length > b.length ? a : b))
//     );
//   };
//   return (
//     <Sidebar collapsible="icon">
//       <SidebarHeader>
//         <SidebarMenu>
//           <SidebarMenuItem>
//             <SidebarMenuButton size="lg" asChild>
//               <a href="#">
//                 <div className="flex aspect-square size-8 items-center justify-center rounded-lg ">
//                   <Icons.logo />
//                 </div>
//                 <div className="grid flex-1 text-left text-sm leading-tight">
//                   <span className="truncate font-semibold">Ensemble AI</span>
//                   <span className="truncate text-xs">Enterprise</span>
//                 </div>
//               </a>
//             </SidebarMenuButton>
//           </SidebarMenuItem>
//         </SidebarMenu>
//       </SidebarHeader>
//       <SidebarContent>
//         <SidebarGroup>
//           <SidebarGroupLabel>Application</SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {menuItems.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   <SidebarMenuButton
//                     asChild
//                     isActive={getTabMatch(item)}
//                     className={cn({ 'bg-gray-100': getTabMatch(item) })}
//                   >
//                     <Link href={item.href}>
//                       {/* {item.href} */}
//                       {/* {activePath} */}
//                       {item.icon}
//                       <span>{item.title}</span>
//                     </Link>
//                   </SidebarMenuButton>
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>
//       <SidebarFooter>
//         <SidebarContent>
//           <TooltipProvider disableHoverableContent>
//             <Tooltip delayDuration={100}>
//               <TooltipTrigger asChild>
//                 <Link href="login">
//                   <Button
//                     variant="outline"
//                     className="w-full justify-center h-10 mt-5"
//                   >
//                     <span className={cn('mr-4')}>
//                       <LogOut size={18} />
//                     </span>
//                     <p className={cn('whitespace-nowrap', 'opacity-100')}>
//                       Log in
//                     </p>
//                   </Button>
//                 </Link>
//               </TooltipTrigger>
//               <TooltipContent side="right">Log in</TooltipContent>
//             </Tooltip>
//           </TooltipProvider>
//         </SidebarContent>
//       </SidebarFooter>
//     </Sidebar>
//   );
// }
