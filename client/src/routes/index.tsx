import { createFileRoute, redirect } from '@tanstack/react-router'
import { useAuth } from '../hooks/useAuth.tsx'
import Preview from '../pages/Preview/Preview.tsx'

export const Route = createFileRoute('/')({
	beforeLoad: async () => {
		if (useAuth) {
			throw redirect({
				to: '/wallet'
			})
		}
	},
	component: Preview
})
