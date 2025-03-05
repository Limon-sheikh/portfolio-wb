
import { useState } from "react";

const List = () => {
  const initialItems = ["Home", "About", "Services", "Projects", "Blog", "Contact"];
  const [items] = useState(initialItems);

  return (
    <div>
      <ul className="flex gap-6 text-gray-800 uppercase">
        {items.map((item, index) => (
            <li key={index} className="hover:text-yellow-400 transition-all duration-30 font-[600]">
              <a href="#">{item}</a>
            </li>
        ))}
      </ul>
    </div>
  );
};

export default List;

