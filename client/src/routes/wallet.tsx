import { createFileRoute } from '@tanstack/react-router'
import Wallet from '../pages/Wallet/Wallet.tsx'

export const Route = createFileRoute('/wallet')({
	component: Wallet
})
