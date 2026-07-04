function SectionStarter({ sectionName, className }) {
  return (
    <div
      className={`text-white ${className} font-inter font-semibold text-xl w-full flex justify-center border-b-2 pb-5 border-dark border-solid`}
    >
      {sectionName}
    </div>
  );
}

export default SectionStarter;
