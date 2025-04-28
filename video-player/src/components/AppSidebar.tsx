import {
  CalendarRange,
  ClockIcon,
  Command,
  LayoutGrid,
  LinkIcon,
  LucideIcon,
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarRail,
  useSidebar,
} from "./ui/sidebar";
import { Link, useLocation } from "react-router-dom";

type ItemType = {
  title: string;
  url: string;
  icon: LucideIcon;
  separator?: boolean;
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const location = useLocation();
  const { state } = useSidebar();

  const pathname = location.pathname;

  const items: ItemType[] = [
    {
      title: "Music for work",
      url: "/music-for-work",
      icon: LinkIcon,
    },
    {
      title: "Study",
      url: "/study",
      icon: CalendarRange,
    },
    {
      title: "Frontend dev",
      url: "/frontend-dev",
      icon: CalendarRange,
    },
    {
      title: "Programming",
      url: "/programming",
      icon: LayoutGrid,
      separator: true,
    },

    {
      title: "Methodology",
      url: "/methodology",
      icon: ClockIcon,
    },
  ];

  return (
    <Sidebar
      collapsible="icon"
      variant="sidebar"
      className={`${
        state !== "collapsed" ? "w-[260px]" : ""
      } !bg-white !border-[#D4E162]`}
      {...props}
    >
      <SidebarHeader
        className={`!py-2 relative ${
          state !== "collapsed" ? "!px-5" : "!px-3"
        }`}
      >
        <div className="flex h-[50px] items-center gap-1 justify-start ">
          <div
            className="flex aspect-square size-6 items-center 
          justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"
          >
            <Command className="size-4" />
          </div>
          {state !== "collapsed" && (
            <div className="grid flex-1 text-left text-2xl leading-tight ml-px">
              <h2 className="truncate font-medium">Video Player</h2>
            </div>
          )}
        </div>
      </SidebarHeader>
      <SidebarContent className="!p-[4px_8px] dark:bg-background">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton
                className="hover:!bg-[#e5efff] dark:hover:bg-gray-400 data-[active=true]:!bg-[#e5efff] dark:data-[active=true]:!bg-gray-500 dark:hover:text-gray-800 active:bg-amber-600"
                isActive={item.url === pathname}
                asChild
              >
                <Link
                  to={item.url}
                  className="!text-[16px] !p-[12px_8px_12px_16px] min-h-[48px] rounded-[8px]
                  !font-semibold dark:text-gray-100 dark:hover:bg-gray-900
                  "
                >
                  <item.icon className="!w-5 !h-5 !stroke-2" />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
