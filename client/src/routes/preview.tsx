import { createFileRoute } from '@tanstack/react-router'
import Preview from '../pages/Preview/Preview.tsx'

export const Route = createFileRoute('/preview')({
	component: Preview
})
