const Copyrights = ({ white }) => {
  return (
    <div
      className={`flex flex-col p-4 py-2 w-full h-full bg-neutral-${
        white ? '50' : '800'
      } xs:flex-row items-left justify-left xxs:p-6 tablet:px-8`}>
      <p className={`text-xs font-extralight text-neutral-${white ? '300' : '300'}`}>
        Copyright © {new Date().getFullYear()} pulire.co All Rights Reserved
      </p>
    </div>
  );
};

export default Copyrights;
