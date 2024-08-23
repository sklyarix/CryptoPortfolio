import { createFileRoute } from '@tanstack/react-router'
import Convert from '../../pages/Convert/Convert.tsx'

export const Route = createFileRoute('/wallet/convert')({
	component: Convert
})
