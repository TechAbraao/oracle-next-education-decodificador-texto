/* eslint-disable react/prop-types */
const Button = ({buttonText = "Indefinido"}) => {
   // Busquei, através desse botão, inserir uma nova proposta de estilização no TailwindCSS.
   const buttonPrimary = "bg-none w-72 h-16 text-2xl flex justify-center items-center border-4 text-dtColorOne font-semibold border-dtColorOne text-dtColorOne transition duration-400 ease-in-out";
   //
   const buttonPrimaryHover = "hover:bg-dtColorOne hover:text-white";
   //
   return (
      <button
         className={`${buttonPrimary} ${buttonPrimaryHover}`}
      >
         {buttonText}
      </button>
   );
};
export default Button;
