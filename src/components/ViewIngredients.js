import React, {useRef} from 'react'
import { TopNav } from './TopNav';
import { NavLink } from 'react-router-dom';
import viewpicture from './images/viewpicture.png';
import viewpancake2 from './images/viewpancake2.png';





export const ViewIngredients = () => {

  const pancakeEl = useRef();


  return (
    <React.Fragment>
      <TopNav/>
        <h1 style={{position:"relative",top:"50px", left:"15%",color:"green",}}>Ingredients</h1>
        <ul style={{fontWeight:"600",fontSize:"1.4rem",}}>
          <li>1 cup all-purpose flour</li>
          <li>2 tablespoon with white sugar</li>
          <li>2 teaspons baking powder</li>
          <li>1 teaspons salt, or to taste</li>
          <li>1 cup milk</li>
          <li>2 tablespoons vegaetable oil</li>
          <li>1 egg, beaten</li>
        </ul>

        <img src={viewpicture} style={{ position: "relative", height: "25rem",borderRadius:"50%", width: "35%", left: "70%", top: "-260px", }} alt='viewpicture.png' />
        <img src={viewpancake2} style={{ position: "relative", height: "2",borderRadius:"50%", width: "35%", left: "-25%", top: "490px", }} alt='viewpancake2.png' />

        <h3  style={{position:"relative", left:"35%", top:"-190px",}}>Follow these Steps to make your yummy pancake</h3>

        <h4 style={{position:"relative", left:"60%", top:"-100px", color:"green",fontSize:"1.9rem",}}>Step 1</h4>
        <p style={{position:"relative", left:"60%", top:"-80px",fontSize:"1.3rem",}}>Combine flour, sugar, baking powder, and salt in<br/> a large bowl. Make a well in the center, and pour in<br/> milk, oil, and egg. Mix until smooth.</p>
        <h4 style={{position:"relative", left:"60%", top:"-50px", color:"green",fontSize:"1.9rem",}}>Step 2</h4>
        <p style={{position:"relative", left:"60%", top:"-40px",fontSize:"1.3rem",}}>Heat a lightly oiled griddle or frying pan over medium-high heat.<br/> Pour or scoop batter onto the griddle, using approximately 1/4<br/> cup for each pancake; cook until bubbles form and the edges are dry,<br/> 1 to 2 minutes. Flip and cook until browned on the other side.<br/> Repeat with remaining batter.<br/> a large bowl. Make a well in the center, and pour in<br/> milk, oil, and egg. Mix until smooth.</p>
        <h4 style={{position:"relative", left:"60%", top:"-20px", color:"green",fontSize:"1.9rem",}}>Step 2</h4>
        <p style={{position:"relative", left:"60%", top:"-10px",fontSize:"1.3rem",}}> Serve hot and <br/>enjoy!</p>

        <button onClick={() => pancakeEl.current.click()} type='button' style={{position:"relative", left:"90%",backgroundColor:"green",color:"white",borderRadius:"20px",width:"10%",}}>Watch Video <NavLink ref={pancakeEl} to="/Video" hidden /></button>
    </React.Fragment> 
  )
}
