export default function HeroSection() {
    return (
        <div className="bg-light" style={{height:"250px"}}>
            <div className="container" style={{ marginBottom: "180px", marginTop: "60px"}}>
                <div className="row" >
                    <div className="col d-flex justify-content-between align-items-center" style={{marginTop:"40px"}}>
                        <h1 style={{ fontSize: "36px", fontWeight: "600", color: "#424242", position: "relative", left: "90px" }}>Support Portal</h1>
                        <button
                            type="button"
                            className="btn"
                            style={{
                                height: "40px",
                                backgroundColor: "#387ED1",
                                color: "#FFF",
                                padding: "0 16px",
                                fontSize: "16px",
                                position: "relative",
                                right: "30px"
                            }}
                        >
                            My tickets
                        </button>
                    </div>
                    <div className="row mt-4">
                        <div className="col">
                            <div className="input-group" style={{width:"93%",position:"relative",left:"85px" }}>
                                <span className="input-group-text bg-white border-end-0">
                                    <i className="fa-solid fa-magnifying-glass" style={{ color: "#888",marginLeft:"10px" }}></i>
                                </span>
                                <input
                                    type="search"
                                    className="form-control border-start-0"
                                    placeholder="Eg: How do I open my account, How do i activate F&O..."
                                    aria-label="Search"
                                    style={{ height: "60px"}}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}