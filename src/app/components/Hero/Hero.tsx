import React from 'react'
import cssStyle from "./hero.module.css"

function Hero() {
  return (
    <>
    <div className={cssStyle.hero}>
    <h1 className={cssStyle.h1}>Hero Section</h1>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis a fugiat fugit, accusantium quis atque vero facere cumque voluptas excepturi, ipsum doloremque. Provident, illum vitae? Corporis aperiam culpa asperiores quos!</p>
    </div>
    </>
  )

}

export default Hero