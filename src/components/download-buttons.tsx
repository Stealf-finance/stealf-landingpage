import { siteConfig } from "@/lib/config";
import Link from "next/link";

function TestFlightIcon({ className }: { className?: string }) {
  // Apple logo (TestFlight beta on iOS)
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
      <path d="M12.152 6.896c-.948 0-2.415-1.078-3.96-1.04-2.04.027-3.91 1.183-4.961 3.014-2.117 3.675-.546 9.103 1.519 12.09 1.013 1.454 2.208 3.09 3.792 3.039 1.52-.065 2.09-.987 3.935-.987 1.831 0 2.35.987 3.96.948 1.637-.026 2.676-1.48 3.676-2.948 1.156-1.688 1.636-3.325 1.662-3.415-.039-.013-3.182-1.221-3.22-4.857-.026-3.04 2.48-4.494 2.597-4.559-1.429-2.09-3.623-2.324-4.39-2.376-2-.156-3.675 1.09-4.61 1.09zM15.53 3.83c.843-1.012 1.4-2.427 1.245-3.83-1.207.052-2.662.805-3.532 1.818-.78.896-1.454 2.338-1.273 3.714 1.338.104 2.715-.688 3.559-1.701z" />
    </svg>
  );
}

function GooglePlayIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="#4285F4" className={className} aria-hidden="true">
      <path d="M22.018 13.298l-3.919 2.218-3.515-3.493 3.543-3.521 3.891 2.202a1.49 1.49 0 0 1 0 2.594zM1.337.924a1.486 1.486 0 0 0-.112.568v21.017c0 .217.045.419.124.6l11.155-11.087L1.337.924zm12.207 10.065l3.258-3.238L3.45.195a1.466 1.466 0 0 0-.946-.179l11.04 10.973zm0 2.067l-11 10.933c.298.036.612-.016.906-.183l13.324-7.54-3.23-3.21z" />
    </svg>
  );
}

function ApkIcon({ className }: { className?: string }) {
  // Android robot (APK direct install)
  return (
    <svg viewBox="0 0 24 24" fill="#3DDC84" className={className} aria-hidden="true">
      <path d="M17.523 15.3414c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993.0001.5511-.4482.9997-.9993.9997m-11.046 0c-.5511 0-.9993-.4486-.9993-.9997s.4482-.9993.9993-.9993c.5511 0 .9993.4482.9993.9993 0 .5511-.4483.9997-.9993.9997m11.4045-6.02l1.9973-3.4592a.416.416 0 00-.1521-.5676.416.416 0 00-.5676.1521l-2.0223 3.503C15.5902 8.2439 13.8533 7.8508 12 7.8508s-3.5902.3931-5.1367 1.0989L4.841 5.4467a.4161.4161 0 00-.5677-.1521.4157.4157 0 00-.1521.5676l1.9973 3.4592C2.6889 11.1867.3432 14.6589 0 18.761h24c-.3435-4.1021-2.6892-7.5743-6.1185-9.4396" />
    </svg>
  );
}

const ICONS: Record<string, (props: { className?: string }) => React.ReactElement> = {
  ios: TestFlightIcon,
  android: GooglePlayIcon,
  apk: ApkIcon,
};

export function DownloadButtons() {
  const { download } = siteConfig.hero;

  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 w-full">
        {download.apps.map((app) => {
          const Icon = ICONS[app.id];
          return (
            <Link
              key={app.id}
              href={app.href}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center gap-3 h-12 px-5 rounded-xl border border-border bg-accent w-full sm:w-auto justify-center sm:justify-start hover:bg-accent/60 transition-all ease-out active:scale-95"
            >
              {Icon && <Icon className="size-6 shrink-0" />}
              <span className="flex flex-col items-start leading-none">
                <span className="text-[10px] text-muted-foreground tracking-tight">
                  {app.sublabel}
                </span>
                <span className="text-sm font-medium text-foreground tracking-tight">
                  {app.label}
                </span>
              </span>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
