import sun from "../assets/images/sun.png";

function HeaderSection () {
    return (
        <div className="section-1">
            <h4>devfinder</h4>
            <button className="btn-mode" >
              LIGHT <img width="18" src={sun} alt=""/>
            </button>
        </div>
    );

}

export default HeaderSection;