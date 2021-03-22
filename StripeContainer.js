import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
// import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51HLMIgAe7e74HIRPcTj50N1suvT6EXHEamBVcLkFLQcHPmqbqMA1m9fSYAn5hngqm9kBzBaVUueUXxeEiby67HOm00JyjtNPyu"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
		<Elements stripe={stripeTestPromise}>
			{/* <PaymentForm /> */}
		</Elements>
	)
}
