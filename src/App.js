import React, { useState } from 'react'
import { extent, range, scaleLinear } from "d3"
import { flatten } from "lodash-es"
import samples from "./samples"

import './App.scss'

const countsColorScale = scaleLinear()
  .domain([0, 0.6])
  .range(["#fff", "#45a"])

function App() {
  const [sampleIndex, setSampleIndex] = useState(0)
  const sample = samples[sampleIndex]

  const onChooseSampleIndex = i => () => {
    window.scrollTo({top: 0})
    setSampleIndex(i)
  }

  return (
    <div className="App">
      <div className="App__main">
        <div className="App__content">
          <header className="App__header">
            <h1>{ sample.name }</h1>
          </header>

          {/* <div className="App__text" contentEditable>
            { sample.text }
          </div> */}
          <div className="App__text">
            {sample.paragraphs.map((sentences, i) => (
              <p key={i}>
                {sentences.map((sentence, sentenceI) => (
                  <span className="App__sentence" key={sentenceI} style={{ "--length-color": lengthScale(sentence.split(" ").length) }}>
                    { sentence }
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>

        <div className="App__sidebar">
          <p>
            How do different writers vary their sentence length?
            See how some authors play with different lengths, while others stick with one.
            <br />
            <br />
            Made with 💗 by <a href="http://wattenberger.com">Amelia Wattenberger</a>,
            <br />
            inspired by <a href="https://twitter.com/misscrisp/status/1202792895448662016">this tweet</a>
          </p>
          <h6>Samples</h6>
          {samples.map(({ name, author, text, counts }, i) => (
            <button className={`App__sidebar__sample App__sidebar__sample--is-${i == sampleIndex ? 'selected' : 'not-selected'}`} onClick={onChooseSampleIndex(i)}>
              <div className="App__sidebar__sample__name">
                { name }
              </div>
              <div className="App__sidebar__sample__author">
                { author }
              </div>
              <div className="App__sidebar__sample__counts">
                {counts.map(count => (
                  <div className="App__sidebar__sample__counts__item" style={{
                    background: countsColorScale(count)
                  }} />
                ))}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

const colors = ["#c7ecee", "#778beb", "#f7d794", "#63cdda", "#cf6a87", "#e77f67", "#786fa6", "#FDA7DF", "#4b7bec", "#778ca3"]
const lengthScale = scaleLinear()
  .domain([0, 27])
  .range(["#a29bfe", "#fff"])
// const lengthScale = len => (
//   len <=  3 ? "#c7ecee" :
//   len <=  6 ? "#FDA7DF" :
//   len <= 10 ? "#778beb" :
//   len <= 15 ? "#63cdda" :
//   len <= 20 ? "#786fa6" :
//   len <= 30 ? "#cf6a87" :
//   "#4b7bec"
// )
