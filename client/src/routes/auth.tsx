import { createFileRoute } from '@tanstack/react-router'
import Auth from '../pages/Auth/Auth.tsx'

export const Route = createFileRoute('/auth')({
	component: Auth
})
