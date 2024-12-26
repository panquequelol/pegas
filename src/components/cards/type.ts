export type Offer = {
  title: string;
  company: string;
  content: string;
  url: string;
  type: "NEWGRAD" | "INTERNSHIP" | "JUNIOR";
  salary?: string;
};
