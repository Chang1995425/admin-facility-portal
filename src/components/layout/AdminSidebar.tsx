import { Building2, Users, Calendar, Settings, LogOut, BarChart3 } from 'lucide-react';
import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { useAuth } from '@/components/auth/AuthProvider';
import { Button } from '@/components/ui/button';

const menuItems = [
  { title: 'Overview', url: '/dashboard', icon: BarChart3 },
  { title: 'Facilities', url: '/dashboard/facilities', icon: Building2 },
  { title: 'Bookings', url: '/dashboard/bookings', icon: Calendar },
  { title: 'Users', url: '/dashboard/users', icon: Users },
  { title: 'Settings', url: '/dashboard/settings', icon: Settings },
];

export function AdminSidebar() {
  const { state } = useSidebar();
  const { signOut, userRole } = useAuth();
  const location = useLocation();
  const collapsed = state === 'collapsed';

  const filteredItems = menuItems.filter(item => {
    if (userRole === 'facility_owner' && item.title === 'Users') {
      return false; // Facility owners can't manage all users
    }
    return true;
  });

  const getNavClassName = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'bg-muted text-primary font-medium' : 'hover:bg-muted/50';

  return (
    <Sidebar className={collapsed ? 'w-14' : 'w-60'}>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-lg font-bold">
            {!collapsed && 'Admin Portal'}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {filteredItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      end={item.url === '/dashboard'}
                      className={getNavClassName}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <div className="mt-auto p-4">
          <Button
            variant="outline"
            onClick={signOut}
            className="w-full justify-start"
            size={collapsed ? "icon" : "default"}
          >
            <LogOut className="h-4 w-4" />
            {!collapsed && <span className="ml-2">Sign Out</span>}
          </Button>
        </div>
      </SidebarContent>
    </Sidebar>
  );
}