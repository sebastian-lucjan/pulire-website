import { formButtonsData } from 'data/buttons';

const ButtonFormSubmit = () => {
  return (
    <button
      type="submit"
      className="px-4 py-3 mt-5 w-full text-lg font-bold text-white bg-neutral-800 rounded-md disabled:opacity-60 xs:w-recaptcha hover:bg-neutral-700">
      {formButtonsData.submit}
    </button>
  );
};

export default ButtonFormSubmit;
