import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import Layout from './Layout'

ReactDOM
  .createRoot(document.getElementById(`root`)!)
  .render(
    <StrictMode>
      <Layout
        routes={[
          {
            path: `/`,
            Component: () => <p>When loaded by a host, this component renders host page content.</p>,
          },
        ]}
      />
    </StrictMode>,
  )
