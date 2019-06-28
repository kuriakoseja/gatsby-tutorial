import React from "react"
import './section.css'

export default function() {
  return (
    <section>
      <div className="container ">
        <div className="row">
          <div className="col">
            <h1 className="title">Hello world section title</h1>
          </div>
        </div>
        <div className="row ma-b-30-px">
          <div className="col s4">Hello</div>
          <div className="col s4">Hello</div>
          <div className="col s4">Hello</div>
        </div>
      </div>
    </section>
  )
}
