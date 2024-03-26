"use client";

import Link from "next/link";
import { CardHeader, CardContent, Card } from "@/components/ui/card";
import { ResponsiveLine } from "@nivo/line";
import { ResponsiveBar } from "@nivo/bar";

export default function Component() {
  return (
    <div className="grid grid-rows-[auto 1fr] w-full min-h-screen gap-4 p-4 md:grid-cols-[300px 1fr] md:gap-0">
      <div className="grid grid-rows-[1fr auto] gap-4 md:grid-cols-1 md:grid-rows-1 md:gap-4">
        <div className="flex flex-col gap-2">
          <header className="flex items-center gap-4">
            <Link
              className="flex items-center gap-2 text-lg font-semibold"
              href="/"
            >
              <span>Mood Echo</span>
            </Link>
            <nav className="ml-auto flex items-center gap-4">
              <Link
                className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
                href="logging"
              >
                Journal
              </Link>
              <Link
                className="text-sm font-medium rounded-lg p-2 hover:bg-gray-100 shado w-auto transition-colors duration-150"
                href="analytics"
              >
                Analytics
              </Link>
            </nav>
          </header>
          <div className="grid gap-4 p-4 rounded-lg border border-gray-200 shado">
            <h2 className="text-xl font-semibold">Analytics</h2>
            <div className="grid gap-4">
              <Card>
                <CardHeader className="p-4">
                  <div>My Mood</div>
                  <div>Track your mood over time.</div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="aspect-[1.5] w-full">
                    <LineChart className="aspect-[1.5]" />
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="p-4">
                  <div>Mood Frequency</div>
                  <div>See which moods you experience most.</div>
                </CardHeader>
                <CardContent className="p-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="aspect-[1.5] w-full">
                      <BarChart className="aspect-[1.5]" />
                    </div>
                    <div className="aspect-[1.5] w-full">
                      <BarChart className="aspect-[1.5]" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function BarChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveBar
        data={[
          { name: "Jan", count: 111 },
          { name: "Feb", count: 157 },
          { name: "Mar", count: 129 },
          { name: "Apr", count: 150 },
          { name: "May", count: 119 },
          { name: "Jun", count: 72 },
        ]}
        keys={["count"]}
        indexBy="name"
        margin={{ top: 0, right: 0, bottom: 40, left: 40 }}
        padding={0.3}
        colors={["#2563eb"]}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 4,
          tickPadding: 16,
        }}
        gridYValues={4}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        tooltipLabel={({ id }) => `${id}`}
        enableLabel={false}
        role="application"
        ariaLabel="A bar chart showing data"
      />
    </div>
  );
}

function LineChart(props: any) {
  return (
    <div {...props}>
      <ResponsiveLine
        data={[
          {
            id: "Desktop",
            data: [
              { x: "Jan", y: 43 },
              { x: "Feb", y: 137 },
              { x: "Mar", y: 61 },
              { x: "Apr", y: 145 },
              { x: "May", y: 26 },
              { x: "Jun", y: 154 },
            ],
          },
          {
            id: "Mobile",
            data: [
              { x: "Jan", y: 60 },
              { x: "Feb", y: 48 },
              { x: "Mar", y: 177 },
              { x: "Apr", y: 78 },
              { x: "May", y: 96 },
              { x: "Jun", y: 204 },
            ],
          },
        ]}
        margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
        xScale={{
          type: "point",
        }}
        yScale={{
          type: "linear",
        }}
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 0,
          tickPadding: 16,
        }}
        axisLeft={{
          tickSize: 0,
          tickValues: 5,
          tickPadding: 16,
        }}
        colors={["#2563eb", "#e11d48"]}
        pointSize={6}
        useMesh={true}
        gridYValues={6}
        theme={{
          tooltip: {
            chip: {
              borderRadius: "9999px",
            },
            container: {
              fontSize: "12px",
              textTransform: "capitalize",
              borderRadius: "6px",
            },
          },
          grid: {
            line: {
              stroke: "#f3f4f6",
            },
          },
        }}
        role="application"
      />
    </div>
  );
}
