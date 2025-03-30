// src/components/Widget.tsx

import "./Widget.css";

type Props = {
  title: string;
  content: string;
};

function Widget({ title, content }: Props) {
  return (
    <div className="widget">
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  );
}

export default Widget;
