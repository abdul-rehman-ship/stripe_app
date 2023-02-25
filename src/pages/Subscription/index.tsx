import axios from "axios"
import getStripe from '../../lib/get-stripe';


export default function index() {





    const redirectToCheckout = async () => {
      localStorage.setItem("mobile","1")
      localStorage.setItem("email","")
      localStorage.setItem("pass","")

        // Create Stripe checkout
        const {
          data: { id },
        } = await axios.post('/api/checkout_sessions', {
          items: [{
            price: 'price_1MbblEEPYl4oiRULhEGEhPvg',
            quantity: 1,
          }]
        });
    
        // Redirect to checkout
        const stripe = await getStripe();
        await stripe.redirectToCheckout({ sessionId: id });
      };
    
    
    
  return (
    
      <div className="flex justify-center items-center h-screen bg-black">
        <button className="px-4 py-2 rounded bg-white text-black font-bold" onClick={redirectToCheckout}>
          Subscribe Mobile App
        </button>
      </div>
    
  )
}
