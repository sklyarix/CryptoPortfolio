import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
	beforeLoad: () => {
		if (true) {
			console.log('go')
		} else {
			console.log('else')
		}
	}
})

/*
// src/routes/_authenticated.tsx
export const Route = createFileRoute('/')({
	beforeLoad: async ({ location }) => {
		if (!isAuthenticated()) {
			throw redirect({
				to: '/login',
				search: {
					// Use the current location to power a redirect after login
					// (Do not use `router.state.resolvedLocation` as it can
					// potentially lag behind the actual current location)
					redirect: location.href,
				},
			})
		}
	},
})

 */
