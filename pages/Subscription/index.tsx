import axios from "axios"
import getStripe from '../../get-stripe.js'

export default function index() {





    const redirectToCheckout = async () => {
        // Create Stripe checkout
        const {
          data: { id },
        } = await axios.post('/api/checkout_sessions', {
          items: {
            price: 'price_1MbblEEPYl4oiRULhEGEhPvg',
            quantity: 1,
          }
        });
    
        // Redirect to checkout
        const stripe = await getStripe();
        await stripe.redirectToCheckout({ sessionId: id });
      };
    
    
    
  return (
    <div className='container'>
        <h1>Subscription</h1>
        <button onClick={redirectToCheckout}>Subscribe</button>



    </div>
  )
}
