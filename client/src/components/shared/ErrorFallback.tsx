type ErrorFallbackProps = {
	error: Error
	resetErrorBoundary: () => void
}

export const ErrorFallback = ({
	error,
	resetErrorBoundary,
}: ErrorFallbackProps) => {
	return (
		<div
			role="alert"
			className="absolute top-1/2 left-1/2 flex max-w-[70ch] -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center rounded-md bg-red-200 py-6 px-10 text-red-800 outline outline-2 outline-offset-[3px] outline-red-300">
			<h2 className="text-4xl font-bold">Oops! 🤭</h2>
			<p className="pt-4 text-center text-sm leading-6">
				It seems something went wrong, Sorry for the inconvenience. <br />{' '}
				We suggest you reload the page or click the{' '}
				<strong>try again</strong> button to resolve the issue.
			</p>
			{process.env.NODE_ENV === 'development' ||
			process.env.APP_STAGING === 'true' ? (
				<pre className="mt-5 bg-white py-3 px-5">{error.message}</pre>
			) : null}

			<div className="mt-10 flex items-center gap-10">
				<button
					onClick={resetErrorBoundary}
					className="rounded border border-red-600 bg-red-300/30 py-3 px-8 text-sm text-red-600 transition-all hover:opacity-80 active:scale-95">
					Try again
				</button>
				<button
					onClick={resetErrorBoundary}
					className="rounded bg-red-600 py-3 px-8 text-sm text-white transition-all hover:opacity-80 active:scale-95">
					Go back home
				</button>
			</div>
		</div>
	)
}
