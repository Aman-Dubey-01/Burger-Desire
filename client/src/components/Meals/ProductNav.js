import './ProductNav.css';


function ProductNav({ filterItem, categoryList }) {
    return (
        <>
            <nav className="Productnavbar">
                <div className="btn-group">
                    {categoryList.map((curElem) => {
                        return (
                            <button
                                className="btn-group__item" 
                                onClick={() => filterItem(curElem)} >
                                {curElem}

                                
                            </button>
                        );
                    })}
                </div>
            </nav>
        </>)

}

export default ProductNav;