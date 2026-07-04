function ListElement({ main, elements }) {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="text-[19px] text-[#CDCDCD] font-inter">{main}</h2>
      <ul className="text-[17px] gap-1 font-inter text-[#B3B3B3]">
        {elements.map((el, index) => (
          <li className="list-disc ml-[3%]" key={index}>
            {el}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListElement;
