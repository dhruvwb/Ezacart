import { Add, Remove } from '@material-ui/icons'
import './cart.css'

export const Cart = () => {
  return (
    <div className='Wrapper'>
    <h1 className="Title">YOUR BAG</h1>
    <div className="Top">
        <button className="TopButton">CONTINUE SHOPPING</button>
        <div className="TopTexts">
                <span className="TopText">Shopping bag(2)</span>
                <span className="TopText">Your wish(0)</span>
        </div>
        <button className="TopButton">CHECKOUT NOW</button>
    </div>

    <div className="Bottom">
        <div className="Info">
            <div className="Product">
                <div className="ProductDetail">
                <img className='Image' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A" alt='h'/>
                <div className="Details">
                    <span className="ProductName"><b>Product:</b> JESSIE THUNFRT SHOES</span>

                   <span className="ProductName"><b>ID:</b>9876543</span>

                    <div className="ProductColor">
                        <span className="ProductSize"><b>Size:</b>34.6</span>
                    </div>

                    </div>
                </div>

                <div className="priceDetail">
                    <div className="ProductAmountContainer">
                        <Add />
                        <div className="ProductAmount">2</div>

                        <Remove />
                    </div>

                    <div className="ProductPrice">$300 </div>
                </div>
                </div>
                <hr />


                <div className="Product">
                <div className="ProductDetail">
                <img className='Image' alt='hu' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                <div className="Details">
                    <span className="ProductName"><b>Product:</b> JESSIE THUNFRT SHOES</span>

                   <span className="ProductName"><b>ID:</b>9876543</span>

                    <div className="ProductColor">
                        <span className="ProductSize"><b>Size:</b>34.6</span>
                    </div>

                    </div>
                </div>

                <div className="priceDetail">
                    <div className="ProductAmountContainer">
                        <Add />
                        <div className="ProductAmount">2</div>

                        <Remove />
                    </div>

                    <div className="ProductPrice">$300 </div>
                </div>
                </div>
                <hr />


                <div className="Product">
                <div className="ProductDetail">
                <img  className='Image' alt='' src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1614188818-TD1MTHU_SHOE_ANGLE_GLOBAL_MENS_TREE_DASHERS_THUNDER_b01b1013-cd8d-48e7-bed9-52db26515dc4.png?crop=1xw:1.00xh;center,top&resize=480%3A%2A"/>
                <div className="Details">
                    <span className="ProductName"><b>Product:</b> JESSIE THUNFRT SHOES</span>

                   <span className="ProductName"><b>ID:</b>9876543</span>

                    <div className="ProductColor">
                        <span className="ProductSize"><b>Size:</b>34.6</span>
                    </div>

                    </div>
                </div>

                <div className="priceDetail">
                    <div className="ProductAmountContainer">
                        <Add />
                        <div className="ProductAmount">2</div>

                        <Remove />
                    </div>

                    <div className="ProductPrice">$300 </div>
                </div>
                </div>
                <hr />




        </div>

        <div className="Summary">
            <h1 className="SummaryTitle">ORDER SUMMARY</h1>
            <div className="SummaryItem">
                <span className="SummaryItemText">Subtotal
                </span>
                <span className="SummaryItemPrice">$ 5.99</span>

            </div>

            <div className="SummaryItem">
                <span className="SummaryItemText">Estimated Shipping
                </span>
                <span className="SummaryItemPrice">$ 5.99</span>
            </div>


            <div className="SummaryItem">
                <span className="SummaryItemText">Shipping Discount
                </span>
                <span className="SummaryItemPrice">$ -2.34</span>
            </div>

            <div className="SummaryItem" type="total">
                <span className="SummaryItemText">Total
                </span>
                <span className="SummaryItemPrice">$ 80</span>
            </div>
                
                <button className="Button">CHECKOUT NOW</button>
        </div>
    </div>
    </div>
  )
}
