import { ErrorFallback } from 'components/shared/ErrorFallback'
import { Home } from 'pages/Home'
import { ErrorBoundary } from 'react-error-boundary'

const App = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Home />
		</ErrorBoundary>
	)
}

export default App
