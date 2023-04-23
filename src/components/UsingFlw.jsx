import { useFlutterwave, closePaymentModal } from 'flutterwave-react-v3';
import { useNavigate } from 'react-router-dom';

import Styles from '../styles/flw.module.scss'

export default function UsingFlw({email, phone, name, amount}) {

  const navigate = useNavigate()

  const publicKey = import.meta.env.VITE_FLW_KEY


  const config = {
    public_key: publicKey,
    tx_ref: Date.now(),
    amount,
    currency: 'NGN',
    payment_options: 'card,ussd,banktransfer',
    customer: {
      email,
       phone_number: phone,
      name: name,
    },
    customizations: {
      title: 'Pay Fundamental',
      description: 'Payment for items in cart',
      logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
    },
  };

  const handleFlutterPayment = useFlutterwave(config);

  return (
    <div className={Styles.flwButton}>

      <button 
        onClick={() => {
          handleFlutterPayment({
            callback: (response) => {
               console.log(response);
                closePaymentModal() // this will close the modal programmatically
            },
            onClose: () => {
              navigate('/success')
            },
          });
        }}
      >
        Pay Now!
      </button>
    </div>
  );
}