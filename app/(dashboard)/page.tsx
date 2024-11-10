import { GetFormStats } from "@/actions/form";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";
import { Suspense } from "react";
import { LuView } from "react-icons/lu";
import { FaWpforms } from "react-icons/fa";
import { HiCursorClick } from "react-icons/hi";
import { TbArrowBounce } from "react-icons/tb";
import { Separator } from "@/components/ui/separator";

export default function Home() {
  return (
    <div className="container pt-4 mx-auto">
      <Suspense fallback={<StatsCards loading={true} />}>
        <CardStatsWrapper />
      </Suspense>
      <Separator className="my-6" />
      <h2 className="text-4xl font-bold col-span-2">Your Forms</h2>
      <Separator className="my-6" />
    </div>
  );
}

async function CardStatsWrapper() {
  const stats = await GetFormStats();
  return <StatsCards loading={false} stats={stats} />;
}

interface IStatsCardsProps {
  loading: boolean;
  stats?: Awaited<ReturnType<typeof GetFormStats>>;
}

function StatsCards(props: IStatsCardsProps) {
  const { loading, stats } = props;

  const statsData = [
    {
      title: "Total Visits",
      icon: <LuView className="text-blue-600" />,
      helper: "Total number of visits to your forms",
      value: stats?.visits.toLocaleString() ?? "0",
      className: "shadow-md shadow-blue-600",
    },
    {
      title: "Total Submissions",
      icon: <FaWpforms className="text-yellow-600" />,
      helper: "Total number of submissions to your forms",
      value: stats?.submissions.toLocaleString() ?? "0",
      className: "shadow-md shadow-yellow-600",
    },
    {
      title: "Submission Rate",
      icon: <HiCursorClick className="text-green-600" />,
      helper: "Total number of submissions to your forms",
      value: stats?.submissionRate.toLocaleString() + "%",
      className: "shadow-md shadow-green-600",
    },
    {
      title: "Bounced Rate",
      icon: <TbArrowBounce className="text-red-600" />,
      helper: "Total number of bounced submissions to your forms",
      value: stats?.bounceRate.toLocaleString() + "%",
      className: "shadow-md shadow-red-600",
    },
  ];

  return (
    <div
      className="w-full pt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4"
      role="region"
      aria-label="Statistics Dashboard"
    >
      {statsData.map((stat) => (
        <StatsCard key={stat.title} {...stat} loading={loading} />
      ))}
    </div>
  );
}

interface IStatsCardProps {
  title: string;
  icon: React.ReactNode;
  helper: string;
  value: string;
  loading: boolean;
  className: string;
}

function StatsCard(props: IStatsCardProps) {
  const { title, icon, helper, value, loading, className } = props;

  return (
    <Card className={cn("shadow-md", className)}>
      <CardHeader className="flex flex-row justify-between items-center pb-2">
        <span className="sr-only">{`${title} icon`}</span>
        {icon}
        <CardTitle className="text-sm font-medium text-muted-foreground">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div
          className="text-2xl font-bold flex items-center gap-2"
          aria-live="polite"
        >
          {loading ? (
            <Skeleton className="w-full min-h-5 my-2" aria-hidden="true">
              <span className="sr-only">Loading {title}</span>
            </Skeleton>
          ) : (
            value
          )}
        </div>
        <p className="text-xs text-muted-foreground pt-1">{helper}</p>
      </CardContent>
    </Card>
  );
}
