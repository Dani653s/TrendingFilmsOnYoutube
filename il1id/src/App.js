import React from "react";
import "./styles.css";

import ReactPlayer from "react-player";

export default function App() {
  return (
    <body>
      <div className="App">
        <h1>Trending films on YouTube</h1>
        <section class="video">
          <div class="distance">
            <p>
              <b> The Devill All The Time </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=EIzazUv2gtI" />
          </div>
          <div class="distance">
            <p>
              <b> Batman </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=Sdp6VL_NBnY" />
          </div>
          <div class="distance">
            <p>
              <b> Disney's Mulan</b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=KK8FHdFluOQ" />
          </div>
          <div class="distance">
            <p>
              <b> Piranha </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=W44fOiJsshg" />
          </div>
          <div class="distance">
            <p>
              <b> Dragon Ball Z </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=rovLs3lIjyo" />
          </div>
          <div class="distance">
            <p>
              <b> Justice League 2 </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=hfPXhhPFtGQ" />
          </div>
          <div class="distance">
            <p>
              <b> Aquaman </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=Nduv5671BRQ" />
          </div>
          <div class="distance">
            <p>
              <b> Venom 2 </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=8vmPwKvn8MY" />
          </div>
          <div class="distance">
            <p>
              <b> Shazam 2 </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=xXN0lHWrBnU" />
          </div>
          <div class="distance">
            <p>
              <b> Man of Steel 2 </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=qfmKqKZx_cg" />
          </div>
          <div class="distance">
            <p>
              <b> Iron Man: Legacy </b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=x0e7hHStFz4" />
          </div>
          <div class="distance">
            <p>
              <b> Spider-Man 3</b>
            </p>
            <ReactPlayer url="https://www.youtube.com/watch?v=ECEUloR7Zd8" />
          </div>
          <p>
            <b> Jurassic World 3 </b>
          </p>
          <div class="distance">
            <ReactPlayer url="https://www.youtube.com/watch?v=9DEJ207Boww" />
          </div>
          <p>
            <b> It Chapter 3</b>
          </p>
          <div class="distance">
            <ReactPlayer url="https://www.youtube.com/watch?v=yi4BZI2KbaM" />
          </div>
          <p>
            <b> Maleficent 3 </b>
          </p>
          <div class="distance">
            <ReactPlayer url="https://www.youtube.com/watch?v=pby_wOUU_Dc&pp=QAA%3D" />
          </div>
          <p>
            <b> Tangled Ever After </b>
          </p>
          <div class="distance">
            <ReactPlayer url="https://www.youtube.com/watch?v=mvGhDqz6oFM" />
          </div>
        </section>
      </div>
    </body>
  );
}
