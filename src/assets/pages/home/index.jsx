import Button from "../../components/button";
import InputArea from "../../components/textArea";


const Home = () => {
   return (
      <section className="w-full h-screen bg-dtColorTwo">
         <div className="w-2/5 h-5/6 flex items-center justify-center flex-col">
            <InputArea />
            <div className="flex m-7 gap-10">
               <Button buttonText="Criptografar"></Button>
               <Button buttonText="Descriptografar"></Button>
            </div>
         </div>
      </section>
   );
};
export default Home;
