//import { news } from './newsItems'

//@Desc: Adds news items to the news page  (remove id in main page)

const news = [
    {
        id: 1,
        htmlElement:
            <div class="content">
                <p class="date">(Jul. 24,2021)</p>
                <p class="annoucement">
                    Our classes will be via Zoom accessible from the eClass (formerly
                    Moodle) page for the course. There are a few peculiarities you should
                    note and follow:
        </p>
                <ol>
                    <li>You must use a yorku.ca email to access eClass and Zoom</li>
                    <li>
                        Lectures will be recorded and saved for future viewing (via
                        Eccho360)
          </li>
                    <li>
                        Problem Sets, Midterm, and Final Exam will be posted on
            <a href="http://www.cs.yorku.ca/~gt/courses/MATH1090F21/1090.html">
                            THIS page
            </a>
            . Answers to ALL those must be uploaded by the students to eClass at
            or before established rigid deadlines.
          </li>
                    <li>
                        Assignment Deadlines will be within the usual 2-3 weeks with NO
                        extensions: Solutions will be posted on THIS page below shortly
                        after the time (on the due date) assignments are due..
          </li>
                    <li>
                        Midterm and Final will be time-limited just as the analogous
                        face-2-face events would be. They will be due in 90 minutes
                        (midterm) and 2 hours (exam).
          </li>
                    <li>
                        The MidTerm date is pre-announced below. The Final Exam date/time
                        will be set by the Registrar.
          </li>
                </ol>
            </div>
    }
];



    const newsContainer = document.getElementById("news-container");
window.addEventListener("DOMContentLoaded", (event) => {
 

    const nodes = news.map((item) => {
            return item.htmlElement
    })

    newsContainer.append(...nodes);
});



const form = document.getElementById("form");
form.addEventListener("onsubmit", filterBySearch);
function filterBySearch(event) {
  e.preventDefault();
  const node = newsContainer;
  node.querySelectorAll("*").forEach((n) => n.remove());
  console.log(event);
}
