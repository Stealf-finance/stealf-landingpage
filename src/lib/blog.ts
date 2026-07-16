export type Post = {
  title: string;
  date: string;
  excerpt: string;
  author: string;
  href: string;
};

// Each post links straight out to the published article.
// Add new posts here, newest first.
export const posts: Post[] = [
  {
    title: "Private digital cash.",
    date: "2026-07-16",
    excerpt: "Introducing Stealf. Here is what we're building and why.",
    author: "Stealf team",
    href: "https://medium.com/p/bd5a6f88da14",
  },
  {
    title: "The Walls Have Ears",
    date: "2026-03-20",
    excerpt:
      "On surveillance, selfhood, and why privacy is the last room where you get to be free.",
    author: "Sammie (Community Stealf)",
    href: "https://kenpachoo.substack.com/p/the-walls-have-ears",
  },
];

export function formatDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return d.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}
