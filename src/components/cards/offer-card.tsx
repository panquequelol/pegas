import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/cn";
import type { Offer } from "./type";

function shorten(content: string, length: number): string {
  return content.length > length
    ? content.substring(0, length) + "..."
    : content;
}

export default function OfferCard(props: Offer) {
  return (
    <a
      href={props.url}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "border group hover:opacity-70 duration-200 block p-2 space-y-2",
        {
          "border-lime-700 text-lime-700": props.type === "INTERNSHIP",
          "border-blue-700 text-blue-700": props.type === "NEWGRAD",
          "border-purple-700 text-purple-700": props.type === "JUNIOR",
        }
      )}
    >
      <h1 className="text-lg">{shorten(props.title, 35)}</h1>
      <p className="opacity-70">{shorten(props.content, 133)}</p>
      <div className="flex justify-between items-end">
        <div>
          <h2 className="whitespace-nowrap">{props.company}</h2>
          {props.salary && <p>{props.salary}</p>}
        </div>
        <ArrowUpRight className="h-10 w-10 stroke-1 group-hover:translate-x-1 group-hover:-translate-y-1 duration-200" />
      </div>
    </a>
  );
}
