"use client"
import React from "react";
import { LineChart, Home, Package, ShoppingCart, Users2 } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Package2 } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

function Sidebar() {
    const pathname = usePathname()
  return (
    <aside className="fixed inset-y-0 left-0 z-10 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          href="/dashboard"
          className={`flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
            pathname === "/dashboard"
              ? "group bg-primary rounded-full text-lg font-semibold text-primary-foreground gap-2 md:text-base"
              : ""
          }`}
        >
          <Package2 className="h-4 w-4 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard"
                className={`flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    pathname === "/dashboard"
                      ? "group bg-primary rounded-full text-lg font-semibold text-primary-foreground gap-2 md:text-base"
                      : ""
                  }`}
              >
                <Home className="h-5 w-5" />
                <span className="sr-only">Dashboard</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Dashboard</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent text-accent-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <ShoppingCart className="h-5 w-5" />
                <span className="sr-only">Orders</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Orders</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Package className="h-5 w-5" />
                <span className="sr-only">Products</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Products</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="/dashboard/contact"
                className={`flex items-center justify-center h-9 w-9 rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 ${
                    pathname === "/dashboard/contact"
                      ? "group bg-primary rounded-full text-lg font-semibold text-primary-foreground gap-2 md:text-base"
                      : ""
                  }`}
              >
                <Users2 className="h-5 w-5" />
                <span className="sr-only">Customers</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Customers</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Link
                href="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <LineChart className="h-5 w-5" />
                <span className="sr-only">Analytics</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Analytics</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside>
  );
}

export default Sidebar;
