import { useEffect } from 'react'
import Box from '@mui/material/Box'
import CssBaseline from '@mui/material/CssBaseline'
import AlertNotification from './components/AlertNotification'
import AppHeader from './components/AppHeader'
import AppLoader from './components/AppLoader'
import SideNavigation from './components/SideNavigation'
import ViewContent from './components/ViewContent'
import useArticlesHook from './hooks/useArticlesHook'

function App() {

  const { articles, current, loading, error, fetchArticles, setCurrentArticle } = useArticlesHook()

  useEffect(() => {
    fetchArticles()
  }, [])

  if (loading) {
    return <AppLoader isLoading={loading} />
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppHeader />
      <SideNavigation itemList={articles} itemAction={setCurrentArticle} />
      <Box component="main" sx={{ flexGrow: 1, p: 3, bgcolor: '#e0e0e0', height: '100vh' }}>
        {error && <AlertNotification type='error' message={error} />}
        {!error && (<ViewContent article={current} />)}
      </Box>
    </Box>
  )
}

export default App
