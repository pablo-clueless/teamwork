import { ErrorFallback } from 'components/shared/ErrorFallback'

import { ErrorBoundary } from 'react-error-boundary'
import Routes from 'Routes'

const App = () => {
	return (
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<Routes />
		</ErrorBoundary>
	)
}

export default App
