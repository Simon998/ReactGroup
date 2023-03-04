import Button from '@mui/material/Button';
import ButtonAppBar from "./NavBar";
import SimpleAccordion from "./Accordion";
import "./Styled.scss"

const Styled = ()=> {
    return (
        <section>
        {/*material ui nav-bar*/ }
        <ButtonAppBar />
  
        {/*styling with scss*/}
        <div className="App">
          <div className="box">
            <h1 className="title">Styling with scss</h1>
          </div>
        </div>
  
        {/*styling with tailwind*/}
        <div>
          <p className="text-xl text-green-500">Styling with Tailwind</p>
        </div>
  
        {/*material ui accordion*/ }
        <SimpleAccordion />
  
        {/*material ui button*/ }
        <Button variant="contained" sx={{color: 'black'}}>Contained</Button>
  
      </section> 
    )
}

export default Styled;