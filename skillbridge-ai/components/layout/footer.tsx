import Link from "next/link";
import { Github } from "lucide-react";
import { FOOTER_COLUMNS } from "@/constants/landing";

export function Footer() {
  return (
    <footer className="border-t border-border/40">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          <div className="col-span-2 sm:col-span-1">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              SkillBridge<span className="text-foreground/50">AI</span>
            </Link>
            
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="mt-4 inline-flex text-foreground/60 hover:text-foreground"
            >
              <Github className="h-5 w-5" />
            </a>
          </div>

          {FOOTER_COLUMNS.map((column) => (
            <div key={column.title}>
              <h4 className="text-sm font-medium">{column.title}</h4>
              <ul className="mt-4 space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    
                      href={link.href}
                      className="text-sm text-foreground/60 hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="mt-12 text-xs text-foreground/40">
          © {new Date().getFullYear()} SkillBridge AI. All rights reserved.
        </p>
      </div>
    </footer>
  );
}