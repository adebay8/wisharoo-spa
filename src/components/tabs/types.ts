export interface TabsProps {
  tabs: {
    id: number;
    name: string;
    svg: React.ReactNode;
    slug: string;
  }[];
}
