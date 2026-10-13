type SectionHeadingProps = {
  index: string;
  title: string;
};

export default function SectionHeading({ index, title }: SectionHeadingProps) {
  return (
    <div className="section-header">
      <div className="section-index">{index}</div>
      <div className="section-label">{title}</div>
    </div>
  );
}
