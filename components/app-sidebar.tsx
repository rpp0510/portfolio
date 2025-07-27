"use client"

import { Code, Contact, GraduationCap, Home, Info, Lightbulb, Briefcase, Github, Linkedin } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
  SidebarSeparator,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DarkModeToggle } from "./dark-mode-toggle"

const portfolioData = {
  contact: {
    linkedin: "Ritesh-Patil",
    github: "Ritesh-Patil34",
  },
}

const mainNavigation = [
  {
    title: "Home",
    href: "#hero",
    icon: Home,
  },
  {
    title: "About",
    href: "#about",
    icon: Info,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: Code,
  },
  {
    title: "Skills",
    href: "#skills",
    icon: Lightbulb,
  },
  {
    title: "Experience",
    href: "#experience",
    icon: Briefcase,
  },
  {
    title: "Education",
    href: "#education",
    icon: GraduationCap,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: Contact,
  },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarTrigger className="lg:hidden" />
        <h2 className="text-lg font-semibold">Ritesh Patil</h2>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {mainNavigation.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild isActive={pathname === item.href}>
                    <Link href={item.href}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarGroupLabel>Socials</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href={`https://linkedin.com/in/${portfolioData.contact.linkedin}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin />
                    <span>LinkedIn</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <a
                    href={`https://github.com/${portfolioData.contact.github}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github />
                    <span>GitHub</span>
                  </a>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="flex items-center justify-between w-full">
          <span className="text-sm text-muted-foreground">Theme</span>
          <DarkModeToggle />
        </div>
      </SidebarFooter>
    </Sidebar>
  )
}
