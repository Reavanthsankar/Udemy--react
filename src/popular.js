import one from "./assets/images/c1.jpg";
import two from "./assets/images/c2.jpg";
import three from "./assets/images/c3.jpg";
import four from "./assets/images/c4.jpg";
export default Popular


function Popular(){
    return(
      <div className="popular">
        <h1 className="popular__title">Most popular</h1>
        <p className="popular__subtitle"> Pick the best for you</p>
        <div className="popular__container">
            <div className="course-card">
                <img src={(one)} alt="c1"/>
                <h3>2023 python for everybody</h3>
                <p>By:Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div className="course-card">
                <img src={(two)} alt="c2"/>
                <h3>2023 Advanced programming</h3>
                <p>By:Mark zyan</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>999 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={(three)} alt="c3"/>
                <h3>2023 MERN stack</h3>
                <p>By:Han zimer</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>1499 <del>2999</del></p>
            </div>
            <div className="course-card">
                <img src={(four)} alt="c4"/>
                <h3>2023 MEAN stack</h3>
                <p>By:Ryan linn</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>1999 <del>2499</del></p>
            </div>
            <div className="course-card">
                <img src={(one)} alt="c1"/>
                <h3>2023 python for everybody</h3>
                <p>By:Col steele</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>449 <del>999</del></p>
            </div>
            <div className="course-card">
                <img src={(two)} alt="c2"/>
                <h3>2023 Advanced programming</h3>
                <p>By:Mark zyan</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>999 <del>1999</del></p>
            </div>
            <div className="course-card">
                <img src={(three)} alt="c3"/>
                <h3>2023 MERN stack</h3>
                <p>By:Han zimer</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>1499 <del>2999</del></p>
            </div>
            <div className="course-card">
                <img src={(four)} alt="c4"/>
                <h3>2023 MEAN stack</h3>
                <p>By:Ryan linn</p>
                <p>4.9 ⭐⭐⭐⭐</p>
                <p>1999 <del>2499</del></p>
            </div>
        </div>
     </div>
    )
}