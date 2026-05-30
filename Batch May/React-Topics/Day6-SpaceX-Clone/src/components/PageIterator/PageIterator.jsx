import { PageData } from "../PageContent/PageContent";
import { FaArrowRightLong } from "react-icons/fa6";

const PageIterator = () => {
  return (
    <>
      {PageData.map((ele, index) => {
        console.log(ele.media.includes("mp4"));
        return (
          <div className="firstPage">
            {ele.media.includes("mp4") ? (
              <video src={ele.media} autoPlay muted loop></video>
            ) : (
              <img src={ele.media}></img>
            )}

            <div className="details">
              <h1>{ele.content.title}</h1>
              <p>{ele.content.desc}</p>
              <div className="btn">
                <button>
                  {ele.content.btnText} <FaArrowRightLong />
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default PageIterator;
