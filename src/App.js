import Header from "./Header"
import Footer from "./Footer"

function App() {
  return (//ahora es parecido a html,despues del fragmento
    <> 
    
       <h1>lo lograremos!</h1>
       <h2>Dios con nosotros</h2>
       //ojo uso de style

       <Header/>

        <main className="main" style ={{color: "black", backgroundColor: "yellow"}}>
          <h2>Soy main,soy home</h2>
        </main>
        
      <Footer/>
     </>
    
  );
}

export default App;
