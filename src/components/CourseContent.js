import React, { useEffect } from "react"
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import data from '../data';

// The number of columns change by resizing the window
const CourseContent = () => {

  useEffect(() => {
    let main = document.getElementsByTagName('body');
    main[0].setAttribute('class', 'course-content-bg');

    return (() => {
      main[0].removeAttribute('class');
    })
  }, []);

  return (
    <>
      <div className="course-content-header">HTML</div>
      <div className="course-container">
        <Masonry columnsCount={5}>
          {
            data.cssCourseContent.map((item, i) =>
              <div className={`course-content-box ${item.colorClass}`} key={i}>
                <h2>{item.heading}</h2>
                <ul>
                  {
                    item.list.map((innerItem, index) =>
                      <li
                        key={index}
                        dangerouslySetInnerHTML={{ __html: innerItem }}
                      >
                      </li>
                    )
                  }
                </ul>
              </div>
            )
          }
        </Masonry>
      </div>
    </>
  )
}


export default CourseContent;